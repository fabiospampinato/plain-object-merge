
/* MAIN */

const isArray = ( value: unknown ): value is unknown[] => {

  return Array.isArray ( value );

};

const isPrimitive = ( value: unknown ): value is bigint | symbol | string | number | boolean | null | undefined => {

  if ( value === null ) return true;

  const type = typeof value;

  return type !== 'object' && type !== 'function';

};

/* EXPORT */

export {isArray, isPrimitive};
