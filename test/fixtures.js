
/* MAIN */

const Fixtures = {
  result: {
    foo: 'foo',
    bar: 'bar',
    baz: 'baz',
    zero: 0,
    false: false,
    null: null,
    undefined: undefined,
    arr: [1, 2, 3],
    deep: {
      foo: 'deep.foo',
      bar: 'deep.bar',
      baz: 'deep.baz',
      zero: 0,
      false: false,
      null: null,
      undefined: 123,
      arr: ['1', '2', '3'],
      deep: {
        deep: {
          level: 4
        }
      }
    }
  },
  parts: [
    {
      foo: 'foo1',
      baz: 'baz1',
      arr: ['asd'],
      deep: {
        foo: 'deep.foo',
        bar: 'deep.bar1',
        baz: 'deep.baz1',
        zero: 123,
        false: 123,
        null: 123,
        undefined: 123
      }
    },
    {
      foo: 'foo',
      bar: 'bar',
      baz: 'baz',
      deep: {
        foo: 'deep.foo',
        bar: 'deep.bar',
        baz: 'deep.baz'
      }
    },
    {
      zero: 0,
      false: false,
      null: null,
      undefined: undefined,
      arr: [1, 2, 3],
      deep: {
        zero: 0,
        false: false,
        null: null,
        undefined: undefined,
        arr: ['1', '2', '3'],
        deep: {
          deep: {
            level: 4
          }
        }
      }
    }
  ]
};

/* EXPORT */

export default Fixtures;
