import { Container } from "./styles";

import profileImage from "../../assets/man.png";
import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import bootStrao from "../../assets/bootstrap-icon.svg";
import vsCode from "../../assets/vscode-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import gitHub from "../../assets/github-icon.svg";
import mongo from "../../assets/icons8-mongodb.svg";

export function About() {
  return (
    <Container id="sobre">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>
            I'm a passionate Full stack developer with the goal of working on a
            project that solves problems with thoughtful UI design, creating
            intuitive, dynamic user experiences powered by strong backend. I
            primarily work with MERN stack among the full stack technologies.
            The satisfaction that I get while working and completing every
            project made me do more and more. And I believe, I have did
            something creatively.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.4 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            I develop websites and applications using HTML, CSS, and JavaScript.
            I am familiar with developing layouts that provide me. I'm always
            improving myself with each project they put in my hands.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
          <p>
            I am a dedicated person who pursues his dreams, hardworking and
            results oriented, I always seek to achieve my best version.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={vsCode} alt="Vue" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
              <img src={bootStrao} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
              <img src={gitHub} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
              <img src={mongo} alt="Node" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={profileImage} alt="profile pic" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
