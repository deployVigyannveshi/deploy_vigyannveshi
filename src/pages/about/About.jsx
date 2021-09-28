/*Important-react imports*/
import { Link } from "react-router-dom";

import "./about.css";
import main_img from "./images/main_img.png";

export default function About() {
  /*Java-script-to scroll function*/
  const scrollTo = (element) => {
    window.scroll({
      left: 0,
      top: element.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="main_img">
        <div className="topbottomBorder">
          <img src={main_img} alt="VigyannVeshi" id="main_img" />
        </div>
      </div>
      <div id="about">
        <div className="nav">
          <Link className="goto_link" to="/vidya">
            <li className="goto">Vidya</li>
          </Link>
          <li
            onClick={() => {
              scrollTo(document.querySelector("#contact"));
            }}
            className="goto"
          >
            Contact Me
          </li>
        </div>
        <p id="intro">
          Vigyan or Vishesh-Gyan of today, is the Science of tomorrow, and the
          technology to come. It is not limited to Physics, Chemistry,
          Mathematics or Biology as percieved by modern Science. It actually
          lies in all perspectives we percieve and act in our day to day life,
          from updating ourselves in this contemporary world, to polishing our
          pasts, till forseeing our future.
          <br />
          Vigyannveshi is an attempt to share experiences of an Electronics and
          Telecommunication Engineer and a passionate programmer to
          seek out science behind substances to get simplified solutions, which
          also includes the values learnt in life, memorable tales, few
          suggestions and some tips.
        </p>
      </div>
      
      <div id="contact">
        <h2>Contact Me:</h2>
        <p>
          Email:{" "}
          <a href="mailto:mailtovigyannveshi@gmail.com">
            mailtovigyannveshi@gmail.com
          </a>
        </p>
        <br />
      </div>
    </>
  );
}
