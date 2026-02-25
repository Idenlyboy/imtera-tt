<script setup lang="ts">
import { SubjectData } from '@entities/subject/interfaces/subject.interface';
import ReviewsList from '@widgets/review/ReviewsList.vue';

const props = defineProps<{
    modelValue: SubjectData | null;
    total: number | null;
}>();

</script>

<template>
    <div v-if="modelValue" class="flex flex-1 overflow-hidden">

        <aside class="w-80 p-4 border-r bg-gray-900 text-white flex flex-col">
            <h3 class="text-lg font-semibold mb-2">Отзывы</h3>
            <p class="text-sm mb-4">Всего: {{ total }}</p>

            <h4 class="font-semibold mb-2">Аспекты</h4>

            <div role="list" class="flex flex-col gap-2 overflow-auto">
                <div v-for="aspect in modelValue.aspects" :key="aspect.text" role="listitem"
                    class="carousel__item _align_center mx-1">
                    <button type="button"
                        class="button _view_secondary-gray _ui _size_large w-full flex justify-between items-center px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition">
                        <div class="flex items-center gap-2">
                            <span class="font-medium">{{ aspect.text }}</span>
                            <span class="text-sm text-green-400 font-semibold">{{ Math.ceil(aspect.positive /
                                aspect.count *
                                100) }}%</span>
                        </div>
                        <span class="text-xs text-gray-400">{{ aspect.count }} отзывов</span>
                    </button>
                </div>
            </div>
        </aside>

        <div class="flex-1 p-4 overflow-auto">
            <ReviewsList :model-value="modelValue" :total="total" />
        </div>

    </div>
</template>

<style scoped>
.carousel__item {
    transition: transform 0.2s ease;
}

.carousel__item:hover {
    transform: scale(1.02);
}
</style>