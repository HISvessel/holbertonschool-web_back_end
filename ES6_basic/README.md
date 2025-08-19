This repository holds all the projects and tasks to learn the basics for the ES6 version of JavaScript. Welcome.

Some key elements have already been discussed in previous projects, such as data types, functions, some types of functions, compounded data types, function parameters, etc.

This group of projects more closely discusses things that are more specific to JavaScript's current version: ES6. This current version of JS brings in quite a few important things that make JS singifantly less prone to weird behavior; not everything, but it is a start. And so, let's begin.

Data types: var let and const

We can agree this is far and away the most significant change so far. TO contextualize, JS had at first only one way of initializing data type, and that was through the use of var. The thing is: when using var, you could some very quirky things and totally get away with it. The first: you could redeclare them, something generally not known in languages. The second and the most important: variables could be given a value before they were hoisted by the var keyword. This is particularly troublesome, since it can throw conditional logic and system operations off, redeclaring variables in function scope can affect the value in the global scope, making you lose track of the original data. 

This is where let and const come into play to avoid this sort of issues that var created. Let is a new keyword that was created with 