<script lang="ts" setup>
import { ref } from 'vue';

interface UploadProps {
  accept?: string;
  multiple?: boolean;
  limit?: number;
}

const props = withDefaults(defineProps<UploadProps>(), {
  accept: '*',
  multiple: false,
  limit: 3,
});

const emit = defineEmits<{
  (e: 'change', files: FileList): void;
}>();

const fileList = ref<string[]>([]);
const inputRef = ref<HTMLInputElement | null>(null);

const handleClick = () => {
  inputRef.value?.click();
};

const handleChange = (evt: Event) => {
  const target = evt.target as HTMLInputElement;
  const files = target.files;
  if (files) {
    emit('change', files);
    // Create preview URLs
    Array.from(files).forEach(file => {
      const url = URL.createObjectURL(file);
      fileList.value.push(url);
    });
  }
};

const handleRemove = (index: number) => {
  fileList.value.splice(index, 1);
};
</script>

<template>
  <div class="sw-upload">
    <input
      ref="inputRef"
      type="file"
      class="sw-upload__input"
      :accept="accept"
      :multiple="multiple"
      @change="handleChange"
    />
    <div class="sw-upload__trigger" @click="handleClick">
      <span class="sw-upload__icon">+</span>
    </div>
    <span class="sw-upload__tip">点击上传</span>
    <div v-if="fileList.length" class="sw-upload__list">
      <div v-for="(url, index) in fileList" :key="index" class="sw-upload__item">
        <img :src="url" alt="" />
        <span class="sw-upload__remove" @click="handleRemove(index)">✕</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/upload.scss';
</style>