const numbers = [89, 35, 98, 12];
const student = {
    name: 'sakib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Matan']
};

// 1. template string

const about = ` My Name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`
console.log(about)

// 2. arrow function

const getFiftyFive = () => 55;
const getSixtyFive = num => num + 65;
const isEven = x => x % 2 === 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) =>{
    const sum = num1 + num2;
    return sum;
}

// spread operator


numbers.push(99);
numbers.push(99);
numbers.push(99);


const newNumbers = [...numbers];
// create a new array from an older array and add an element

const currentNumbers = [...numbers, 55]
console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);

// object spred operator
const products = [
    {name: 'laptop', price: 3200, brand: 'len', color: 'silver'},
    {name: 'phone', price: 7000, brand: 'HTC', color: 'golden'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
    {name: 'sunglass', price: 300, brand: 'rbon', color: 'black'},
    {name: 'camera', price: 8000, brand: 'canon', color: 'gray'}
];

const newProduct = {name: 'webcam', price: 700, brand: 'Lal'}

// copy products array and then add newProduct
const newProducts = [...products, newProduct]
console.log(newProducts);

//create a new array without one specific item
// remove phone means create a new array without the phone

const remaining = products.filter(p => p.name !== 'phone');