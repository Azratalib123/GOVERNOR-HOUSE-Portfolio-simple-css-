import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { CiHeart } from "react-icons/ci";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
export default function Contact() {
  return (
    <header>
        
  <section className="location">
  <a href="http://localhost:3000/" className="back"><FaArrowLeft /></a>
         <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115828.85264862029!2d67.26225500921635!3d24.875744623486725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3317d179c7ea5%3A0xe7de0f37cad8a69b!2sShah%20Latif%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1711885551565!5m2!1sen!2s"
           width="600"
           height="450"
         ></iframe>
       </section>
  <section className="contact-us">
      <div className="row">
        <div className="contact-col">
          <div>
            <span>
              <h5><FaPhoneAlt /> +1233456789</h5>
              <p>MONDAY TO SATURDAY,10AM to 9PM</p>
            </span>
          </div>
          <div>
            <span>
              <h5><FaHome /> XYZRoad, ABC Building</h5>
              <p>KARACHI, SHAH LATIF ,IN</p>
            </span>
          </div>
          <div>
            <span>
              <h5><MdEmail /> 1234676@gmail.com</h5>
              <p>EMAIL US YOUR QUERYE</p>
            </span>
          </div>
        </div>
        <div className="contact-col">
          <input type="text" placeholder="Enter your name" required />
          <input type="email" placeholder="Enter email adress" required />
          <input type="text" placeholder="Enter your subject" required />
          <textarea placeholder="message" required></textarea>
          <button type="submit" className="btn reb-btn">Send Message</button>
        </div>
      </div>
    </section>
     
       <section className="cta">
            <h1 className="one">Enroll for our various Online Courses <br/> Anywhere from the world</h1>
            <a href="" className="btn">CONTACT US</a>
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
  )}