<!--
 * @Author: Coan
 * @Date: 2022-10-07 16:18:59
 * @LastEditors: Coan
 * @LastEditTime: 2022-10-07 19:41:15
 * @FilePath: /SimpleWidget_for_vue3/packages/base/icon/index.md
 * @Description:
-->
# 图标

:::demo

```html
<i class="sw-icon-edit"></i>
<i class="sw-icon-share"></i>
<i class="sw-icon-delete"></i>
```

:::



<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'sw-icon-' + name"></i>
      <span class="icon-name">{{'sw-icon-' + name}}</span>
    </span>
  </li>
</ul>

