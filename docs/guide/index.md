# Introduction

SimpleWidget is a cross-framework component library that provides consistent APIs and behaviors across Vue3, Vue2, React, and Flutter.

## Features

- **70+ Components**: Rich enterprise-ready components
- **Cross-Framework**: One API, four frameworks
- **TypeScript**: Full TypeScript support
- **Customizable**: Powerful theme customization
- **Tree-Shakable**: Only import what you need

## Quick Start

### Install

```bash
# Vue3
npm install simplewidget-for-vue3

# Vue2
npm install simplewidget-for-vue2

# React
npm install simplewidget-for-react

# Flutter
flutter pub add simplewidget
```

### Usage

::: code-group

```vue [Vue3]
<script setup>
import { SButton } from 'simplewidget-for-vue3';
</script>

<template>
  <SButton type="primary">Click me</SButton>
</template>
```

```vue [Vue2]
<script>
import { SButton } from 'simplewidget-for-vue2';

export default {
  components: { SButton }
};
</script>

<template>
  <SButton type="primary">Click me</SButton>
</template>
```

```tsx [React]
import { SButton } from 'simplewidget-for-react';

export function App() {
  return <SButton type="primary">Click me</SButton>;
}
```

```dart [Flutter]
import 'package:simplewidget/simple_widget.dart';

SButton(
  type: SButtonType.primary,
  child: Text('Click me'),
)
```

:::