<script lang="ts" setup>
import { computed, ref, watch } from 'vue';

interface PaginationProps {
  total: number;
  current?: number;
  pageSize?: number;
  pageSelect?: number[];
  showJumpSearch?: boolean;
}

const props = withDefaults(defineProps<PaginationProps>(), {
  current: 1,
  pageSize: 10,
  showJumpSearch: false,
});

const emit = defineEmits<{
  (e: 'update:current', value: number): void;
  (e: 'change', value: number): void;
}>();

const currentPage = ref(props.current);

watch(() => props.current, (val) => {
  currentPage.value = val;
});

const totalPages = computed(() => Math.ceil(props.total / props.pageSize));

const pages = computed(() => {
  const result: number[] = [];
  for (let i = 1; i <= totalPages.value; i++) {
    result.push(i);
  }
  return result;
});

const handleClick = (page: number) => {
  if (page < 1 || page > totalPages.value) return;
  currentPage.value = page;
  emit('update:current', page);
  emit('change', page);
};

const handlePrev = () => {
  if (currentPage.value > 1) {
    handleClick(currentPage.value - 1);
  }
};

const handleNext = () => {
  if (currentPage.value < totalPages.value) {
    handleClick(currentPage.value + 1);
  }
};
</script>

<template>
  <div class="sw-pagination">
    <button
      class="sw-pagination__button"
      :disabled="currentPage <= 1"
      @click="handlePrev"
    >
      ‹
    </button>

    <div class="sw-pagination__pages">
      <div
        v-for="page in pages"
        :key="page"
        :class="['sw-pagination__item', { 'sw-pagination__item--active': currentPage === page }]"
        @click="handleClick(page)"
      >
        {{ page }}
      </div>
    </div>

    <button
      class="sw-pagination__button"
      :disabled="currentPage >= totalPages"
      @click="handleNext"
    >
      ›
    </button>

    <input
      v-if="showJumpSearch"
      type="number"
      class="sw-pagination__jump"
      :placeholder="'跳转'"
      @keyup.enter="(e) => handleClick(parseInt((e.target as HTMLInputElement).value))"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/pagination.scss';
</style>