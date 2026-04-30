# Input

Input is used to collect user input.

## Basic Usage

```vue
<SInput placeholder="Please input" />
```

## Disabled

```vue
<SInput disabled placeholder="Disabled" />
```

## Sizes

```vue
<SInput size="large" placeholder="Large size" />
<SInput size="middle" placeholder="Middle size" />
<SInput size="small" placeholder="Small size" />
<SInput size="mini" placeholder="Mini size" />
```

## Password

```vue
<SInput type="password" placeholder="Password" showPassword />
```

## Search

```vue
<SInput search placeholder="Search" />
```

## Props

| Name | Description | Type | Default |
|------|-------------|------|---------|
| type | Input type | `'text' \| 'password' \| 'number'` | `'text'` |
| modelValue | Binding value | `string \| number` | `''` |
| placeholder | Placeholder | `string` | `''` |
| disabled | Disabled state | `boolean` | `false` |
| size | Input size | `'large' \| 'middle' \| 'small' \| 'mini'` | `'middle'` |
| clear | Show clear button | `boolean` | `false` |
| showPassword | Show password toggle | `boolean` | `false` |
| search | Search mode | `boolean` | `false` |
| maxLength | Max length | `number` | - |
| width | Custom width | `string \| number` | - |