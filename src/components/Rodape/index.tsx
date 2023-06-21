//src/componentes/Rodape/index.js

import './Rodape.css';

interface RodapeProps {
  imagemFacebook: string;
  imagemTwitter: string;
  imagemInstagram: string;
  logo: string;
}

const Rodape = ({
  imagemFacebook,
  imagemTwitter,
  imagemInstagram,
  logo,
}: RodapeProps) => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src={imagemFacebook} alt="" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src={imagemTwitter} alt="" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src={imagemInstagram} alt="" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src={logo} alt="" />
      </section>
      <section>
        <p>Desenvolvido por Alura.</p>
      </section>
    </footer>
  );
};

export default Rodape;
