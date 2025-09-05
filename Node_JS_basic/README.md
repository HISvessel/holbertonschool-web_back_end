Welcome to this repository, wwhere we will learn about how JavaScript operates on the back end with Node JS. Created by Ryan Dahl, it is a cross platfomr open source runtime environment program that could exist outside of its native browser environment by running the V8 Javascript engine. 


The power of Node JS is running multiple requests and responses in a single thread, handling and maintaining concurrencies within a single server, and thus, performing asynchronous operations without debugging multiple individual ports and threads. 

Asynchronous operations in JavaScript:
These operations allows us to perform long operations while other smaller operations run in between that large operation starting and finishing. This breaks the need for sequencing in programming operations, whic has the benefit of programs running without having to wait for prior operations to finish in order to resume everything else. For example, if small operations that can finish in a matter of less than 3 seconds are placed immediately after a large operation that finishes in 10 seconds, we can program these smaller operations to perform while the larger iitial operation is pending completion. 

Asynchronous operations are utilized in web browsers for fetching requests and awaiting responses. Likewise, we use Promise objects to load information into the browser asynchronously. How does it work? Suppose you are awaiting a promise to be loaded into the website's html, but given as to how they are awaiting for that promise to be loaded, you would likely want the html to load the rest of the content before that promise is fulfilled or rejected. This is where asynchronous operations come into play: you can await promises to fulfill or reject without halting the loading of the html. This way, yu can still view the webpage even before the promise has been fulfilled or rejected. Key aspects that will be discussed in async operationsm are the async and await keynotes.

JavaScript Execution Model:
Engine and host:
    JavaScript execution requires the cooperation of two pieces of software: the JS engine and the host environment.The engine implements the ECMAScript language for the core functionality, taking the source code, parsing and executing it. To interact with the outside world, such as outputting content, we would need additional environment-specific mechanisms provided by the host environment. For JS scripting, we can utilize HTML DOM as the environment. Node.js is another host environment that allows JavaScript to be run on the server side(back-end JavaScript). 

Agent Execution Model:
Heaps: this is the portion of memory that gets populated as objects are created. In the case of shared memory, each agent has its own heap with its own version of a SharedArrayBuffer object, but the underlying memory represented by the buffer is shared. 
Queue: this is known in HTML as the event loop, which enables asynchronous programming in JS while being single threaded. It's called a queue because it is generally a First In First Out job resolver; earlier jobs are executed before later ones. 
Stack: this is what is known as a call stack and allows transferring control gflow by entering and exiting execution contents like functions. They call it the stack because it is last in first out; every job enters by pushing a new frame into the empty stack, and exits by emptying the stack. 


The following image illustrates the execution model of the aforementioned agents:
<img src="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model/runtime-environment-diagram.svg" alt="A diagram consisting of two agents: one HTML page and one worker. Each has its own stack containing execution contexts, heap containing objects, and queue containing jobs."/>

Agent realms:
    Each agent owns one or more realms. Each piece of JS code is associated with a realm where it is loaded, which remains the same even when called from another realms. A realm consists of the following information:

    A list of intrinsic objects like Array, Arrya.prototype, etc.
    Globally declared variables, the value of globalThis, and the global object.
    A cache of template literal arrays

    on he web, the realm and the global object are one to one correspondent. Making objects contained within the agent unique to them. 

Stack and Execution contexts:
    Realms and jobs make use of the stack agent to keep track of variables, control flow, execution and safe exits. Agents use a stack to keep tracks of execution contexts, or stack frame, as it is also referred to as. This is the smallest unit of execution, and it tracks the following information:
        -> Code evaluation state.
        -> The module or script, the function and the currently executing generator that contain this code.
        -> The current realm.
        -> Bindings(var, let, const, function, class, this, etc.)


Node.js vs the browser:
Simply put, Node.js and the browser, while native to JavaScript, are totally different to each other. What is the difference? The ecosystem. Programming JS i the browser usually revolves around interacting with the DOM or web platform APIs like Cookies. These do not exist in Node.js. Alternatively, the browser does not have the same APIs that node.js provides through its modules. 
Second, Node.js allows you to control the environment, meaning you know exactly which version of the ECMScript you can toggle to build an application with. The browser does not give you the option to choose which version of the browser the consumer can use. This has the added benefit of having the server side source code run on the more up to date versions of JS in contrast to the browser, which can be much slower to upgrade on the long run. 

Node.js Node modules
Node.js counts with a list of modules for app functionality. This system is reminiscent of how Python has builtin tools and libraries for operating filesystem, system I/O, http modules, etc. Some of the nodes wwe will be using are the following:

    fs: this is the file system, which can help us operate with CLI input and output, change directories, check current directories, open, read and write unto files, etc.

    process: 