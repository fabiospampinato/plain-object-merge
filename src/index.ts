
/* IMPORT */

import clone from 'plain-object-clone';
import {isArray, isPrimitive} from './utils';

/* MAIN */

const mergeObjects = ( target: any, source: any ): any => {

  for ( const key in source ) {

    if ( !source.hasOwnProperty ( key ) ) continue;

    if ( key === 'constructor' || key === 'prototype' || key === '__proto__' ) continue;

    const value = source[key];

    if ( isPrimitive ( value ) ) {

      if ( value !== undefined || !(key in target) ) {

        target[key] = value;

      }

    } else if ( !target[key] || isArray ( value ) ) {

      target[key] = clone ( value );

    } else {

      target[key] = mergeObjects ( target[key], value );

    }

  }

  return target;

};

const merge = ( objects: object[] ): object => {

  const target = clone ( objects[0] );

  for ( let i = 1, l = objects.length; i < l; i++ ) {

    mergeObjects ( target, objects[i] );

  }

  return target;

};

/* EXPORT */

export default merge;
