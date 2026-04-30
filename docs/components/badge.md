# Badge

Badge is used to display status or count.

## Basic Usage

```vue
<SBadge value="5">
  <div style="width: 40px; height: 40px; background: #f0f0f0;"></div>
</SBadge>
<SBadge value="99" />
<SBadge value="100" max="99" />
```

## Types

```vue
<SBadge value="5" type="primary" />
<SBadge value="5" type="success" />
<SBadge value="5" type="danger" />
<SBadge value="5" type="warning" />
<SBadge value="5" type="info" />
```

## Dot Mode

```vue
<SBadge dot type="primary" />
<SBadge dot type="success" />
```

## Props

| Name | Description | Type | Default |
|------|-------------|------|---------|
| value | Badge value | `string \| number` | `''` |
| type | Badge type | `'primary' \| 'success' \| 'danger' \| 'warning' \| 'info'` | `'danger'` |
| max | Max value | `number` | `99` |
| dot | Dot mode | `boolean` | `false` |
| show | Show/hide | `boolean` | `true` |