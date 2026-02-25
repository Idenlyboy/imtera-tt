<script setup lang="ts">
import { ref } from 'vue';

const password = defineModel<string>()

interface AuthProps {
    title: string;
    placeholder: string;
    name: string;
    errors: { [field: string]: string[] };
}

const props = defineProps<AuthProps>();

const type = ref<'password' | 'text'>('password');

const toggleVisibility = () => {
    type.value = type.value === 'password' ? 'text' : 'password';
};
</script>

<template>
    <label class="block">
        <h5 class="font-semibold text-sm mb-2 text-gray-800 dark:text-gray-200">
            {{ props.title ?? '' }}
        </h5>

        <div class="relative">
            <input :class="[
                'w-full rounded-xl border px-4 py-3 pr-12 text-sm transition outline-none',
                'bg-white dark:bg-gray-900',
                'border-gray-300 dark:border-gray-700 text-white',
                'focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
                props.errors && props.errors[props.name]
                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                    : ''
            ]" v-model="password" :type="type" :placeholder="props.placeholder" autocomplete="new-password"
                :name="props.name" />

            <span v-if="props.errors && props.errors[props.name]"
                class="absolute left-0 -bottom-5 text-red-500 text-xs">
                {{ props.errors[props.name][0] }}
            </span>

            <button
                class="absolute top-0 right-0 bottom-0 w-12 flex items-center justify-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition"
                type="button" @click="toggleVisibility">
                <svg v-if="type === 'text'" class="w-5 h-5">
                    <use href="/images/icons.svg#eye-visible"></use>
                </svg>
                <svg v-else class="w-5 h-5">
                    <use href="/images/icons.svg#eye-hidden"></use>
                </svg>
            </button>
        </div>
    </label>
</template>

<style scoped></style>