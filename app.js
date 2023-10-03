// ES5 Function that takes a variable number of arguments
// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

/* Write an ES2015 Version */

const filterOutOdds = (...args) => args.filter(v => v % 2 === 0);


//---find min---

const findMin = (...args) => Math.min(...args);

// ---mergeObjects---

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

//---doubleAndReturnArgs--- 

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)];

//---Slice and Dice---

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
};

const extend = (array1, array2) => {
    return [...array1, ...array2];
};

/** Return a new object with all the keys and values
from obj and a new key/value pair */
const addKeyVal = (obj, keys, val) => {
    let newObj = { ...obj }
    newObj [keys] = val;
    return newObj;
};

/** Return a new object with a key removed. */
const removeKey = (obj, key) => {
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
};


/** Combine two objects and return a new object. */
const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
};

/** Return a new object with a modified key and value. */
const update = (obj, key, val) => {
    let newObj = { ...obj } 
    newObj[key] = val;
    return newObj;
};