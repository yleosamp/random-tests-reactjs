
type Props = {
  number: string,
  nota: number,
  setNotas: Function
}

const StateElevate = (props: Props) => {  
  return (
    <div>
      <form action="">
        <label htmlFor={props.number}>Digite uma nota: </label>
        <input type="text" name={props.number} value={props.nota} onChange={ (e) => props.setNotas(e) }/>
      </form>
    </div>
  )
}

export default StateElevate