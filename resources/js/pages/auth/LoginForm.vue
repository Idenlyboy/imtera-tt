<script setup lang="ts">
import { useAppStore } from '@entities/app/stores/appStore';
import { api, authEndpoints } from '@entities/auth/api/endpoints';
import { Auth, LoginData } from '@entities/auth/interfaces/app.interface';
import notify from '@shared/services/notifyService';
import InputEmail from '@shared/ui/InputEmail.vue';
import InputPass from '@shared/ui/InputPass.vue';
import { ref } from 'vue';

interface InputProps {
    role: string,
}

const props = defineProps<InputProps>();

const appStore = useAppStore();
const errors = ref<{ [field: string]: string[] }>({});
const isLoading = ref<boolean>(false);

const formData = ref<LoginData>({
    email: '',
    password: '',
});

const onSubmit = async () => {
    errors.value = {};
    isLoading.value = true;

    try {
        const url = authEndpoints.api.login;

        const requestData = {
            ...formData.value,
            role: props.role
        };

        const { status, data } = await api.post<{ data: Auth }>(url, requestData);

        if (status === 200) {
            appStore.setAuth(data.data);

            notify.success('Вы успешно вошли в аккаунт!');

            await setTimeout(() => {
                window.location.href = '/';
            }, 1000);

            return true;
        }
    } catch (error: any) {
        if (error.response?.data?.errors) {
            notify.error('Ошибка при входе в аккаунт!');
            errors.value = error.response.data.errors;
        } else {
            const message = error.response?.data?.message || 'Ошибка при входе в аккаунт!';
            notify.error(message);
            console.error('Login error:', error);
        }
    } finally {
        isLoading.value = false;
    }
}
</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950 px-4">

        <form @submit.prevent="onSubmit"
            class="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 space-y-5 transition">

            <h1 class="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
                Вход
            </h1>

            <InputEmail v-model="formData.email" title="Почта" placeholder="Почта" name="email" :errors="errors" />

            <InputPass v-model="formData.password" title="Пароль" placeholder="Пароль" name="password"
                :errors="errors" />

            <button type="submit" class="w-full rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.99]
                       text-white font-medium py-3 transition disabled:opacity-60 disabled:pointer-events-none"
                :disabled="isLoading">
                <span v-if="!isLoading">Войти</span>
                <span v-else class="animate-pulse">Вход...</span>
            </button>

            <a :href="authEndpoints.web.reg"
                class="block text-center text-sm text-blue-600 hover:text-blue-700 transition">
                Создать аккаунт
            </a>

        </form>
    </div>
</template>

<style scoped></style>