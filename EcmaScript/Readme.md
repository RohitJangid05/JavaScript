ECMAScript
    ECMAScript is a scripting language specification that is the foundation of JavaScript and several other languages. It standardizes the core features of these languages and defines how they should work.

ECMAScript vs. JavaScript
    While JavaScript is the implementation of the ECMAScript specification, it also includes additional features like the Document Object Model (DOM) and APIs that are not part of the ECMAScript standard.

Conclusion
    ECMAScript is fundamental to web development and programming in JavaScript. Its evolving nature allows developers to write more robust, readable, and maintainable code. Keeping up with the latest ECMAScript features can significantly enhance your programming skills and improve your code quality. If you have specific questions about a particular version or feature of ECMAScript, feel free to ask!

Features of ECMA Script

let
    -Scope: Block-scoped, meaning the variable is only available within the block {} it is defined in.
    -Hoisting: Variables declared with let are hoisted, but they cannot be accessed before the declaration (temporal dead zone).
    -Re-declaration: You cannot re-declare a variable with let in the same scope.

const
    -Scope: Block-scoped, similar to let.
    -Hoisting: const is also hoisted but is in the temporal dead zone like let.
    -Re-declaration and Re-assignment: Variables declared with const cannot be re-assigned or re-declared. This is useful for declaring constants that should not change.
    -Immutability: Although const prevents re-assignment, objects and arrays declared with const can still be modified internally.

Templet string
    Template strings (also known as template literals) are a feature in JavaScript introduced in ES6 (ECMAScript 2015). They provide a way to work with strings more flexibly and conveniently than traditional string literals.