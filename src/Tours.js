import React from 'react';
import Tour from './Tour';
const Tours = ({tours,removeTour}) => {
  return<>
     <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {
          tours.map((tour)=>{
              return <Tour 
                key={tour.id}
                // name={tour.name}
                // info={tour.info}
                // image={tour.image}
                // price={tour.price}
                //or we can do is just using spread op.
                {...tour}
                removeTour={removeTour}
              />   
          })
        }
      </div>
     </section>
  </> 
};

export default Tours;
