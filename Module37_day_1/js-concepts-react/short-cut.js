// truthy value : 'shohel', 5, true, {}, [];
// falsyi value : '', 0, false, null, nudefiend

// check any truthy

let myVar = 5;
if(myVar){
    myVar = myVar * 100;
}
else{
    myVar = 0;
}

// check negative or falsy anything
let myMoney = 50;
if(!myMoney){
     
}

const money = 80;
let food;
if(money > 100){
    food = 'biryani';

}
else{
    food = 'cha biscuit'
}
// ternary oparetor
let food1 = money > 100? 'biryani': 'cha biscuit';
console.log(food1)

let drink = (money > 100 && myVar > 100)? 'coke': 'filter water';

// number to string conversion
const num1 = 52;
console.log(num1);
const numStr = num1 + '';
console.log(numStr);

// string to number
const input = '560';
const inputNum = +input;
console.log(inputNum);

const isActive = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');
isActive ? showUser() : hideUser();
// use && if the left side is true right side will be executed
isActive && showUser();
// use || if the left side is false then rightt side will be executed
isActive || hideUser();

// toggle boolean
isActive = !isActive;
