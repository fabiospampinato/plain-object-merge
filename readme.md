# Plain Object Merge

Extremely fast function optimized for deep merging json-serializable plain objects.

## Install

```sh
npm install plain-object-merge
```

## Usage

```ts
import merge from 'plain-object-merge';

// Let's merge some objects together

merge ([
  { deep: { foo: 123 } },
  { deep: { bar: 123 } }
]); // => { deep: { foo: 123, bar: 123 } }
```

## License

MIT © Fabio Spampinato
