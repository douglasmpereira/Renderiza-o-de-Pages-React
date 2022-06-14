import { Link } from 'react-router-dom'
const Home = () => {
    return(
        <>
            <h1>Menu Principal</h1>
            <Link to='home'><button>HOME</button></Link>
            <Link to='login'><button>LOGIN</button></Link>
            <Link to='contato'><button>CONTATOS</button></Link>  <br /> <br />
            <h1>Escolha o exercicio que deseja testar!</h1>
            <Link to='cadastro'><button>CADASTRO</button></Link>
            <Link to='contador'><button>CONTADOR</button></Link>
            <Link to='listas'><button>LISTAS</button></Link>
            <Link to='inputcontrolado'><button>InputControlado</button></Link>
            <Link to='todolist'><button>ToDoList</button></Link> 
            <Link to='calculadora'><button>CALCULADORA</button></Link> 
        </>
    );
}

export default Home;