<script setup lang="ts">
import { ref } from 'vue';
import notify from '@shared/services/notifyService';
import InputText from '@shared/ui/InputText.vue';
import { api, subjectEndpoints } from '@entities/subject/api/endpoints';

interface SubjectData {
    url: string;
}

const errors = ref<{ [field: string]: string[] }>({});
const isLoading = ref(false);

const formData = ref<SubjectData>({
    url: '',
});

const onSubmit = async () => {
    errors.value = {};
    isLoading.value = true;

    try {
        const url = subjectEndpoints.api.store;

        const { status } = await api.post(url, formData.value);

        if (status === 200) {
            notify.success('Организация успешно добавлена!');
            formData.value.url = '';
            return true;
        }
    } catch (error: any) {
        if (error.response?.data?.errors) {
            errors.value = error.response.data.errors;
            notify.error('Ошибка при добавлении организации!');
        } else {
            const message = error.response?.data?.message || 'Ошибка при добавлении организации!';
            notify.error(message);
            console.error('Add organization error:', error);
        }
    } finally {
        isLoading.value = false;
    }
};
</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950 px-4">
        <form @submit.prevent="onSubmit"
            class="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 space-y-5 transition">

            <h1 class="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
                Добавить организацию
            </h1>

            <InputText v-model="formData.url" title="URL организации"
                placeholder="https://yandex.ru/maps/org/samoye_populyarnoye_kafe/1010501395/reviews/" name="url"
                :errors="errors" />

            <button type="submit" class="w-full rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.99]
                 text-white font-medium py-3 transition disabled:opacity-60 disabled:pointer-events-none"
                :disabled="isLoading">
                <span v-if="!isLoading">Добавить</span>
                <span v-else class="animate-pulse">Подождите...</span>
            </button>

        </form>
    </div>
</template>

<style scoped></style>