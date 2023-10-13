
type Props = {
  github(): string,
  linkedin: string,
  sum(number1: number, number2: number): number
}

const Data = (props: Props) => {
  return (
    <div>
      <p>GitHub: {props.github()}</p>
      <p>LinkedIn: {props.linkedin}</p>
      <p>Soma: {props.sum(10, 5)}</p>
    </div>
  )
}

export default Data