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
