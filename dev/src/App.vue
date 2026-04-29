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

    <h3>ConfirmBox</h3>
    <SSpace>
      <SButton @click="showConfirmBox({ title: '确认删除', content: '确定要删除这条记录吗？', confirmText: '删除', cancelText: '取消' })">删除确认</SButton>
    </SSpace>

    <h3>Table</h3>
    <STable :data="tableData" :columns="tableColumns" border zebra />

    <h3>Card</h3>
    <SSpace>
      <SCard title="卡片标题" style="width: 300px">
        <div>卡片内容区域</div>
      </SCard>
      <SCard title="圆角卡片" round style="width: 300px">
        <div>圆角卡片内容</div>
      </SCard>
      <SCard title="带阴影" shadow="always" style="width: 300px">
        <div>始终带阴影的卡片</div>
      </SCard>
    </SSpace>

    <h3>Image</h3>
    <SSpace>
      <SImage src="https://vuejs.org/images/logo.png" alt="Vue Logo" :width="100" :height="100" />
      <SImage src="https://invalid-url.test" alt="加载失败" :width="100" :height="100" fit="contain" />
    </SSpace>

    <h3>Avatar</h3>
    <SSpace>
      <SAvatar src="https://vuejs.org/images/logo.png" alt="Vue" />
      <SAvatar text="U" size="large" />
      <SAvatar text="M" size="small" round />
      <SAvatar src="https://invalid.test" alt="失败" />
    </SSpace>

    <h3>Progress</h3>
    <SSpace direction="vertical" style="width: 300px">
      <SProgress :percentage="30" />
      <SProgress :percentage="60" type="success" />
      <SProgress :percentage="80" type="danger" :height="20" />
      <SProgress :percentage="50" stripe :height="10" />
    </SSpace>

    <h3>Empty</h3>
    <SSpace direction="vertical">
      <SEmpty content="暂无数据" />
      <SEmpty content="加载中..." />
    </SSpace>

    <h3>Pagination</h3>
    <SSpace direction="vertical">
      <SPagination :total="100" :current="1" :page-size="10" />
    </SSpace>

    <h3>Tabs</h3>
    <STabs>
      <template #header>
        <STabsItem label="标签1" :name="1" />
        <STabsItem label="标签2" :name="2" />
        <STabsItem label="标签3" :name="3" />
      </template>
      <div>内容 1</div>
      <div>内容 2</div>
      <div>内容 3</div>
    </STabs>

    <h3>Breadcrumb</h3>
    <SBreadcrumb>
      <SBreadcrumbItem to="/">首页</SBreadcrumbItem>
      <SBreadcrumbItem to="/category">分类</SBreadcrumbItem>
      <SBreadcrumbItem>详情</SBreadcrumbItem>
    </SBreadcrumb>

    <h3>Dropdown</h3>
    <SDropdown>
      <template #trigger>
        <SButton>下拉菜单</SButton>
      </template>
      <SDropdownItem>选项 1</SDropdownItem>
      <SDropdownItem>选项 2</SDropdownItem>
      <SDropdownItem disabled>禁用选项</SDropdownItem>
    </SDropdown>

    <h3>Steps</h3>
    <SSteps>
      <SStepsItem title="步骤 1" description="选择商品" status="finish" />
      <SStepsItem title="步骤 2" description="填写订单" status="active" />
      <SStepsItem title="步骤 3" description="支付订单" status="wait" />
    </SSteps>

    <h3>Form</h3>
    <SForm>
      <SFormItem label="用户名">
        <SInput placeholder="请输入用户名" />
      </SFormItem>
      <SFormItem label="密码">
        <SInput type="password" placeholder="请输入密码" />
      </SFormItem>
    </SForm>

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
const showConfirmBox = (options: any) => {
  (window as any).showConfirmBox(options);
};

const tableData = [
  { name: '张三', age: 25, city: '北京' },
  { name: '李四', age: 30, city: '上海' },
  { name: '王五', age: 28, city: '广州' },
];

const tableColumns = [
  { key: 'name', title: '姓名', width: 120 },
  { key: 'age', title: '年龄', width: 100 },
  { key: 'city', title: '城市', width: 150 },
];
</script>

<style lang="scss" scoped>
.demo {
  padding: 20px;
}
h3 {
  margin: 16px 0 8px;
}
</style>
