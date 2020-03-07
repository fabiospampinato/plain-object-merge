
/* IMPORT */

import {describe} from 'ava-spec';
import {default as merge} from '../dist';
import Fixtures from './fixtures';

/* PLAIN OBJECT MERGE */

describe ( 'Plain Object Merge', it => {

  it ( 'can merge complext objects', t => {

    t.deepEqual ( merge ( Fixtures.parts ), Fixtures.result );

  });

  it ( 'supports undefined', t => {

    t.deepEqual ( merge ([ {}, { foo: undefined } ]), { foo: undefined } );

    t.deepEqual ( merge ([ { foo: 0 }, { foo: undefined } ]), { foo: 0 } );

    t.deepEqual ( merge ([ { foo: {} }, { foo: undefined } ]), { foo: {} } );

  });

});
