import React from 'react'

const Relogio = () => {
  return (
    <div>
      <p>{ new Date().toLocaleTimeString() }</p>
    </div>
  )
}

export default Relogio