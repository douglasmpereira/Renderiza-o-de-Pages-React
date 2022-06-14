import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Login from './pages/Login';
import Cadastro from './componentes/cadastro';
import Contador from './componentes/contador';
import Listas from './componentes/Frutas';
import InputControlado from './componentes/inputcontrolado';
import ToDoList from './componentes/ToDoList/ToDoList';
import Calculadora from './componentes/calculadora';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Exercicos de React</h1>
    <BrowserRouter>
      <Routes>
       <Route path='/' element = {<Home/>}/>
       <Route path='/contato' element = {<Contato/>}/>
       <Route path='/login' element = {<Login/>}/>
       <Route path='*' element={<Navigate to='/'/>}/>

       <Route path='/cadastro' element = {<Cadastro/>}/>
       <Route path='/contador' element = {<Contador/>}/>
       <Route path='/listas' element = {<Listas/>}/>
       <Route path='/inputcontrolado' element = {<InputControlado/>}/>
       <Route path='/todolist' element = {<ToDoList/>}/>
       <Route path='/calculadora' element = {<Calculadora/>}/>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

//<App />
