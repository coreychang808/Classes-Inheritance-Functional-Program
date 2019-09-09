'use strict';

class Validator {

  constructor(schema) {
    this.schema = schema;
  }

  isString(input) {
    return typeof input === 'string';
  }

  isObject(input) {
    return typeof input === 'object';
   }

  isArray(input, valueType) {
    return Array.isArray(input);
   }

  isBoolean(input) {
    return typeof input === 'boolean';
  }

  isNumber(input) {
    return typeof input === 'number';
  }

  isFunction(input) {
    return typeof input === 'function';
  }


  // Vinicio - checks an object against a schema
  // isValid(data, schema)
  // isValidObject in my demo code
  isObjectValid (data, schema) {
    // Vinicio - let's list the assumptions we have so far
    // data is going to be an object
    // schema is going to be an object that has a property called fields
    // TODO: Validate our invariants
    Object.keys(schema.fields).forEach(expectedProperty => {
      if (!data.hasOwnProperty(expectedProperty)) {
        return false;
      }
      // TODO: Add type validation
      // expectedProperty = 'id'
      console.log(data[expectedProperty]); // Value
      console.log(schema.fields[expectedProperty].type); // Type
      // is the value correct based on the type?
    });
    return true;
  };
}

module.exports = Validator;
