This repository holds all the projects and tasks to learn the basics for the ES6 version of JavaScript. Welcome.

Some key elements have already been discussed in previous projects, such as data types, functions, some types of functions, compounded data types, function parameters, etc.

This group of projects more closely discusses things that are more specific to JavaScript's current version: ES6. This current version of JS brings in quite a few important things that make JS singifantly less prone to weird behavior; not everything, but it is a start. And so, let's begin.

Data types: var let and const

We can agree this is far and away the most significant change so far. TO contextualize, JS had at first only one way of initializing data type, and that was through the use of var. The thing is: when using var, you could some very quirky things and totally get away with it. The first: you could redeclare them, something generally not known in languages. The second and the most important: variables could be given a value before they were hoisted by the var keyword. This is particularly troublesome, since it can throw conditional logic and system operations off, redeclaring variables in function scope can affect the value in the global scope, making you lose track of the original data. 

This is where let and const come into play to avoid this sort of issues that var created. Let is a new keyword that was created to fix the shortcomings of var. Const was also implemented as a way of setting constants, or values that cannot change and will not change. The most important characteristic these two keywords brought was the concept of Block Scope. Previously, there was only Global Scope and function scope. With block scope established, variables declared as let or const are protected within the block scope. That way, declared data in the global scope cannot be redeclared by accident. 

Arrow Functions
The next concept is that of arrow functions. Similar o lambda functions in Python, we can use these to contain small user created one-line functions inside of a scope. this allows us to delete the keywords function and the funnction name; instead, we replace it with the => operator to indicate that it is an arrow function. These functions can come with and without parameters, so use them to your advantage. The most characteristic concept of arrow functions is the capacity to map functions inside of other functions. 

It does come with its own drawbacks:
    1)  By design they are meant to be used within the scope of the appended variable or function, meaning they do not have their own "this" or constructor method, unlike regular functions. As such, they cannot be used with new keyword to create instances and cannot or should not be used as methods. This means, for example, that creating a new object and attempting to overwrite data values with an arrow function by using it with methods is not possible. 
    2) They do not have their own argument objects, unlike regular functions. This can limit their use and implementing arrow functions should come at the expenses of being implemented within specific instances of large operations.
    3) They cannot be used as generators, since they do not support the yield keyword. 
    4) Function hoisting is not allowed for arrow functions, so you cannot use first and then declare later. This will fall within the temporal dead zone. 
    5) Arrow functions only allow for unique parameters, meaning you cannot run duplicates "(a, a) => a + a;"

