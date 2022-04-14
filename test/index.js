
/* IMPORT */

import {describe} from 'fava';
import merge from '../dist/index.js';
import Fixtures from './fixtures.js';

/* MAIN */

describe ( 'Plain Object Merge', it => {

  it ( 'can merge complext objects', t => {

    t.deepEqual ( merge ( Fixtures.parts ), Fixtures.result );

  });

  it ( 'supports undefined', t => {

    t.deepEqual ( merge ([ {}, { foo: undefined } ]), { foo: undefined } );

    t.deepEqual ( merge ([ { foo: 0 }, { foo: undefined } ]), { foo: 0 } );

    t.deepEqual ( merge ([ { foo: {} }, { foo: undefined } ]), { foo: {} } );

  });

  it ( 'is not succeptible to prototype pollution issues', t => {

    t.deepEqual ( merge ([ {}, { foo: 1, constructor: 2, bar: 3 } ]), { foo: 1, bar: 3 } );

    t.deepEqual ( merge ([ {}, { foo: 1, prototype: 2, bar: 3 } ]), { foo: 1, bar: 3 } );

    t.deepEqual ( merge ([ {}, { foo: 1, __proto__: 2, bar: 3 } ]), { foo: 1, bar: 3 } );

  });

});
