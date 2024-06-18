import { Container } from "./styles";

import reactIcon from "../../assets/react-icon.svg";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>H</span>
        <span>aripriya MP</span>
      </a>
      <div>
        <p>
          © Made with by <img src={reactIcon} alt="React" />
          Haripriya 
          <span>❤️</span>
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/haripriya-premkumar-3384791b8/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/priyakumar28"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </Container>
  );
}
