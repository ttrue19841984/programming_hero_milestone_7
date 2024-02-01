// 1. destructuring

 const numbers = [42, 65];
 const x = numbers[0];
 const y = numbers[1];
 console.log(x, y);

 const [a, b] = [42, 65]
 console.log(a, b);

 const [c, d] = numbers;
 console.log(c, d);


 function boxify(num1, num2) {
    const nums = [num1, num2]
    return nums;
 }
 const boxi = boxify(90, 34)
 console.log(boxi)

//  const [first, second] = [90, 34];
 const [first, second] = boxify(90, 34);


 const student = {
    name: 'sakib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Matan']
};

// const [firstNovie, secondMovie] = ['king khan', 'Dhakar Matan']
 const [firstMovie, secondMovie] = student.movies;
 console.log(firstMovie)
 console.log(secondMovie)


 // 2. destructuring

//  const {name, age} = {name: 'alu', age: 24}
 const {name, age, id} = {id:12, name: 'alu', age: 24}
 console.log(name, age, id)

 const employee ={
    ide: 'Vs Code',
    designation: 'developer',
    machine: 'mac', 
    languges: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'casio'
        }
    }
 }
 const {machine, ide} = employee;
 console.log(machine, ide);
 const {weight, address} = employee?.specification;
 console.log(weight, address)
 const {color, brand} = employee?.specification?.watch;
 console.log(color, brand);
 const [p, q] = employee?.languges;
 console.log(p, q)