import { Link } from 'react-router-dom'
import { useState } from "react";
const Cadastro = () => {

   const [nome, setNome] = useState("")
   const [idade, setIdade] = useState("")
   const [sexo, setSexo] = useState("")
   const [cidade, setCidade] = useState("")

   /* const pressionou = (a,b,c,d) => {
        setNome(a.target.value)
        setIdade(b.target.value)
        setSexo(c.target.value)
        setCidade(d.target.value)
    }*/
    const enviar = () =>{

        if(nome===""||idade===""||sexo===""||cidade===""){
            alert("Preencha todos os campos")
        }else{
        const dados = `Nome: ${nome}. Idade: ${idade}. Sexo: ${sexo}. Cidade: ${cidade}`
        console.log(dados)
        setNome("")
        setIdade("")
        setSexo("")
        setCidade("")
        alert("Cadastro realizado com sucesso")
    }
}
  return (
    <>
        <h1>Formulario</h1>
        <label>
            Nome: <br />
            <input type="text" placeholder="Digite seu Nome" value={nome} onChange={(e) => setNome(e.target.value) } /> <br />
            Idade: <br />
            <input type="text" placeholder="Digite sua Idade" value={idade} onChange={(e) => setIdade(e.target.value)} /> <br />
            Sexo: <br />
            <input type="text" placeholder="Digite seu Sexo" value={sexo} onChange={(e) => setSexo(e.target.value)}  /> <br />
            Cidade: <br />
            <input type="text" placeholder="Digite sua Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} /><br /><br />
            
            <button onClick={enviar}>Enviar dados</button> <br /> <br />
            <Link to='home'><button>HOME</button></Link>

        </label>
    </>
  )
}
export default Cadastro;

