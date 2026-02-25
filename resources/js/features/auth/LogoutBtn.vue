<script setup lang="ts">
import { useAppStore } from '@entities/app/stores/appStore';
import { api, authEndpoints } from '@entities/auth/api/endpoints';
import notify from '@shared/services/notifyService';


const appStore = useAppStore();

const logout = async () => {
    try {
        const url = authEndpoints.api.logout;

        const { status } = await api.post(url);

        if (status === 200) {
            appStore.removeAuth();
            notify.success('Вы успешно вышли из аккаунта!');

            setTimeout(() => { window.location.reload() }, 1000);
            return true;
        }
    } catch (error) {
        notify.error('Ошибка при выходе из аккаунта!');

        console.log('Logout error: ' + error.message);
    }
}

</script>

<template>
    <button @click="logout" class="inline-flex items-center px-4 h-10 rounded-lg
        bg-red-500 hover:bg-red-600 active:bg-red-700
        text-white text-sm font-medium
        transition focus:outline-none focus:ring-2 focus:ring-red-400">
        Выйти
    </button>
</template>

<style scoped></style>