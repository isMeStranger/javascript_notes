const mySet = new Set([1,2,2,3,4]) // unique items, // always not garbage collected 

const mySet2 = new WeakSet([1,2,2,3,4]) // unique items, // always garbage collected 

const myMap = new Map([ // always not garbage collected 
    ['one', 1], 
    ['two', 2]
])

const myMap2 = new WeakMap([ // always garbage collected 
    ['one', 1], 
    ['two', 2]
])