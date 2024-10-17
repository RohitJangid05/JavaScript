In JavaScript, a variable is used to store data that can be referenced and manipulated later in a program. Variables can hold various types of data such as numbers, strings, arrays, objects, and more. JavaScript provides three ways to declare variables: var, let, and const.

var
 -Scope: Function-scoped (or globally scoped if declared outside a function).
 -Hoisting: Variables declared with var are hoisted, meaning they are accessible even before their declaration in the code, but their value will be undefined until assigned.
 -Re-declaration: Variables declared with var can be re-declared in the same scope

let
 -Scope: Block-scoped, meaning the variable is only available within the block {} it is defined in.
 -Hoisting: Variables declared with let are hoisted, but they cannot be accessed before the declaration (temporal dead zone).
 -Re-declaration: You cannot re-declare a variable with let in the same scope.

const
 -Scope: Block-scoped, similar to let.
 -Hoisting: const is also hoisted but is in the temporal dead zone like let.
 -Re-declaration and Re-assignment: Variables declared with const cannot be re-assigned or re-declared. This is useful for declaring constants that should not change.
 -Immutability: Although const prevents re-assignment, objects and arrays declared with const can still be modified internally.