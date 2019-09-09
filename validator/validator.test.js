'use strict';

const Validator = require('./validator');

let str = 'yes';
let num = 1;
let arr = ['a'];
let obj = {x:'y'};
let func = () => {};
let bool = false;

describe('Validatorssss', () => {

    it('strings', () => {
        expect(validator.isString(str)).toBeTruthy();
        [num,arr,obj,func,bool].forEach(input => {
          expect(validator.isString(input)).toBeFalsy();
        })
        // expect(validator.isString(str)).toBeTruthy();
        // expect(validator.isString(num)).toBeFalsy();
        // expect(validator.isString(arr)).toBeFalsy();
        // expect(validator.isString(obj)).toBeFalsy();
        // expect(validator.isString(func)).toBeFalsy();
        // expect(validator.isString(bool)).toBeFalsy();
    });

    it('checks isObject',() => {
      expect(validator.isObject(obj)).toBeTruthy();
      [num,arr,str,func,bool].forEach(input => {
        expect(validator.isObject(input)).toBeFalsy();
      })
    });

    it('checks isArray', () => {
      expect(validator.isArray(arr)).toBeTruthy();
      [num,obj,str,func,bool].forEach(input => {
        expect(validator.isArray(input)).toBeFalsy();
      })
    })

    it('checks isBoolean', () => {
      expect(validator.isBoolean(bool)).toBeTruthy();
      [num,obj,str,func,arr].forEach(input => {
        expect(validator.isBoolean(input)).toBeFalsy();
      })
    })

    it('checks isNumber', () => {
      expect(validator.isNumber(num)).toBeTruthy();
      [arr,obj,str,func,bool].forEach(input => {
        expect(validator.isNumber(input)).toBeFalsy();
      })
    })

    it('checks isFunction', () => {
      expect(validator.isFunction(func)).toBeTruthy();
      [num,obj,str,arr,bool].forEach(input => {
        expect(validator.isFunction(input)).toBeFalsy();
      })
    })
});