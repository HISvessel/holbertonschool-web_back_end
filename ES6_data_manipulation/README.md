Welcome to data manipulation in ES6. his repository is focused on manipulating complex data types. As per the project requirements, we will be closely studying the following topics:
    1) Arrays and manipulation
    2) how to use the following functions on arrays:
        a) map
        b) filter
        c) reduce
    3) Typed arrays
    4) the Set, Map, and Weak link data structures

Arrays:
    like in mamy other languages, array objects in Javascript are a data type that allows us to store collections of primitive data types sequentially. In JS, they are not primitive data type, they are actually objects with some particular characteristics:
        1) they are resizable
        2) they can contain different data types since they are treated as objects 
        3) they are non associative, and so cannot be accessed using arbitrary strings as indeces. 
        4) they are zero indexed, meaning the first element is at index zero
        5) copy operations perform a shallow copy of the original object. 
    Accessing elements of the array as you would with object methods(eg doing this: arr.0) throws a syntax error, since the machine does not recognize this as a digit, but rather as accessing a method. So, like in many other languages, to access an array, you must use brackets to find the index by a non negative digit. 

    A quick note on copy operations in JavaScript array objects:
    as mentioned previously, shallow copies instead of deep copies are created, meaning that changing the values of the shallow copy or the original can also change the values of the other one. Shallow copies, more particularly, are copues of objects whose property share the same reference to the original, making it possible to alter the value of the original object through changes made on the copy. To determine that you have created a shallow copy of an object, they must coincide with these rules:
        a) they are not the same object
        b) the properties of both objects have the same names in the same order
        c) the values of their properties are equal
        d) their prototype chains are equal

    This is a contrast to an object being a deep copy of another object, where there is no reference between original and copy, making it impossible to alter the structure and value of the original by attempting to change the contents of the deep copy. 



    Array Methods:
    arr.unshift
    arr.push
    arr.pop
    arr.shift
    arr.splice

    Array methods and empty slots:
    Empty slots are possible in arrays, so creating space for 4 elements in the arr[1, 2, 3, 4] and then adding a 5th element in the 7th position(arr[6] = 8) is perfectly possible. It does this by creating empty slots in between the 4th element and the 7th(or index 6) element. By consequence increases the length of the array up to the true amount of elements contained in the array(length of 7 slots, in this case), which includes the empty slots as undefined values that have not yet been created. The following methods have a special treatment for empty slots: concat(), copyWithin(), every(), filter(), flat(), flatMap(), forEach(), indexOf(), lastIndexOf(), map(), reduce(), reduceRight(), reverse(), slice(), some(), sort(), and splice(). For some methods, access to these empty slots are not possible(such as the case of the forEach() method). The ones described above preserve the empty slots when doing copying of array objects, creating what is known as a sparse array. 

    Some other methods actually place the undefined keyword in the empty slots of sparse arrays. These include the following: entries(), fill(), find(), findIndex(), findLast(), findLastIndex(), includes(), join(), keys(), toLocaleString(), toReversed(), toSorted(), toSpliced(), values(), and with().

Typed arrays:
    These are array like objects that provice a mechanism for reading and writing raw binary data in memory buffers. Right off the bat you can see that typed arrays behave more low level, and thus, the data store must be homogenous, in contrast to other array-like objects, which can permit storage of heterogeneous data types.

    In the case of typed arrays, buffers are necessary for the efficient handling of binary data, which can manifest itself in the form of graphics, audio processing or network communication. Using WebSockets for access to raw binary datavcan be made possible with the use typed arrays. Typed arrays store data from 8-bit integers to 64-bit floating point numbers. 
    
    JavaScript typed arrays share similar other concepts and functionality to other array like objects, but with certain distinctions:
        1) Array.isArray() returns false on a typed array.
        2) Some builtin functions(like push and pop) do not work on typed arrays. 
    

    Typed arrays are split into buffers and views, To access the content inside of a memory buffer, you need a view(a buffer cannot be directly accessed.). 

    Buffers:
    First off, let's talk about buffers. What they are and what they are used for. Buffers, in the concept of computing and informatics, is a space in memory that temporarily store data in a specific place, all for the purpose of being utilized at whichever time memory allows it to be readily available, so as to make transition smooth an uninterrupted. Memory buffers are represented as raw, fixed size block of binary data in memory. It is a generic container for bytes and does not ingerently define the type of data stored within it. You also cannot directly read from ot write to a memory buffer, instead it serves as the underlying storage for typed array views. Finally, you can also allocate, copy and transfer memory buffers between executions. 

    In the case of typed arrays, buffers are necessary for the efficient handling of binary data, which can manifest itself in the form of graphics, audio processing or network communication. Using WebSockets for access to raw binary datavcan be made possible with the use typed arrays. Typed arrays store data from 8-bit integers to 64-bit floating point numbers. 

    There are two types of buffers: 
        1) ArrayBuffer:
        2) SharedArrayBuffer:
    Both are low level representations of a memory span. Contrary to their name, they are not actual arrays, meaning you cannot read or write to them directly. They are just generic containers of raw data. 
    Buffers support the folliwing actions:
        a) Allocate: as soon as a new buffer is created, a new memory span is allocated and initialized to 0.
        b) Copy: using the slice() builtin function, you can copy a portion of the memory without creating views to manually copy each byte. 
        c) Transfer: using the transfer() and transferToFixedLength() methods, you can transfer ownership of the memory span to a new buffer object. Good for transferring data between differrent executions without copying objects; do keep in mind that the original buffer is no longer usable after a transfer. 
        d) Resize: with the resize() method, you can resize the memory span as long as the space does not pass the pre-set maxByteLength limit. **keep in mind that SharedArrayBuffer can only be grown, not shrunk. 
    
    The difference between ArrayBuffer and SharedArrayBuffer is that the former is always owned by a single execution context at a time. if you pass an ArrayBuffer to a different execution context, it is transferred and the original buffer becomes unusable. This is to protect an execution from having multiple buffers by ensuring that only one execution context can access the memory. A SharedArrayBuffer does the opposite: access to memory by use of multiple execution contexts are possible since they are not transferred from one execution context to another. This is due to the nature of the SharedArrayBuffer. This may introduce race conditions when multiple threads access the same memory span. 

    Views:
    As mentioned, views are used to take a look at the memory buffers, since they cannot be done directly by the buffer. There are currently two main kinds of views:
        1) DataView: the more low level of the views, allows more granular control of how data is accessed. This has the get and set methods of the construction of the view object. This is the thing tha gives us access to the buffer. 
        2) Typed Array Views: these provide utility methods that allow you to conveniently transform binary data. 
    Both kinds of views cause ArrayBuffer.isView() return true. they both have the following properties:
        a) buffer - this is the underlying buffer that the view references.
        b) byteOffset - the offset, in bytes, of the view from the start of its buffer
        c) byteLength - the length, in bytes, of te view
    
    Typed Array Views:
    these views have self descriptive names and provide views for all the usual numeric types like Int8, Uint32, Float64, etc. The names correspond to the type of data they stored, whether it is signed or unsigned and the infrastructure size that roots it. SO, for instance, a Int8 refers to signed numbers from the 8-bit computer or graphics system(or 2^8, the mathematical representation of a binary data to the power of 8), meaning the values can be initialized between -128 and 127. 

    Due to the fixed size nature of type arrays, any method that can alter the size of the array is not allowed. As such, the type prohibits the use of push, pop, splice, shift or unshift. Also, since there are no nested typed arrays, flat() is also unavalibale, as there would be no cases of flatmaps. Everything other array method that does not directly alter the size is shared between arrays and typed arrays. 

    Changing the array size means that you also alter the size of the buffer. However, and this might be an isolated case, the typed array can resize in accordance to the nature of the buffer. If the buffer viewed is resizable and does not have a fixed byteLength, it tracks the length of the buffer dynamically. Meaning that if the buffer being viewed is resized, the typed array will resize to adapt.
