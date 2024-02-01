import React from 'react'

const Example = ({children}) => {
    // console.log({children})
    const names = ['shohel', 'rokib', 'sabana', 'bipasha']
  return (
    <div>
      <h1>Hell</h1>
      {children}
      {
        names.map((item)=>(
            <h2>{item}</h2>
        ))
      }
      {
        names[1]
      }
    </div>
  )
}

export default Example
