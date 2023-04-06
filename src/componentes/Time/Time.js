import "./Time.css";
import Colaborador from "../Colaborador/Colaborador";

const Time = (props) => {
  return (
    props.colaboradores.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: props.corSecundaria }}
      >
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => (
            <Colaborador
              nome={colaborador.nome}
              corDeFundo={props.corPrimaria}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              key={colaborador.nome}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
