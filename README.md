# Plain Object Merge

Extremely fast function optimized for deep merging json-serializable plain objects.

## Install

```sh
npm install --save plain-object-merge
```

## Usage

```ts
import merge from 'plain-object-merge';

merge ([
  { deep: { foo: 123 } },
  { deep: { bar: 123 } }
]); // => { deep: { foo: 123, bar: 123 } }
```

## License

MIT © Fabio Spampinato
