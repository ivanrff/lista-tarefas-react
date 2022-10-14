import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

function App() {

  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = () => {
    if (!novaTarefa) {
      alert("Tarefa vazia. Preencha novamente");
      return;
    };
    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa("")
  };

  const limparTarefa = () => {
    setTarefas([]);
  };

  // useEffect(() => {
  //   console.log(tarefas);
  // },[tarefas]);

  // const exibir = (e) => {
  //   setTarefas(e.target.value);
  //   console.log(tarefas);
  // }


  return (
    <div id="container">

      <div className='header'>
        <h2>Gerenciador de Tarefas</h2>
      </div>
      <div className='container'>
        <div className="row">
          <div className="col">
            <form action="">
              <input className='input' value={novaTarefa} type="text" placeholder='Nova Tarefa' onChange={(e) => setNovaTarefa(e.target.value)}/>
              <br />
              <input className='btn' type="button" onClick={adicionarTarefa} value="Adicionar Tarefa" />
              <br />
              <input className='btn' type="button" onClick={limparTarefa} value="Limpar Tarefas" />
            </form>
          </div>
          <div className='col'>
            <img id="notepad" src="https://img.freepik.com/premium-vector/simple-diary-spring-memo-with-index-illustration-set-can-be-used-as-note-pad-is-linestyle_632180-299.jpg" alt="something"></img>
            <ul id="lista-de-tarefas">
              {tarefas.map((umaTarefa,index)=>(
                <li key={index}>
                  {umaTarefa}, {index+1}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
      <div className="footer"></div>

    </div>
  );
}

export default App;
