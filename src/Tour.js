import React, { useState } from 'react';

const Tour = (props) => {
  const [readMore,setReadMore]=useState(false)
  return <article className='singleTour'>
      <img src={props.image} alt={props.name} />
      <footer>
        <div className="tour-info">
          <h4>{props.name}</h4>
          <div className="tour-price">
            ${props.price}
          </div>
          <p>
              {readMore?props.info:`${props.info.substring(0,100)}...`}
              <button onClick={()=>{setReadMore(!readMore)}}>
                {readMore?'Show Less':'Read More'}
              </button>
          </p>
          <button className='delete-btn' onClick={()=>{props.removeTour(props.id)}} >Not Interested</button>
        </div>
      </footer>
    </article>
};

export default Tour;
