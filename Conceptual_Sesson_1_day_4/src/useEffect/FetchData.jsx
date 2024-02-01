import React, { useEffect, useState} from 'react'


const FetchData = () => {
    const [data, setData] = useState([]);
    useEffect(() =>{
        const fetchData = async () =>{
            try{
                const URL = `https://openapi.programming-hero.com/api/videos/category/1000`;
                const res = await fetch(URL);
                const data = await res.json();
                // console.log(data);
                setData(data.data)
                // console.log(data.data)

            } catch (error) {
                console.log(error)
            }
        }

        fetchData();


    },[])
    console.log(data)
  return (
    <div className='text-4xl my-4'>
      {data && data.map((item) => <h1>{item.title}</h1>)}
    </div>
  )
}

export default FetchData
