import React from 'react'

function Section({h1,p1,p2,span}) {
  return (
    <div className='section'>
      <h1>{h1}</h1>
      <p id='gappara'>{p1} <span>{span}</span></p>
      <p>{p2}</p>
    </div>
  )
}
export default Section;
