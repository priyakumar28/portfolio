import { Container } from "./styles";

import reactIcon from "../../assets/react-icon.svg";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";
import instagramIcon from "../../assets/instagram.png";


export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>G</span>
        <span>opinath.M</span>
      </a>
      <div>
        <p>
          © Made with  by <img src={reactIcon} alt="React" />
          Gopinath Manohar
          <span>❤️</span>
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/gopimano1996/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/GopinathMano"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        {/* <a
          href="https://www.instagram.com/_thani_oruvan/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a> */}

       
      </div>
    </Container>
  );
}
