<script setup lang="ts">
import { api, subjectEndpoints } from '@entities/subject/api/endpoints';
import { Subject, SubjectData } from '@entities/subject/interfaces/subject.interface';
import { Paginator } from '@shared/interfaces/paginator.interface';
import notify from '@shared/services/notifyService';
import SubjectCard from '@widgets/subject/SubjectCard.vue';
import { onMounted, ref, computed } from 'vue';

interface InputProps {
    subjects: Subject[];
}

const props = defineProps<InputProps>();

const subjectsPaginator = ref<Paginator<SubjectData> | null>(null);
const activeTab = ref<string | null>(null);

const activeSubjectData = computed<SubjectData | null>(() => {
    if (!subjectsPaginator.value) return null;

    return subjectsPaginator.value.data.subject.yandex_business_id === activeTab.value
        ? subjectsPaginator.value.data
        : null;
});

const selectTab = async (id: string, itemUrl: string) => {
    activeTab.value = id;

    try {
        const url = subjectEndpoints.api.getItems;

        const requestData = {
            perPage: 10,
            page: 1,
            url: itemUrl,
        }

        const { status, data } = await api.post<{ data: Paginator<SubjectData> }>(url, requestData);

        if (status === 200) {
            subjectsPaginator.value = data.data;
        }
    } catch (error: any) {
        notify.error(error.response?.data?.message || 'Ошибка загрузки');
    }
};

onMounted(() => {
    if (props.subjects.length) {
        selectTab(props.subjects[0].yandex_business_id, props.subjects[0].url);
    }
});
</script>

<template>
    <div v-if="props?.subjects?.length > 0">

        <div class="flex border-b">
            <button v-for="subject in props.subjects" :key="subject.yandex_business_id"
                @click="selectTab(subject.yandex_business_id, subject.url)" :class="[
                    'px-4 py-2',
                    activeTab === subject.yandex_business_id
                        ? 'border-b-2 border-blue-600 text-blue-600'
                        : 'text-gray-500'
                ]">
                {{ subject.yandex_business_id }}
            </button>
        </div>

        <SubjectCard v-if="activeSubjectData" :total="subjectsPaginator.total" :model-value="activeSubjectData" />

    </div>
    <template v-else>
        <div class="flex flex-col items-center justify-center py-16 text-gray-400">
            <svg class="w-16 h-16 mb-4 text-gray-300">
                <use xlink:href="#icon-empty" />
            </svg>

            <p class="text-lg font-semibold mb-2">Сейчас нет элементов</p>
            <p class="text-sm text-gray-500">Добавьте новый</p>
        </div>
    </template>
</template>