import React from 'react'
import  './Cards.css'

const Cards = (props) => {
  return (
    <div>
      <div className='card'>
        <img src="https://techcrunch.com/wp-content/uploads/2024/03/20240306_151850.jpg?resize=1536,1152" alt="" width={330} height={220} style={{ border: "2px solid black" }} />
        <h1>
        {props.title}
        </h1>
        <p>
           {props.description}
        </p>
        
      </div>
    </div>
  )
}

export default Cards
