import React from 'react'

function CardContainer({children}) {
  return (
    <div className='row'>
      {children}
    </div>
  )
}

export default CardContainer;
