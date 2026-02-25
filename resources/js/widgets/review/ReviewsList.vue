<script setup lang="ts">
import { ref } from 'vue';
import { api, subjectEndpoints } from '@entities/subject/api/endpoints';
import { SubjectData } from '@entities/subject/interfaces/subject.interface';
import { Paginator } from '@shared/interfaces/paginator.interface';

const props = defineProps<{
    modelValue: SubjectData;
    total: number;
}>();

const reviews = ref([...props.modelValue.reviews]);
const page = ref(2);
const perPage = 10;
const isEnd = ref<boolean>(false);
const loading = ref<boolean>(false);

const fetchReviews = async () => {
    if (loading.value) return;
    if (reviews.value.length >= props.total) return;
    loading.value = true;

    try {
        const url = subjectEndpoints.api.getItems;
        const requestData = {
            url: props.modelValue.subject.url,
            page: page.value,
            per_page: perPage,
        };
        const { status, data } = await api.post<{ data: Paginator<SubjectData> }>(url, requestData);

        if (status === 200) {
            const paginator = data.data;
            reviews.value.push(...paginator.data.reviews);
            page.value++;
            if (paginator.data.reviews?.length === 0) {
                isEnd.value = true;
            }
        }
    } finally {
        loading.value = false;
    }
};

const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleString('ru-RU', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
};
</script>

<template>
    <div class="space-y-4">
        <div v-for="review in reviews" :key="review.reviewId" class="bg-white shadow rounded-lg p-4 space-y-2">
            <!-- Автор и рейтинг -->
            <div class="flex items-center mb-2">
                <img :src="review.author.avatarUrl.replace('{size}', 'big')" class="w-10 h-10 rounded-full mr-3" />
                <div>
                    <p class="font-semibold">{{ review.author.name }}</p>
                    <p class="text-sm">{{ review.author.professionLevel || review.author.rtb }}</p>
                    <p class="text-sm">Рейтинг: {{ review.rating }}/5</p>
                </div>
            </div>

            <!-- Дата и время -->
            <p class="text-xs text-gray-500">
                Обновлено: {{ formatDate(review.updatedTime) }}
            </p>

            <!-- Текст отзыва -->
            <p>{{ review.text }}</p>

            <!-- Фото -->
            <div v-if="review.photos.length" class="mt-2 flex gap-2 flex-wrap">
                <img v-for="photo in review.photos" :key="photo.id" :src="photo.urlTemplate.replace('{size}', 'M')"
                    class="w-24 h-24 object-cover rounded" />
            </div>

            <!-- Реакции -->
            <p class="text-sm text-gray-600">
                👍 {{ review.reactions.likes }} | 👎 {{ review.reactions.dislikes }}
            </p>

            <!-- Ответ компании -->
            <div v-if="review.businessComment" class="mt-2 p-3 bg-gray-50 rounded border-l-4 border-blue-500">
                <p class="text-sm font-semibold mb-1">Ответ компании:</p>
                <p class="text-sm">{{ review.businessComment.text }}</p>
                <p class="text-xs text-gray-500 mt-1">
                    Обновлено: {{ formatDate(review.businessComment.updatedTime) }}
                </p>
            </div>
        </div>

        <div class="text-center py-4">
            <button v-if="!isEnd" @click="fetchReviews" :disabled="loading"
                class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50">
                {{ loading ? 'Загрузка...' : 'Показать ещё' }}
            </button>
            <p v-else class="text-white">Все отзывы загружены</p>
        </div>
    </div>
</template>