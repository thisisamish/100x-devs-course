## Learnings from this assignment
1. JavaScript has it's own Map and Set objects. They are fairly new. We can use existing object syntax to implement the hashmaps and hashsets. I didn't find much ease in using these new Map and Set objects. I found their syntax to be much more convoluted than say C++.
2. Use `for...in` when you need to loop through the keys of an object, and use `for...of` when you need to loop through the values of an iterable object like an array or a string. Avoid using `for...in` with arrays, and instead, opt for `for...of` to avoid iterating over prototype properties.
3. When creating an object with dynamic keys in JavaScript, you need to use square brackets `[]` around the variable holding the key name because it allows you to use the variable's value as the actual key name. In JavaScript, object keys can be either string literals or computed expressions enclosed in square brackets. When you use square brackets to define a key, the expression inside the brackets will be evaluated, and its result will be used as the key name. This is known as computed property names.  

```js
const dynamicKey = 'myKey';   
const myObject = { [dynamicKey]: 'This is the value for the dynamic key' };
```
4. `Object.entries()` and `Object.fromEntries()` are powerful methods. Look them up.