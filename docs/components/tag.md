# Tag

Tags are used to categorize or mark items.

## Basic Usage

```vue
<STag type="primary">Primary</STag>
<STag type="success">Success</STag>
<STag type="danger">Danger</STag>
<STag type="warning">Warning</STag>
<STag type="info">Info</STag>
<STag type="default">Default</STag>
```

## Sizes

```vue
<STag size="large" type="primary">Large</STag>
<STag size="middle" type="primary">Middle</STag>
<STag size="small" type="primary">Small</STag>
<STag size="mini" type="primary">Mini</STag>
```

## Closeable

```vue
<STag closable type="primary">Primary</STag>
<STag closable type="success">Success</STag>
<STag closable type="danger">Danger</STag>
```

## Round

```vue
<STag round type="primary">Round Tag</STag>
```

## Simple Mode

```vue
<STag simple type="primary">Simple Primary</STag>
```

## Props

| Name | Description | Type | Default |
|------|-------------|------|---------|
| type | Tag type | `'primary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'default'` | `'primary'` |
| size | Tag size | `'large' \| 'middle' \| 'small' \| 'mini'` | `'middle'` |
| closable | Show close button | `boolean` | `false` |
| round | Round style | `boolean` | `false` |
| simple | Simple style | `boolean` | `false` |
| block | Block element | `boolean` | `false` |
| line | Line style | `boolean` | `false` |