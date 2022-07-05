import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {

  const [loading,setLoading]=useState(true)
  const [tours,setTours]=useState([])

  const removeTour=(id)=>{
    const newTour=tours.filter((tour)=> tour.id !== id)
    //if the id is mathcing which i wanna remove then remove it 
    //iska mtlb newTours me vo sare objects daldo jo id se mathc nhi hore and then rerender the newTour againi
    setTours(newTour)
  }

  const fetchTours=async()=>{
      setLoading(true) //surely loading is true when it is fetching

      try {
      const response=await fetch(url)
      const tours=await response.json()
      setLoading(false)
      setTours(tours)
      } catch (error) {
        setLoading(false)
       console.log(error); 
      }

      
  }
  useEffect(()=>{
      fetchTours();
  },[])


  if(tours.length==0)
  {
    return(
      <main>
        <div className="title">
          <h2>Nothing Left</h2>
          <button className='btn' onClick={()=>{
            fetchTours() 
          }}>Let's Fetch</button>
        </div>
      </main>
    )
  }

  if(loading)
  {
    return(
    <main>
        <Loading/>
    </main>
    )
  }
  else 
  {
    return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
    )
  }
  
}

export default App