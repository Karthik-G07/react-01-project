import React from 'react'

const Card = (props) => {
  
  return (
     <div className="card">
      <h1>{props.user}</h1>

      <img src={props.image} alt="loading" />
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores aspernatur beatae veritatis assumenda odit cum dolorum repudiandae quos vel sint aut, voluptates harum nisi dolorem architecto distinctio quae dolores iure!</p>
      
      <button>view profile</button>
      
    </div>
  )
}

export default Card
