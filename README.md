# Global Validation

## Confession
This package modifies global `String`, `Object`, `Array`, `Function`, `Number` and `Boolean` constructor properties. I feel bad about it. Really.

## Usage
```js
require('global-validation');

//string
var validate = String.type().min(5);
validate('Hello world');

//array
var validate = Array.type().min(3).oneOf([1, 2, 3, 4, 5]).typeOf(Number);
validate([1, 1, 2, 2, 1, 2]);

//object
var validate = Object.type().fn(function (value, arg1, arg2) {
  console.log(this, value, arg1, arg2);
  return true;
});
validate.call(ctx, {
  name: 'Skerla'
}, arg1, arg2);

```