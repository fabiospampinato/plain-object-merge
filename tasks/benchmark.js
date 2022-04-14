
/* IMPORT */

import benchmark from 'benchloop';
import merge from '../dist/index.js';
import Fixtures from '../test/fixtures.js';

/* MAIN */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  iterations: 100000,
  log: 'compact'
});

benchmark ({
  name: 'merge',
  fn: () => {
    merge ( Fixtures.parts );
  }
});
