
type Props = {
  num: number,
  setNum(number: number): void
}

const StateNumber = (props: Props) => {


  return (
    <div>
      <p>Valor do state num em StateNumber: {props.num}</p>
      <button onClick={ () => props.setNum(props.num + 10) }>Adicionar - Componente</button>
    </div>
  )
}

export default StateNumber