import React, { useEffect } from 'react'
import instance from '../../axiosCOnfig'

function Home() {
   async function getData(){
   const response = await instance.get("/products")
   console.log(response);
   }

   useEffect(()=>{getData()}, [])
  return (
    <div>Home</div>
  )
}

export default Home