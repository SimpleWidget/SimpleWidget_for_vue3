<script lang="ts" setup>
import { ref, computed } from 'vue';

interface CalendarProps {
  value?: Date;
}

const props = withDefaults(defineProps<CalendarProps>(), {
  value: () => new Date(),
});

const emit = defineEmits<{
  (e: 'change', date: Date): void;
}>();

const currentDate = ref(props.value || new Date());

const year = computed(() => currentDate.value.getFullYear());
const month = computed(() => currentDate.value.getMonth() + 1);
const day = computed(() => currentDate.value.getDate());

const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

const calendarDays = computed(() => {
  const y = year.value;
  const m = month.value;
  const firstDay = new Date(y, m - 1, 1).getDay();
  const daysInMonth = new Date(y, m, 0).getDate();
  const result: (number | null)[] = [];

  for (let i = 0; i < firstDay; i++) {
    result.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    result.push(i);
  }
  return result;
});

const isToday = (d: number | null) => {
  if (!d) return false;
  const today = new Date();
  return d === today.getDate() && month.value === today.getMonth() + 1 && year.value === today.getFullYear();
};

const isSelected = (d: number | null) => {
  if (!d) return false;
  return d === day.value;
};

const selectDay = (d: number | null) => {
  if (d !== null) {
    currentDate.value = new Date(year.value, month.value - 1, d);
    emit('change', currentDate.value);
  }
};

const prevMonth = () => {
  currentDate.value = new Date(year.value, month.value - 2, 1);
};

const nextMonth = () => {
  currentDate.value = new Date(year.value, month.value, 1);
};
</script>

<template>
  <div class="sw-calendar">
    <div class="sw-calendar__header">
      <span class="sw-calendar__title">{{ year }}年{{ monthNames[month - 1] }}</span>
      <div class="sw-calendar__nav">
        <button class="sw-calendar__nav-btn" @click="prevMonth">‹</button>
        <button class="sw-calendar__nav-btn" @click="nextMonth">›</button>
      </div>
    </div>
    <div class="sw-calendar__week">
      <span v-for="d in weekDays" :key="d" class="sw-calendar__week-item">{{ d }}</span>
    </div>
    <div class="sw-calendar__days">
      <div
        v-for="(d, index) in calendarDays"
        :key="index"
        class="sw-calendar__day"
        :class="{
          'sw-calendar__day--other': d === null,
          'sw-calendar__day--today': isToday(d),
          'sw-calendar__day--selected': isSelected(d)
        }"
        @click="selectDay(d)"
      >
        {{ d || '' }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/calendar.scss';
</style>