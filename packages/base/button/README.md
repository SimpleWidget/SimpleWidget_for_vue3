<!--
 * @Author: Coan
 * @Date: 2022-10-07 16:20:07
 * @LastEditors: Coan
 * @LastEditTime: 2022-10-07 19:49:04
 * @FilePath: /SimpleWidget_for_vue3/packages/base/button/README.md
 * @Description:
-->
# Button 按钮

## 基础用法
基础的按钮用法。

:::demo

```html
<template>
	<div style="margin-bottom:10px">
		<sw-button>默认按钮</sw-button>
		<sw-button type="primary">主要按钮</sw-button>
		<sw-button type="success">成功按钮</sw-button>
		<sw-button type="info">信息按钮</sw-button>
		<sw-button type="warning">警告按钮</sw-button>
		<sw-button type="danger">危险按钮</sw-button>
	</div>

    <div style="margin-bottom:10px">
		<sw-button>朴素按钮</sw-button>
		<sw-button type="primary" plain>主要按钮</sw-button>
		<sw-button type="success" plain>成功按钮</sw-button>
		<sw-button type="info" plain>信息按钮</sw-button>
		<sw-button type="warning" plain>警告按钮</sw-button>
		<sw-button type="danger" plain>危险按钮</sw-button>
	</div>

    <div style="margin-bottom:10px">
		<sw-button round>圆角按钮</sw-button>
		<sw-button type="primary" round size="small">主要按钮</sw-button>
		<sw-button type="success" round size="small">成功按钮</sw-button>
		<sw-button type="info" round size="small">信息按钮</sw-button>
		<sw-button type="warning" round size="small">警告按钮</sw-button>
		<sw-button type="danger" round size="small">危险按钮</sw-button>
	</div>

    <div>
		<sw-button icon="sw-icon-search" circle></sw-button>
        <sw-button type="primary" icon="sw-icon-edit" circle></sw-button>
        <sw-button type="success" icon="sw-icon-check" circle></sw-button>
        <sw-button type="info" icon="sw-icon-message" circle></sw-button>
        <sw-button type="warning" icon="sw-icon-star-off" circle></sw-button>
        <sw-button type="danger" icon="sw-icon-delete" circle></sw-button>
    </div>
</template>
```

:::


## 禁用状态
按钮不可用状态。

:::demo

```html
<template>
	<div style="margin-bottom:10px">
		<sw-button disabled>默认按钮</sw-button>
        <sw-button type="primary" disabled>主要按钮</sw-button>
        <sw-button type="success" disabled>成功按钮</sw-button>
        <sw-button type="info" disabled>信息按钮</sw-button>
        <sw-button type="warning" disabled>警告按钮</sw-button>
        <sw-button type="danger" disabled>危险按钮</sw-button>
	</div>

    <div style="margin-bottom:10px">
		<sw-button plain disabled>朴素按钮</sw-button>
        <sw-button type="primary" plain disabled>主要按钮</sw-button>
        <sw-button type="success" plain disabled>成功按钮</sw-button>
        <sw-button type="info" plain disabled>信息按钮</sw-button>
        <sw-button type="warning" plain disabled>警告按钮</sw-button>
        <sw-button type="danger" plain disabled>危险按钮</sw-button>
	</div>

</template>
```

:::


## 加载Loading
点击按钮后进行数据加载操作，在按钮上显示加载状态。

:::demo

```html
<template>
	<div style="margin-bottom:10px">
	  <sw-button type="primary" :loading="true">加载中</sw-button>
	</div>
</template>
```
:::


## 不同尺寸按钮
Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。

```html
<template>
	<div style="margin-bottom:10px">
		<sw-button>默认按钮</sw-button>
		<sw-button size="medium">中等按钮</sw-button>
		<sw-button size="small">小型按钮</sw-button>
		<sw-button size="mini">超小按钮</sw-button>
	</div>

	<div>
		<sw-button>默认按钮</sw-button>
		<sw-button size="medium" round>中等按钮</sw-button>
		<sw-button size="small" round>小型按钮</sw-button>
		<sw-button size="mini" round>超小按钮</sw-button>
	</div>
</template>
```

:::


## Button原生type类型
button、submit、reset通过设置native-type属性来配置它们。

:::demo

```html
<template>
    <div>
		<sw-button>默认button类型</sw-button>
		<sw-button native-type="button">显式设置button类型</sw-button>
		<sw-button native-type="submit">submit类型</sw-button>
		<sw-button native-type="reset">reset类型</sw-button>
	</div>
</template>
```
:::


## Attributes

| 参数        | 说明           | 类型    | 可选值                                             | 默认值 |
| ----------- | -------------- | ------- | -------------------------------------------------- | ------ |
| size        | 尺寸           | string  | medium / small / mini                              | —      |
| type        | 类型           | string  | primary / success / warning / danger / info / text | —      |
| plain       | 是否朴素按钮   | boolean | —                                                  | false  |
| round       | 是否圆角按钮   | boolean | —                                                  | false  |
| circle      | 是否圆形按钮   | boolean | —                                                  | false  |
| loading     | 是否加载中状态 | boolean | —                                                  | false  |
| disabled    | 是否禁用状态   | boolean | —                                                  | false  |
| icon        | 图标类名       | string  | —                                                  | —      |
| autofocus   | 是否默认聚焦   | boolean | —                                                  | false  |
| native-type | 原生 type 属性 | string  | button / submit / reset                            | button |