
/* IMPORT */

import benchmark from 'benchloop';
import merge from '../dist/index.js';
import Fixtures from '../test/fixtures.js';

/* MAIN */

benchmark.config ({
  iterations: 100_000
});

benchmark ({
  name: 'merge',
  fn: () => {
    merge ( Fixtures.parts );
  }
});
