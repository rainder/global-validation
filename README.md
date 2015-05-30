# Global Validation

## Confession
This package modifies global `String`, `Object`, `Array`, `Function`, `Number` and `Boolean` constructor properties. I feel bad about it. Really.

## Usage
```
require('global-validation');

var validate = String.type().min(5);
validate('Hello world');

var validate = Array.type().min(3).oneOf([1, 2, 3, 4, 5]).typeOf(Number);
validate([1,1,2,2,1,2);

```