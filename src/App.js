import React, { useState } from "react";
import "./App.css";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "", // Replace with your Service ID
        "", // Replace with your Template ID
        formData,
        "" // Replace with your Public Key
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setFormStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("Failed to send email:", error);
          setFormStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">My Portfolio</div>
        <div className="nav-links">
          <a href="#coming-soon">Coming Soon</a>
          <a href="#about-us">About Us</a>
          <a href="#team">Team</a>
          <a href="#contact-us">Contact Us</a>
          <a href="#map">Map</a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`nav-links-mobile ${menuOpen ? "show" : ""}`}>
          <a href="#coming-soon" onClick={toggleMenu}>Coming Soon</a>
          <a href="#about-us" onClick={toggleMenu}>About Us</a>
          <a href="#team" onClick={toggleMenu}>Team</a>
          <a href="#contact-us" onClick={toggleMenu}>Contact Us</a>
          <a href="#map" onClick={toggleMenu}>Map</a>
        </div>
      </nav>

      {/* Coming Soon Section */}
      <section id="coming-soon" className="coming-soon section">
        <h1>Coming Soon</h1>
        <p>We are working hard to launch our website!</p>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="about-us section">
        <div className="about-left">
          <img src={`${process.env.PUBLIC_URL}/about.jpg`} alt="About Us" />
        </div>
        <div className="about-right">
          <h2>About Us</h2>
          <p>
            Revolnet is a forward-thinking, technology-driven company committed to shaping the future of connectivity and collaboration.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team section">
        <h2>Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img src={`${process.env.PUBLIC_URL}/siddiram.jpeg`} alt="Team Member 1" />
            <h3>Siddaram Patil</h3>
            <div className="social-icons">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.linkedin.com/in/siddaram-patil-3011672b/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          </div>
          {/* Add more team members as needed */}
          <div className="team-member">
            <img src={`${process.env.PUBLIC_URL}/`} alt="Team Member 1" />
            <h3>Prashant Kumar K R</h3>
            <div className="social-icons">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.linkedin.com/in/prashanth-kumar-k-r-49830240/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us" className="contact-us section">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        <p>{formStatus}</p>
      </section>

      {/* Google Map Section */}
      <section id="map" className="map section">
        <h2>Find Us Here</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4528.916957130217!2d77.63282353849984!3d12.978523731228902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xae10488b9a2465bf%3A0x459441f33b915224!2sAspire%20Coworks!5e0!3m2!1sen!2sin!4v1734021676436!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 Revolnet. All rights reserved. </p>
          <p>Revolnet pvt. ltd 17, 7th Main Rd, Indira Nagar II Stage, II stage, Indiranagar, Bengaluru, Karnataka 560038</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
