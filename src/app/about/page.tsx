import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { CiHeart } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
export default function About() {
  return (
    <header>
      <section className="course">
      <a href="http://localhost:3000/" className="back"><FaArrowLeft /></a>
        <div className="hero-content">
          <h1 className="about">ABOUT PAGE</h1>
          <h2 className="title2">WEB DEVELOPER</h2>
          <p className="description2">
            Welcome! 
            I’m a skilled web developer with expertise in HTML, CSS, JavaScript, TypeScript, and Next.js, creating responsive and user-friendly applications.
          </p>
          <a className="see-work" href="/portfolio">PORTFOLIO</a>
        </div>
      </section>

      <section className="aboutpage">
        <h1>ABOUT PAGE</h1>
        <p>
        I am a dedicated web developer skilled in HTML, CSS,
            JavaScript, TypeScript, and Next.js. <br />  My expertise lies in crafting
            responsive, user-friendly websites and applications that combine
            clean design<br />  with efficient functionality. Whether working on
            front-end layouts or building interactive features, I focus<br />  on
            delivering seamless user experiences that align with modern web
            standards. I am passionate about coding <br /> and committed to continuous
            learning to stay at the forefront of web development.
        </p>
        <div className="row">
          <div className="column">
            <h3>ABOUT ME </h3>
            <p>
            I'm Azra, a passionate web developer dedicated to building responsive and efficient applications.
            </p>
          </div>
          <div className="column">
            <h3>EDUCATION</h3>
            <p>
            Currently in my first year of graduation, I’m focused on enhancing my skills and deepening my knowledge in tech.
            </p>
          </div>
          <div className="column">
            <h3>COURSES</h3>
            <p>
            I'm pursuing specialized courses in Web Development and Artificial Intelligence at Saylani and the Governor House to stay ahead in the field and bring innovative solutions to my projects.

            </p>
          </div>
        </div>
      </section>

      <section className="clients">
        <p className="client-text">I AM PROFICIENT IN </p>
        <div className="client-logos">
          <div className="logo-item">HTML</div>
          <div className="logo-item">CSS</div>
          <div className="logo-item">JAVASCRIPT</div>
          <div className="logo-item">TYPSCRIPT</div>
          <div className="logo-item">NEXTJS</div>
        </div>
      </section>

      <section className="skills">
        <div className="skill-item">
          <div className="skill-info">
            <span>HTML</span>
            <span>98%</span>
          </div>
          <div className="skill-bar">
            <div
              className="skill-progress"
              style={{ width: "98%", backgroundColor: "#ff4500" }}
            ></div>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-info">
            <span>CSS</span>
            <span>92%</span>
          </div>
          <div className="skill-bar">
            <div
              className="skill-progress"
              style={{ width: "92%", backgroundColor: "#0000ff" }}
            ></div>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-info">
            <span>JAVASCRIPT</span>
            <span>88%</span>
          </div>
          <div className="skill-bar">
            <div
              className="skill-progress"
              style={{ width: "88%", backgroundColor: "#efcc00" }}
            ></div>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-info">
            <span>TYPSCRIPT</span>
            <span>75%</span>
          </div>
          <div className="skill-bar">
            <div
              className="skill-progress"
              style={{ width: "80%", backgroundColor: "#a36dff" }}
            ></div>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-info">
            <span>NEXTJS</span>
            <span>60%</span>
          </div>
          <div className="skill-bar">
            <div
              className="skill-progress"
              style={{ width: "75%", backgroundColor: "#000000" }}
            ></div>
          </div>
        </div>
      </section>
      <section className="cta">
            <h1 className="one">Enroll for our various Online Courses <br/> Anywhere from the world</h1>
            <a href="/contact" className="btn">CONTACT US</a>
            </section>
      <section className="footer">
            <h4>ABOUT US</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum possimus eum eius. Accusamus possimus cupiditate aperiam itaque molestiae nulla, 
              error <br/> eaque adipisci aliquam voluptate omnis maxime fuga repellat id sed, consectetur</p>
       <div className="icons">
       <span><FaLinkedinIn /></span>
        <span><GrYoutube /></span>
        <span><FaTwitter /></span>
        <span><FaFacebook /></span>
            </div>
            <p>I MADE <span><CiHeart /></span> IT</p>
        </section>
    </header>
  );
}
