<script setup lang="ts">
const model = defineModel<string>()

interface InputProps {
    title: string;
    placeholder: string;
    name: string;
    errors: { [field: string]: string[] };
}

const props = defineProps<InputProps>();
</script>

<template>
    <label class="block">
        <h5 class="font-semibold text-sm mb-2 text-gray-800 dark:text-gray-200">
            {{ props.title ?? '' }}
        </h5>

        <div class="relative">
            <input :class="[
                'w-full rounded-xl border px-4 py-3 text-sm transition outline-none',
                'bg-white dark:bg-gray-900',
                'border-gray-300 dark:border-gray-700 text-white',
                'focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
                props.errors && props.errors[props.name]
                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                    : ''
            ]" v-model="model" type="email" :placeholder="props.placeholder" :name="props.name" />

            <span v-if="props.errors && props.errors[props.name]"
                class="absolute left-0 -bottom-5 text-red-500 text-xs">
                {{ props.errors[props.name][0] }}
            </span>
        </div>
    </label>
</template>

<style scoped></style>