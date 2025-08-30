Welcome. This repository holds all the compiled notes as we learn about promises in ES6, along with asynchronous JavaScript and try/catch clauses. 

Promises:
    A promise is an object that represents the eventual completion of an asynchronous operation in JavaScript. This object is utilized when warranty of return is not known, meaning that we use promises when we do not know the outcome of a particular operation and want to continue functionality without having other components of the operation crashing due to awaiting results. The result(return) of an operation that awaits a promise can be determined in one of three different statuses: pending, fulfilled and rejected. All stages are prett self explanatory, the pending status awaits for the promise to be either fulfilled or rejected, with the fulfilled status returning our desired product, be it an event listener, a change in web structure, styling or scripting, or some alternate method, and finally a rejection will result in an error being thrown instead. 

Promise methods
    promise.all()
    promise.race()
    promise.any()