<script lang="ts" setup>
import { computed, ref, watch } from 'vue';

interface TableColumn {
  key?: string;
  title: string;
  width?: string | number;
  minWidth?: string | number;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
  render?: (row: Record<string, any>, column: TableColumn, index: number) => any;
}

interface TableProps {
  data?: Record<string, any>[];
  columns?: TableColumn[];
  align?: 'left' | 'center' | 'right';
  border?: boolean;
  stripe?: boolean;
  hover?: boolean;
  select?: boolean;
  num?: boolean;
  height?: string | number;
  maxHeight?: string | number;
}

const props = withDefaults(defineProps<TableProps>(), {
  data: () => [],
  columns: () => [],
  align: 'left',
  border: false,
  stripe: false,
  hover: true,
  select: false,
  num: false,
});

const emit = defineEmits<{
  (e: 'select', rows: Record<string, any>[]): void;
  (e: 'rowClick', row: Record<string, any>, index: number): void;
}>();

const formatData = ref<Record<string, any>[]>([]);

watch(() => props.data, () => {
  if (props.select) {
    formatData.value = props.data.map(item => ({ ...item, _select: false }));
  } else {
    formatData.value = [...props.data];
  }
}, { immediate: true });

const isSelectAll = computed(() => {
  if (!formatData.value.length) return false;
  return formatData.value.every(item => item._select);
});

const handleSelectAll = (checked: boolean) => {
  formatData.value.forEach(item => {
    item._select = checked;
  });
  emitSelectedRows();
};

const handleRowSelect = (row: Record<string, any>) => {
  row._select = !row._select;
  emitSelectedRows();
};

const emitSelectedRows = () => {
  const selected = formatData.value.filter(item => item._select);
  emit('select', selected);
};

const handleRowClick = (row: Record<string, any>, index: number) => {
  emit('rowClick', row, index);
};

const handleCheckboxChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  handleSelectAll(target.checked);
};

const tableClasses = computed(() => [
  'sw-table',
  {
    'sw-table--border': props.border,
    'sw-table--stripe': props.stripe,
    'sw-table--hover': props.hover,
  },
]);

const hasScroll = computed(() => props.height || props.maxHeight);

const getCellStyle = (column: TableColumn) => {
  const style: Record<string, string> = {};
  if (column.width) style.width = typeof column.width === 'number' ? `${column.width}px` : column.width;
  if (column.minWidth) style.minWidth = typeof column.minWidth === 'number' ? `${column.minWidth}px` : column.minWidth;
  if (column.align) style.textAlign = column.align;
  return style;
};
</script>

<template>
  <div class="sw-table" :class="tableClasses">
    <div class="sw-table__container" :class="{ 'sw-table__container--scroll': hasScroll }">
      <div class="sw-table__wrapper" :style="{ height: height ? `${height}px` : undefined, maxHeight: maxHeight ? `${maxHeight}px` : undefined }">
        <table class="sw-table__table">
          <colgroup>
            <col v-if="select" width="50" />
            <col v-if="num" width="60" />
            <col
              v-for="(column, index) in columns"
              :key="index"
              :width="column.width"
            />
          </colgroup>

          <thead class="sw-table__head">
            <tr>
              <th v-if="select" class="sw-table__th">
                <input type="checkbox" :checked="isSelectAll" @change="handleCheckboxChange" />
              </th>
              <th v-if="num" class="sw-table__th sw-table__th--num">#</th>
              <th
                v-for="(column, index) in columns"
                :key="index"
                class="sw-table__th"
                :class="{ 'sw-table__th--sortable': column.sortable }"
                :style="getCellStyle(column)"
              >
                <span class="sw-table__th-content">
                  {{ column.title }}
                  <span v-if="column.sortable" class="sw-table__sort-icon">
                    <i class="sw-icon sw-icon-sort" />
                  </span>
                </span>
              </th>
            </tr>
          </thead>

          <tbody class="sw-table__body">
            <tr
              v-for="(item, m) in formatData"
              :key="m"
              class="sw-table__row"
              :class="{
                'sw-table__row--selected': item._select,
                'sw-table__row--stripe': stripe && m % 2 === 1
              }"
              @click="handleRowClick(item, m)"
            >
              <td v-if="select" class="sw-table__td" @click.stop>
                <input type="checkbox" :checked="item._select" @change="handleRowSelect(item)" />
              </td>
              <td v-if="num" class="sw-table__td sw-table__td--num">{{ m + 1 }}</td>
              <td
                v-for="(column, i) in columns"
                :key="i"
                class="sw-table__td"
                :style="getCellStyle(column)"
              >
                <template v-if="column.render">
                  {{ column.render(item, column, m) }}
                </template>
                <template v-else-if="column.key">
                  {{ item[column.key] }}
                </template>
              </td>
            </tr>
          </tbody>

          <tfoot v-if="$slots.tfoot">
            <slot name="tfoot" />
          </tfoot>
        </table>

        <div v-if="!formatData.length" class="sw-table__empty">
          <slot name="empty">
            <div class="sw-table__empty-content">
              <i class="sw-icon sw-icon-files" />
              <span>暂无数据</span>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/table.scss';
</style>