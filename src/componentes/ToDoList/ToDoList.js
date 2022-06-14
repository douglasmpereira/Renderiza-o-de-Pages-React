import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Card from '../card';

const ToDoList = () => {
    const [tarefas, setTarefas] = useState([])
    const [novaTarefa, setNovaTarefa] = useState("")

    
    const handleCadastrar = () => {
        if(novaTarefa === "") return;
        setTarefas([...tarefas, novaTarefa]);
        setNovaTarefa("")
    }

    const apagar = () => {
        const novoArray = tarefas.filter((item, index) => index !== tarefas.length - 1 )
        setTarefas(novoArray);

        

       // setTarefas([]);
    }
        
    useEffect(() => {
        console.log(tarefas);
    },[tarefas])
    
    // ['a', 'b', 'c', 'd'].map
    return(
        <>
            <h1>Lista de Tarefas</h1>
            <input type="text" placeholder='Insira uma tarefa nova' value={novaTarefa} onChange={(e) => setNovaTarefa(e.target.value)} /> <br /> <br />
            <button onClick={handleCadastrar}>Cadastrar Tarefa</button> <br /> <br />
            <button onClick={apagar}>Apagar Tarefas</button> <br /> <br />
            <Link to='home'><button>HOME</button></Link> <br />

            {/* {tarefas.map((tarefa, count) => (
                // <p key={count}>{count + 1} - {tarefa}</p>
                <Card data={tarefa}/>

            ))} */}
            
            <Card data={tarefas}/>





        </>
    );
}

export default ToDoList;