import "./CampoTexto.css";

const CampoTexto = (props) => {
  const aoDigitado = (event) => {
    props.aoAlterado(event.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={props.placeholder}
        value={props.valor}
      />
    </div>
  );
};

export default CampoTexto;
