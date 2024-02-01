
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo';
import Actor from './Acror';
import Singer from './Singers';
import BookStore from './BookStore';

function App() {
    const actors = ['sakib', 'Shoriful Raj', 'Joshim', 'Rubel', 'Salman shah']
  const books = [
    {id: 1, name: 'physics', price: 100},
    {id: 2, name: 'Math', price: 120},
    {id: 3, name: 'chemistry', price: 132},
    {id: 4, name: 'Biology', price: 150},
  ]
    const singers = [
      {id: 1, name: 'Dr. Mahfuzur Rahman', age: 68},
      {id: 2, name: 'Eva Rahman', age: 38},
      {id: 3, name: 'shuvro Dev', age: 58},
      {id: 4, name: 'Pritom', age: 28}
    ]
  return (
    <>
      
      <h1>Vite + React</h1> 
      <BookStore books= {books}></BookStore>

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

       
      <Actor name ={"Bappa Raz"}></Actor>

      {
        actors.map(actor => <Actor></Actor>)
      }

      {/* <Todo
       task="Learn React"
        isDone={true}></Todo>
      <Todo
       task="Explore Core concepts"
        isDone={false}></Todo>
      <Todo
       task="Try JSX"
        isDone={true}></Todo> */}
      {/* <Person> </Person>
      <Person> </Person>
      <Person> </Person>
      <Person> </Person>
    <Student grade="7" score="99"></Student>
    <Student grade= {12} score="85"></Student>
    <Student></Student>
    <Developer></Developer> */}
      
    </>
  )
}
function Person(){
  const age = 25;
  const money = 20;
  const person = {name: 'salid', age: 12}
  return <h3>I am {person.name} person with age: {age + money}</h3>
}

const {grade, score} = {grade: '7', score: '99'}; 
function Student({grade=1, score=0}) {
  console.log({grade, score})
  return (
  <div className='student'>
    <h3>This is a student</h3>
    <p>Class: {grade}</p>
    <p>score: {score} </p>
  </div>
  )
}

function Developer(){
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return(
    <div style={developerStyle}>
      <h5>Devo devo</h5>
      <p>Coding</p>
    </div>
  )
}
export default App
