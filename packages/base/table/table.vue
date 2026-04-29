<script lang="ts" setup>
import { computed, ref, watch } from 'vue';

interface TableColumn {
  key?: string;
  title: string;
  width?: string | number;
  render?: (row: Record<string, any>, column: TableColumn, index: number) => any;
}

interface TableProps {
  data?: Record<string, any>[];
  columns?: TableColumn[];
  align?: 'left' | 'center' | 'right';
  border?: boolean;
  select?: boolean;
  num?: boolean;
  zebra?: boolean;
  height?: string | number;
  width?: string | number;
}

const props = withDefaults(defineProps<TableProps>(), {
  data: () => [],
  columns: () => [],
  align: 'left',
  border: false,
  select: false,
  num: false,
  zebra: false,
});

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
};

const classes = computed(() => ({
  'sw-table': true,
  'sw-table--border': props.border,
  'sw-table--zebra': props.zebra,
}));
</script>

<template>
  <div role="table" :class="classes">
    <div class="sw-table__container" :style="{ height: height ? `${height}px` : undefined }">
      <table class="sw-table__table" :style="{ width: width ? `${width}px` : undefined }">
        <colgroup>
          <col v-if="select" width="50" />
          <col v-if="num" width="50" />
          <col v-for="(column, index) in columns" :key="index" :width="column.width" />
        </colgroup>

        <thead :align="align">
          <tr>
            <th v-if="select">
              <input type="checkbox" :checked="isSelectAll" @change="(e) => handleSelectAll((e.target as HTMLInputElement).checked)" />
            </th>
            <th v-if="num">#</th>
            <th v-for="(column, index) in columns" :key="index">{{ column.title }}</th>
          </tr>
        </thead>

        <tbody :align="align">
          <tr v-for="(item, m) in formatData" :key="m">
            <td v-if="select">
              <input type="checkbox" v-model="item._select" />
            </td>
            <td v-if="num">{{ m + 1 }}</td>
            <td v-for="(column, i) in columns" :key="i">
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

      <div v-if="!formatData.length" class="sw-table__no-data">
        <slot name="noData">暂无数据</slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/table.scss';
</style>