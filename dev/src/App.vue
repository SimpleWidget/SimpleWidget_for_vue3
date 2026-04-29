<template>
  <div class="demo">
    <h2 style="text-align: center">SimpleWidget_for_vue3_DEV</h2>

    <h3>Button</h3>
    <SButton type="primary">Primary</SButton>
    <SButton type="success">Success</SButton>

    <h3>Layout</h3>
    <SLayout>
      <SBox padding="10" border>左侧</SBox>
      <SDivider direction="vertical" />
      <SBox padding="10" border>右侧</SBox>
    </SLayout>

    <h3>Space</h3>
    <SSpace>
      <SButton>按钮1</SButton>
      <SButton>按钮2</SButton>
      <SButton>按钮3</SButton>
    </SSpace>

    <h3>Divider</h3>
    <SDivider />
    <SBox padding="10">分割线下方内容</SBox>

    <h3>Link</h3>
    <SLink href="https://vuejs.org">Vue官网</SLink>
    <SLink type="success" href="#">成功链接</SLink>
    <SLink type="danger" disabled href="#">禁用链接</SLink>

    <h3>Form Components</h3>
    <SSpace direction="vertical">
      <SInput v-model="inputValue" placeholder="输入框" />
      <STextarea v-model="textareaValue" placeholder="文本域" :rows="2" />
      <SInputNumber v-model="numValue" :min="0" :max="100" />
      <SSlider v-model="sliderValue" style="width: 200px" />
      <SCheckbox v-model="checked">同意协议</SCheckbox>
      <SSwitch v-model="switchValue" />
    </SSpace>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValue = ref('');
const textareaValue = ref('');
const numValue = ref(0);
const sliderValue = ref(50);
const checked = ref(false);
const switchValue = ref(false);
</script>

<style lang="scss" scoped>
.demo {
  padding: 20px;
}
h3 {
  margin: 16px 0 8px;
}
</style>
