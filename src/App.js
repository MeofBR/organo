import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario/Formulario";
import Time from "./componentes/Time/Time";
import Rodape from "./componentes/Rodape/Rodape";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    {
      nome: "Programação",
      cor: "#57c278",
      id: uuidv4(),
    },
    {
      nome: "Front End",
      cor: "#82cffa",
      id: uuidv4(),
    },
    {
      nome: "Data Science",
      cor: "#a6d157",
      id: uuidv4(),
    },
    {
      nome: "Dev Ops",
      cor: "#e06b69",
      id: uuidv4(),
    },
    {
      nome: "UX/Design",
      cor: "#db6ebf",
      id: uuidv4(),
    },
    {
      nome: "Mobile",
      cor: "#ffba05",
      id: uuidv4(),
    },
    {
      nome: "Inovação e Gestão",
      cor: "#ff8a29",
      id: uuidv4(),
    },
  ]);
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  function deletarColaborador(id) {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  }

  function mudarCorTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {times.map((time) => (
        <Time
          nome={time.nome}
          mudarCor={mudarCorTime}
          key={time.nome}
          cor={time.cor}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
          aoDeletar={deletarColaborador}
          
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
