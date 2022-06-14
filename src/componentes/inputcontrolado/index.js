import { Link } from 'react-router-dom'
import { useState } from "react"
const InputControlado = () => {
    const [nome, setNome] = useState("Nome Inicial")

    const pressionou = (e) => {
        setNome(e.target.value)
        console.log(e.target.value)
    }
  return (
    <>
        <label>
            Nome: 
            <input type="text" value={nome} onChange={pressionou} /> <br /> <br />
            <Link to='home'><button>HOME</button></Link>
        </label>
    </>
  )
}

export default InputControlado