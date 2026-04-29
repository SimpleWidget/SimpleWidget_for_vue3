<template>
  <div class="demo">
    <h2 style="text-align: center">SimpleWidget_for_vue3_DEV</h2>

    <h3>Button</h3>
    <SButton class="optstyle" type="primary" size="large">SButton</SButton>
    <SButton class="optstyle" type="success" size="middle">SButton</SButton>
    <SButton class="optstyle" type="warning" size="small">SButton</SButton>
    <SButton class="optstyle" type="danger" size="mini">SButton</SButton>
    <SButton class="optstyle" type="info">SButton</SButton>

    <h3>Input</h3>
    <SInput v-model="inputValue" placeholder="请输入" size="middle" />
    <SInput placeholder="禁用" disabled />

    <h3>Badge</h3>
    <SBadge content="5">
      <SButton>消息</SButton>
    </SBadge>
    <SBadge content="99+" type="danger">
      <SButton>通知</SButton>
    </SBadge>
    <SBadge dot type="success">
      <SButton>动态</SButton>
    </SBadge>

    <h3>Tag</h3>
    <STag type="primary">标签一</STag>
    <STag type="success">标签二</STag>
    <STag type="warning">标签三</STag>
    <STag type="danger">标签四</STag>

    <h3>Tooltip</h3>
    <STooltip content="这是提示文字" position="top">
      <SButton>hover 看提示</SButton>
    </STooltip>
    <STooltip content="左侧提示" position="left">
      <SButton>左侧</SButton>
    </STooltip>
    <STooltip content="一直显示" state="always">
      <SButton>一直显示</SButton>
    </STooltip>

    <h3>Ripple</h3>
    <SRipple>
      <SButton type="primary">点击有涟漪</SButton>
    </SRipple>

    <h3>Loading</h3>
    <SLoading :visible="loadingVisible" text="加载中..." />
    <SButton @click="loadingVisible = !loadingVisible">
      {{ loadingVisible ? '隐藏' : '显示' }} Loading
    </SButton>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValue = ref('');
const loadingVisible = ref(false);
</script>

<style lang="scss" scoped>
.demo {
  padding: 20px;
}
.optstyle {
  margin-right: 10px;
}
h3 {
  margin: 16px 0 8px;
}
</style>
