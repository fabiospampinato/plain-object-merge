
/* IMPORT */

import clone from 'plain-object-clone';
import * as isPrimitive from 'is-primitive';

/* MERGE */

function merge ( objects: any[] ) {

  const target = clone ( objects[0] );

  for ( let i = 1, l = objects.length; i < l; i++ ) {

    mergeObjects ( target, objects[i] );

  }

  return target;

}

function mergeObjects ( target, source ) {

  for ( const key in source ) {

    const value = source[key];

    if ( isPrimitive ( value ) ) {

      target[key] = value;

    } else if ( !target[key] || Array.isArray ( value ) ) {

      target[key] = clone ( value );

    } else {

      target[key] = mergeObjects ( target[key], value );

    }

  }

  return target;

}

/* EXPORT */

export default merge;
