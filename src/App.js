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
    <div>
      <form action="">
        <label htmlFor="">Tarefa</label>
        <br />
        <input value={novaTarefa} type="text" onChange={(e) => setNovaTarefa(e.target.value)}/>
        <br />
        <input type="button" onClick={adicionarTarefa} value="Adicionar Tarefa" />
        <br />
        <input type="button" onClick={limparTarefa} value="Limpar Tarefa" />
      </form>
      <ul>
        {tarefas.map((umaTarefa,index)=>(
          <li key={index}>
            {umaTarefa}, {index+1}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
