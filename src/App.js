
/*import "./App.css"
import Estado from "./componentes/estado";

const App = () => {
  return(
    <div className="App">
      <Estado />
    </div>
  );
}

export default App;*/

/*import "./App.css"
import Propriedades from "./propriedades";

const App = ({name, idade}) => {
  let nome = "joao"

  return(
    <div className="App">
      < Propriedades name={nome} idade = {31}/>
    </div>
  );
}

export default App;*/

import "./App.css"
//import Contador from "./componentes/contador";
//import Cadastro from "./componentes/cadastro";
//import Listas from "./componentes/Frutas";
import ToDoList from "./componentes/ToDoList/ToDoList";
const App = () => {

  return(
    <div className="App">
      < ToDoList/>
      
    </div>
  );
}

export default App;

