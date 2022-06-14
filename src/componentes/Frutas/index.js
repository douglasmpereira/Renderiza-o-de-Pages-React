import { Link } from 'react-router-dom'
import { useState } from 'react';

const Listas = () => {
    const [ nomes, setNomes ] = useState([
        {id: 1, nome: "João"}, 
        {id: 2, nome: "Felipe"}, 
        {id: 3, nome: "Ana"}, 
        {id: 4, nome: "Camila"}
    ])
    const [ frutas, setFrutas] = useState(["Banana", "Maçã", "Goiaba", "Uva", "Maracujá"])
    const [ frutaNova, setFrutaNova] = useState("");
    const [ nomeNovo, setNomeNovo] = useState("");

    const adicionaFruta = () => {
        setFrutas([...frutas , frutaNova])
        // setFrutas(["João", "Felipe", "Ana", "Camila", frutaNova]) equivalente a linha anterios, só que automático
        setFrutaNova("")
    }

    const adicionaNome = () => {
        setNomes([...nomes, {id: nomes.length + 1, nome: nomeNovo}])
        setNomeNovo("")
    }

    return(
        <>
            <ul>
                {nomes.map((item) => (
                    <li key={item.id}>{item.id} - {item.nome}</li>
                ))}
            </ul>
            <ul>
                {frutas.map((fruta, contador) => (<li key={contador}>Fruta: {fruta} - Index: {contador + 1} </li>))}
            </ul>

            <input type="text" value={frutaNova} onChange={(e) => setFrutaNova(e.target.value)}/>
            <input type="button" value="ADICIONAR FRUTA" onClick={adicionaFruta}/>

            <input type="text" value={nomeNovo} onChange={(e) => setNomeNovo(e.target.value)}/>
            <input type="button" value="ADICIONAR NOME" onClick={adicionaNome}/> <br /> <br />
            <Link to='home'><button>HOME</button></Link>
        </>
    );
}

export default Listas;

/*
    Criar um array de frutas em um state
    Renderizar Na tela a fruta e o Index
*/


