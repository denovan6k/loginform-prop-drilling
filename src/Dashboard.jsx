import React from 'react'
import { useNavigate } from 'react-router-dom'


function Dashboard() {
 
  const navigate= useNavigate();

  function handleSubmit() {

   navigate('/')
  }
  
  return (
    <>
     <div>
      Welcome to the Dashboard 
    </div>
    <button className="bg-black mt-5 text-white py-5 px-5 rounded-2xl" type="button" onClick={handleSubmit}> Sign up</button>
</>
   
  )
}



export default Dashboard
