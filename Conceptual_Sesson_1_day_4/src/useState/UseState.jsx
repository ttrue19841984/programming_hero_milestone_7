import React, {useState} from 'react';

const UseState = () => {
    const [value, setValue] = useState("rokib");
    // console.log(value)
    const handleAdd = () =>{
        setValue("Hasan")
    }
    const handleMinus = () =>{
        setValue("rokib")
    }

    const arrayOfObjects = [
        {id: 1, name:'Oliv 1'},
        {id: 2, name:'ject 2'},
        {id: 3, name:'baul 3'},
        {id: 4, name:'abul 4'},
        {id: 5, name:'Ooii 5'},
        {id: 6, name:'pirood 6'},
        {id: 7, name:'kiodr 7'},
        {id: 8, name:'poor 8'},
        {id: 9, name:'motion 9'},
        {id: 10, name:'shohel 10'}
    ]
    const [data, setData] = useState(arrayOfObjects);

    const handleRemoveAll = () =>{
        setData([]);
    }
    const handleSingleRemove = (id ) =>{
        console.log(id)
        const filteredData = data.filter((item)=> item.id !== id);
        setData(filteredData)
    }



  return (
    <div className='text-center text-4xl my-24'>
      <h1>Exploring hook</h1>
        <h1>Count:{value} </h1>
        <button onClick={handleAdd} className='btn btn-success'>Add</button>
        <button onClick={handleMinus} className='btn btn-secondary'>Minus</button>
        {value === 'Hasan' && <h1>Yes</h1>}
        {value === "rokib" && (
            <div>
                <h1>Hello for rokib value</h1>
            </div>
        )}

        {data &&
            data?.map((item, index) => (
                
                <div key={index}>
                    <h1>{item.name}</h1>
                    <button onClick={() =>handleSingleRemove(item.id)} className='btn btn-xs btn-success'>remove</button>
                </div>
            ))
        }
        <button className='btn btn-accesnt' onClick={handleRemoveAll}>Remove All</button>
    </div>
  )
}

export default UseState
