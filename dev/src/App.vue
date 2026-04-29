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

    <h3>Textarea</h3>
    <STextarea v-model="textareaValue" placeholder="请输入" :rows="3" :show-count="true" :maxlength="100" />

    <h3>Checkbox</h3>
    <SCheckbox v-model="checked">同意协议</SCheckbox>
    <SCheckboxGroup v-model="checkboxGroup">
      <SCheckbox label="苹果">苹果</SCheckbox>
      <SCheckbox label="香蕉">香蕉</SCheckbox>
      <SCheckbox label="橙子">橙子</SCheckbox>
    </SCheckboxGroup>

    <h3>Radio</h3>
    <SRadioGroup v-model="radioValue">
      <SRadio label="男">男</SRadio>
      <SRadio label="女">女</SRadio>
    </SRadioGroup>

    <h3>Switch</h3>
    <SSwitch v-model="switchValue" />
    <SSwitch v-model="switchValue2" active-color="#52b35e" />

    <h3>InputNumber</h3>
    <SInputNumber v-model="inputNumberValue" :min="0" :max="100" />
    <SInputNumber v-model="inputNumberValue2" :step="10" size="large" />

    <h3>Slider</h3>
    <SSlider v-model="sliderValue" :min="0" :max="100" style="width: 200px" />
    <SSlider v-model="sliderValue2" :show-input="true" :min="0" :max="100" style="width: 200px; margin-top: 20px" />

    <h3>Select</h3>
    <SSelect v-model="selectValue" placeholder="请选择">
      <SOption value="apple" label="苹果" />
      <SOption value="banana" label="香蕉" />
      <SOption value="orange" label="橙子" />
    </SSelect>

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
const textareaValue = ref('');
const loadingVisible = ref(false);
const checked = ref(false);
const checkboxGroup = ref(['苹果']);
const radioValue = ref('男');
const switchValue = ref(false);
const switchValue2 = ref(true);
const selectValue = ref('');
const inputNumberValue = ref(0);
const inputNumberValue2 = ref(50);
const sliderValue = ref(30);
const sliderValue2 = ref(50);
</script>

<style lang="scss" scoped>
.demo {
  padding: 20px;
}
.optstyle {
  margin-right: 10px;
  margin-bottom: 8px;
}
h3 {
  margin: 16px 0 8px;
}
</style>
