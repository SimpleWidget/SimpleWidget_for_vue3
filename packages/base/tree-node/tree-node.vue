<script lang="ts" setup>
import { inject, computed } from 'vue';

interface TreeNodeProps {
  label: string;
  children?: any[];
  disabled?: boolean;
}

const props = withDefaults(defineProps<TreeNodeProps>(), {
  children: () => [],
  disabled: false,
});

const tree = inject<{
  expandedKeys: { value: string[] };
  toggleExpand: (key: string) => void;
  handleSelect: (node: any) => void;
}>('tree');

const isExpanded = computed(() => {
  return tree?.expandedKeys.value.includes(props.label);
});

const handleClick = () => {
  if (!props.disabled) {
    tree?.handleSelect({ label: props.label, children: props.children });
  }
};

const handleToggle = (e: MouseEvent) => {
  e.stopPropagation();
  tree?.toggleExpand(props.label);
};
</script>

<template>
  <div class="sw-tree__node">
    <div class="sw-tree__node-content" @click="handleClick">
      <span
        v-if="children && children.length"
        class="sw-tree__arrow"
        :class="{ 'sw-tree__arrow--expanded': isExpanded }"
        @click="handleToggle"
      >
        ▶
      </span>
      <span class="sw-tree__label">{{ label }}</span>
    </div>
    <div v-if="children && children.length && isExpanded" class="sw-tree__children">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/tree.scss';
</style>