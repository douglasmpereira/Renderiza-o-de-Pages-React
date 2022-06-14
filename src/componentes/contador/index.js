import { Link } from 'react-router-dom'
import { useState } from "react";
const Contador = ({meuNome}) => {
   const [contador, setContador] = useState(0);
   const incrementaContador = () =>{
        
    //setContador(contador+1)
    setContador((prevState) => prevState+1)
        console.log(contador)
   }

    return (

    <>
        <h1>Ola, {meuNome} !</h1>
        <h1> Contador de cliques: {contador} </h1>
        <button onClick={incrementaContador}>Clique aqui!</button> <br /> <br />
        <Link to='home'><button>HOME</button></Link>
        
    </>  
    );
}
export default Contador;