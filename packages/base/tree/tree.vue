<script lang="ts" setup>
import { ref, provide } from 'vue';

interface TreeNode {
  label: string;
  children?: TreeNode[];
  disabled?: boolean;
}

interface TreeProps {
  data?: TreeNode[];
  showCheckbox?: boolean;
  defaultExpandAll?: boolean;
}

const props = withDefaults(defineProps<TreeProps>(), {
  data: () => [],
  showCheckbox: false,
  defaultExpandAll: false,
});

const emit = defineEmits<{
  (e: 'select', node: TreeNode): void;
}>();

const expandedKeys = ref<string[]>([]);
const checkedKeys = ref<string[]>([]);

const toggleExpand = (key: string) => {
  const index = expandedKeys.value.indexOf(key);
  if (index > -1) {
    expandedKeys.value.splice(index, 1);
  } else {
    expandedKeys.value.push(key);
  }
};

const handleSelect = (node: TreeNode) => {
  emit('select', node);
};

provide('tree', {
  showCheckbox: props.showCheckbox,
  expandedKeys,
  checkedKeys,
  toggleExpand,
  handleSelect,
});
</script>

<template>
  <div class="sw-tree">
    <div v-for="(node, index) in data" :key="index" class="sw-tree__node">
      <div class="sw-tree__node-content" @click="handleSelect(node)">
        <span
          v-if="node.children?.length"
          class="sw-tree__arrow"
          @click.stop="toggleExpand(String(index))"
        >
          ▶
        </span>
        <span v-if="showCheckbox" class="sw-tree__checkbox">☐</span>
        <span class="sw-tree__label">{{ node.label }}</span>
      </div>
      <div v-if="node.children?.length && expandedKeys.includes(String(index))" class="sw-tree__children">
        <div v-for="(child, childIndex) in node.children" :key="childIndex" class="sw-tree__node">
          <div class="sw-tree__node-content" @click="handleSelect(child)">
            <span v-if="showCheckbox" class="sw-tree__checkbox">☐</span>
            <span class="sw-tree__label">{{ child.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/tree.scss';
</style>