<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import { SubjectData } from '@entities/subject/interfaces/subject.interface';
import { api, subjectEndpoints } from '@entities/subject/api/endpoints';
import { Paginator } from '@shared/interfaces/paginator.interface';

const props = defineProps<{
    modelValue: SubjectData;
}>();

const reviews = ref([...props.modelValue.reviews]);

const page = ref(2);
const perPage = 10;
const loading = ref(false);
const total = ref(0);

const fetchReviews = async () => {
    if (loading.value) return;
    loading.value = true;

    try {
        const url = subjectEndpoints.api.getItems;

        const requestData = {
            url: props.modelValue.subject.url,
            page: page.value,
            per_page: perPage
        }

        const { status, data } = await api.post<{ data: Paginator<SubjectData> }>(url, requestData);

        if (status === 200) {
            const paginator = data.data;

            reviews.value.push(...paginator.data.reviews);
            total.value = paginator.total;

            page.value++;
        }
    } finally {
        loading.value = false;
    }
};

const handleScroll = (e: Event) => {
    const el = e.target as HTMLElement;

    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 50) {
        if (reviews.value.length < total.value) {
            fetchReviews();
        }
    }
};

onMounted(fetchReviews);
</script>

<template>
    <div class="space-y-4 h-full overflow-auto" @scroll.passive="handleScroll">

        <div v-for="review in reviews" :key="review.reviewId" class="bg-white shadow rounded-lg p-4">
            <div class="flex items-center mb-2">

                <img :src="review.author.avatarUrl.replace('{size}', 'big')" class="w-10 h-10 rounded-full mr-3" />

                <div>
                    <p class="font-semibold">{{ review.author.name }}</p>
                    <p class="text-sm">Рейтинг: {{ review.rating }}/5</p>
                </div>

            </div>

            <p>{{ review.text }}</p>

            <div v-if="review.photos.length" class="mt-2 flex gap-2 flex-wrap">
                <img v-for="photo in review.photos" :key="photo.id" :src="photo.urlTemplate.replace('{size}', 'M')"
                    class="w-24 h-24 object-cover rounded" />
            </div>
        </div>

        <div v-if="loading" class="text-center py-4">
            Загрузка...
        </div>

    </div>
</template>