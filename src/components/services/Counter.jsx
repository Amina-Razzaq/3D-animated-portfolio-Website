import React from 'react'

const Counter = (from,to,text) => {
  return (
    <div>
      <div className="counter" >
      <h1>{to}</h1>
      <p>{text}</p>
    </div>
    </div>
  )
}

export default Counter
