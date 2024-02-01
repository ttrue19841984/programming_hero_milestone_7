import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [value, setValue ] = useState(0);
    const handleClick = () =>{
        setValue (value + 1)
    }

    useEffect(() => {
        console.log('running from useEffect');

    }, [])
  return (
    <div className='text-3xl'>
      <h1> Count: {value}</h1>
      <button className='btn btn-primary' onClick={handleClick}>Add</button>
    </div>
  )
}

export default UseEffect


