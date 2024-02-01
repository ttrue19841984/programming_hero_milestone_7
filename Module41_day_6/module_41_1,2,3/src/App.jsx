
import { useEffect, useState } from 'react';
import './App.css'
import Watch from './components/Watch/Watch' 

function App() {
  // const watches = [
  //   {id: 1, name: 'Apple watch', price: 200},
  //   {id: 2, name: 'Samsung watch', price: 300},
  //   {id: 3, name: 'MI watch', price: 100}
  // ]

  const [watches, setWatches] = useState([]);

  useEffect( () =>{
    fetch('watches.json')
    .then( res => res.json())
    .then(data => setWatches(data))
  }, [])

  return (
    <>
      <h1>React</h1>
      {
        watches.map(watch => <Watch key = {watch.id} watch= {watch}></Watch>)
      }
      
    </>
  )
}

export default App
