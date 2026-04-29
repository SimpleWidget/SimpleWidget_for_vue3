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

    <h3>Alert</h3>
    <SAlert type="primary" title="这是标题">这是一条主要提示</SAlert>
    <SAlert type="success" title="成功" simple>操作成功！</SAlert>
    <SAlert type="danger" close>可关闭的危险提示</SAlert>

    <h3>Dialog</h3>
    <SButton type="primary" @click="dialogVisible = true">打开弹窗</SButton>
    <SDialog v-model:visible="dialogVisible" title="对话框标题" width="400">
      <p>这是对话框的内容区域</p>
      <template #footer>
        <SButton @click="dialogVisible = false">取消</SButton>
        <SButton type="primary" @click="dialogVisible = false">确定</SButton>
      </template>
    </SDialog>

    <h3>Message</h3>
    <SSpace>
      <SButton @click="showMessage({ message: '这是一条消息', type: 'default' })">默认消息</SButton>
      <SButton type="success" @click="showMessage({ message: '操作成功', type: 'success' })">成功消息</SButton>
      <SButton type="danger" @click="showMessage({ message: '操作失败', type: 'danger' })">失败消息</SButton>
      <SButton type="primary" @click="showMessage({ message: '警告消息', type: 'warning' })">警告消息</SButton>
    </SSpace>

    <h3>Notification</h3>
    <SSpace>
      <SButton @click="showNotification({ message: '这是一条通知', placement: 'top-right' })">右上角通知</SButton>
      <SButton type="success" @click="showNotification({ title: '成功', message: '操作成功！', type: 'success' })">成功通知</SButton>
      <SButton type="danger" @click="showNotification({ title: '错误', message: '操作失败', type: 'danger' })">错误通知</SButton>
    </SSpace>

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
const dialogVisible = ref(false);

const showMessage = (options: any) => {
  (window as any).showMessage(options);
};
const showNotification = (options: any) => {
  (window as any).showNotification(options);
};
</script>

<style lang="scss" scoped>
.demo {
  padding: 20px;
}
h3 {
  margin: 16px 0 8px;
}
</style>
