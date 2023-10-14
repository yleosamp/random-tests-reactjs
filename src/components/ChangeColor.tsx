import { useState } from "react";

const ChangeColor = () => {
  const [color, setColor] = useState(0)

  const red = {color: '#FF0000'}
  const blue = {color: '#0000FF'}
  const green = {color: '#00FF00'}

  const currentColor = (c: number) => {
    if(c === 0) {
      return red
    } else if(c === 1) {
      return green
    } else if(c === 2) {
      return blue
    } else {
      setColor(0)
    }
  }

  return (
    <div>
      <h1 style={ currentColor(color) }>Muda de color a cada clique no botão</h1>
      <button onClick={ () => setColor(color + 1) }>Mudar cor</button>
    </div>
  )
}

export default ChangeColor