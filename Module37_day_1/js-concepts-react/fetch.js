// 1. json, fetch

const student = {
    name: 'sakib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Matan']
}

const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj)

// 2. keys, values
const keys = Object.keys(student)
console.log(keys)
const values = Object.values(student)
console.log(values)

// forEach(), map()
const numbers = [23, 54, 67, 89, 23, 34]
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of on array like object
// loop on an object using for in

