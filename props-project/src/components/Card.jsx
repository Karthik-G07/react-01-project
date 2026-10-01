import React from 'react'

const Card = (props) => {


  return (
      <div className="crd">
    <div className="top">
      <img src={props.logo} alt="loading " />
      <p>save </p>
    </div>
    <div className="company">
      <h5>{props.company} <span>{props.date}</span>
      </h5>
    </div>
    <div className="role">
      <h1>{props.role}</h1>
     
    </div>
    <div className="type">
      <span> {props.rotation}</span> <span>{props.exps}</span>
       
    </div>
    <div className="bottom">

      <div className="hour">
        <h5>{props.payment}</h5>
        <p>{props.location}</p>
      </div>
      <div className="apply">
        <button>Applay Now</button>
      </div>
    </div>
    </div>
  )
}

export default Card
