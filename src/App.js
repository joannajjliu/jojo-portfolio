import React from "react";
import "./App.css";

import AnchorLink from "react-anchor-link-smooth-scroll"; //adds smooth scrolling in react

import { Experiences, Contact, Projects } from "./components";

function SinglePageNav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <AnchorLink
        className="navbar-brand"
        href="#home"
        data-toggle="collapse"
        data-target=".navbar-collapse.show"
      >
        Jojo
      </AnchorLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <AnchorLink
            className="nav-item nav-link"
            href="#home"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            About
          </AnchorLink>
          <AnchorLink
            className="nav-item nav-link"
            href="#projects"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            Projects
          </AnchorLink>
          <AnchorLink
            className="nav-item nav-link"
            href="#experience"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            Experience
          </AnchorLink>
          <AnchorLink
            className="nav-item nav-link"
            href="#contact"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            Contact
          </AnchorLink>
        </div>
      </div>
    </nav>
  );
}

function SinglePageHome() {
  return (
    <section id="home" className="mt-5 home-section">
      <img
        className="profile-pic"
        alt="profile"
        src={process.env.PUBLIC_URL + "/website_profilePic.png"}
      />
      <h1>Hi, I'm Jojo</h1>
      <p>
        I'm a full-stack web developer,
        <br />
        and part-time visual artist
      </p>
    </section>
  );
}

function Footer() {
  return (
    <div className="text-center">
      <p>
        <a
          href="https://github.com/joannajjliu"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa fa-github footer-logo" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/jjjliu/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i
            className="fa fa-linkedin-square footer-logo"
            aria-hidden="true"
          ></i>
        </a>
        <a
          href="https://twitter.com/Mojojoliu"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa fa-twitter footer-logo" aria-hidden="true"></i>
        </a>
        <a
          href="mailto:joanna_liu@live.ca"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa fa-envelope footer-logo" aria-hidden="true"></i>
        </a>
      </p>
      <h4>&copy; 2020 Jojo</h4>
    </div>
  );
}

function App() {
  return (
    <div>
      <div className="container">
        <SinglePageNav />
        <SinglePageHome />
        <Projects />
        <Experiences />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
