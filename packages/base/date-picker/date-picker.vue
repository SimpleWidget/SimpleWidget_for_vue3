<script lang="ts" setup>
import { ref, computed } from 'vue';
import { SInput } from '../input';

interface DatePickerProps {
  modelValue?: string;
  placeholder?: string;
}

const props = withDefaults(defineProps<DatePickerProps>(), {
  placeholder: '请选择日期',
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const isShow = ref(false);
const selectedDate = ref('');

const currentYear = ref(new Date().getFullYear());
const currentMonth = ref(new Date().getMonth() + 1);

const weekDays = ['日', '一', '二', '三', '四', '五', '六'];

const calendarDays = computed(() => {
  const year = currentYear.value;
  const month = currentMonth.value;
  const firstDay = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const result: (number | null)[] = [];

  for (let i = 0; i < firstDay; i++) {
    result.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    result.push(i);
  }
  return result;
});

const prevMonth = () => {
  if (currentMonth.value === 1) {
    currentMonth.value = 12;
    currentYear.value--;
  } else {
    currentMonth.value--;
  }
};

const nextMonth = () => {
  if (currentMonth.value === 12) {
    currentMonth.value = 1;
    currentYear.value++;
  } else {
    currentMonth.value++;
  }
};

const selectDay = (day: number) => {
  selectedDate.value = `${currentYear.value}-${currentMonth.value}-${day}`;
  emit('update:modelValue', selectedDate.value);
  isShow.value = false;
};

const toggleCalendar = () => {
  isShow.value = !isShow.value;
};
</script>

<template>
  <div class="sw-date-picker">
    <div class="sw-date-picker__input" @click="toggleCalendar">
      <SInput :model-value="modelValue" :placeholder="placeholder" readonly />
    </div>
    <div v-if="isShow" class="sw-date-picker__calendar sw-date-picker__calendar--show">
      <div class="sw-date-picker__header">
        <span class="sw-date-picker__title">{{ currentYear }}年{{ currentMonth }}月</span>
        <div class="sw-date-picker__nav">
          <button class="sw-date-picker__nav-btn" @click="prevMonth">‹</button>
          <button class="sw-date-picker__nav-btn" @click="nextMonth">›</button>
        </div>
      </div>
      <div class="sw-date-picker__week">
        <span v-for="day in weekDays" :key="day" class="sw-date-picker__week-item">{{ day }}</span>
      </div>
      <div class="sw-date-picker__days">
        <template v-for="(day, index) in calendarDays" :key="index">
          <div
            v-if="day !== null"
            class="sw-date-picker__day"
            @click="selectDay(day as number)"
          >
            {{ day }}
          </div>
          <div v-else class="sw-date-picker__day sw-date-picker__day--other" />
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/date-picker.scss';
</style>