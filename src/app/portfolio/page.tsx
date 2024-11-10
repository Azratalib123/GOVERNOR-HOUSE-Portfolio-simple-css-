import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { CiHeart } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
export default function Portfolio() {
  return (
    <header>
      
      <section className="portofilo">
      <a href="http://localhost:3000/" className="back"><FaArrowLeft /></a>
      
        <div className="hero-content">
          <h1 className="about">PORTFOILO PAGE</h1>
          <h2 className="title2">WEB DEVELOPER</h2>
          <p className="description2">
            Welcome to my portfolio, where I showcase my skills in HTML, CSS,
            JavaScript, TypeScript, and Next.js. Explore my projects to see how
            I create responsive, dynamic, and user-friendly web applications.
          </p>
        </div>
      </section>
      <section className="blog-content">
        <div className="row">
          <div className="blog-left">
            <img
              src="https://www.creativefabrica.com/wp-content/uploads/2023/06/19/Architecture-portfolio-template-design-Graphics-72456863-1.jpg"
              alt=""
            />
            <h2> Welcome to My Portfolio</h2>
            <p>
              I’m Azra, a passionate web developer specializing in HTML, CSS,
              JavaScript, TypeScript, and Next.js. This portfolio showcases the
              best of my work, where I combine creativity and technical skills
              to build modern, responsive web applications. With each project,
              my goal is to provide clean, efficient, and user-friendly
              solutions that cater to the unique needs of clients and users.
            </p>
            <br />
            <p>
              My Expertise I am skilled in: HTML & CSS: Crafting
              well-structured, visually appealing, and responsive layouts.
              JavaScript & TypeScript: Adding interactivity and dynamic
              functionality to websites. Next.js: Building fast, SEO-friendly,
              and scalable web applications with modern frameworks.
            </p>
            <br />
            <p>
              Projects & Experience Throughout my journey, I’ve worked on a
              range of projects—from personal ventures to client-based work—each
              with a focus on innovation and quality. My experience spans
              building websites, creating user interfaces, and enhancing web
              performance, always with a focus on best practices and continuous
              learning. Explore my portfolio to see the projects that showcase
              my skills and dedication to web development.
            </p>
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
