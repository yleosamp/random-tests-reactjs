const Greeting = () => {
  const hour = (): number => {
    return new Date().getHours()
  }

  const verifyHour = () => {
    if(hour() < 13) {
      return <p>Bom dia!</p>
    }else if(hour() >= 13 && hour() < 18) {
      return <p>Boa tarde!</p>
    }else {
      return <p>Boa noite!</p>
    } 
  }
  
  return (
    <div>
      <h4>A saudação irá mudar conforme o horário do dia.</h4>
      <p>{ verifyHour() } Horário: { hour() }</p>
    </div>
  )
}

export default Greeting