import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <div className="container-social-media">
        <img src="./imagens/fb.png" alt="Facebook" />
        <img src="./imagens/tw.png" alt="Twitter" />
        <img src="./imagens/ig.png" alt="Instagram" />
      </div>
      <div className="container-logo">
        <img src="./imagens/logo.png" alt="Logo Organo" />
      </div>
      <div className="container-sobre">
        <p>Desenvolvido por Mauricio Filho</p>
      </div>
    </footer>
  );
};

export default Rodape;
