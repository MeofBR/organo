import "./Time.css";
import Colaborador from "../Colaborador/Colaborador";
import hexToRgba from "hex-to-rgba";

const Time = (props) => {
  return (
    props.colaboradores.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: hexToRgba(props.cor, 0.6) }}
      >
        <input
          value={props.cor}
          type="color"
          className="input-cor"
          onChange={(event) => props.mudarCor(event.target.value, props.id)}
        />
        <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => {
            return (
              <Colaborador
                nome={colaborador.nome}
                corDeFundo={props.cor}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                key={colaborador.nome}
                aoDeletar={props.aoDeletar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
