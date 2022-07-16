import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import JoannBui from "./JoannBui.png";
import profilephoto from "./profilephoto.JPG"
import { faGithub, faLinkedinIn, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'

import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <header>
          <Navbar className="header mr-auto" fixed="top" light expand="md">
            <NavbarBrand href="/">
              <img width="100" height="100" src={JoannBui} alt="page logo" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse
              isOpen={this.state.isOpen}
              className="justify-content-end"
              navbar
            >
              <Nav navbar>
                <NavItem className="nav-item">
                  <NavLink href="/About">01. About</NavLink>
                </NavItem>
                <NavItem className="mr-4">
                  <NavLink href="/">02. Experience</NavLink>
                </NavItem>
                <NavItem className="mr-4">
                  <NavLink href="/">03. Work</NavLink>
                </NavItem>
                <NavItem className="mr-4">
                  <NavLink href="/">04. Contact</NavLink>
                </NavItem>
                <NavItem className="button">
                  <Button outline>Resume</Button>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </header>
        <section className="intro">
          <div className="container">
            <div className="row">
              <div className="col-4 sm-4">
                <img src={profilephoto} alt="profile" width="90%" />
              </div>
              <div className="col-6">
                <div className="intro-text">
                  <p>Hi, my name is</p>
                  <h1>Joann Oanh Bui.</h1>
                  <h1>I love building things that people can see on the web.</h1>
                  <p>I'm a software engineer student specializing in font-end website development. I'm looking for opportunities to enhance my knowledge and contribute to more and more projects.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about-me">
          <div>
            <h1>01. About me</h1>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <p>Hi, my name is Joann Bui and I enjoy creating things that showed on the websites. I graduated bachelor and master degree in Korean Linguistics back in 2013 and 2017. But then the inspiration in building websites came to me when my husband, a senior fullstack software engineer, introduced me about HTML and CSS on his working screen. I have tried self-learning little by little until I decided to enroll in an online Front-end Web development Bootcamp in 2021.</p>
                <p>Here are few technologies I have been learning and working with recently:</p>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>Bootstrap</li>
                  <li>React</li>
                  <li>ES6</li>
                  <li>React Native</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div className="contact-bar">
          <ul>
            <li>
              <a href="https://github.com/oanhbui" target="_blank" title="Github"><FontAwesomeIcon icon={faGithub} /></a>
            </li>
            <li>
              <a href="https://github.com/oanhbui" target="_blank" title="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
            </li>
            <li>
              <a href="https://github.com/oanhbui" target="_blank" title="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </li>
            <li>
              <a href="https://github.com/oanhbui" target="_blank" title="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
            <li className="verticle-bar"></li>
          </ul>
        </div>
        <div className="contact-bar email-bar right">
          <a href="mailto:oanhbp3105@gmail.com">oanhbp3105@gmai.com</a>
          <div className="verticle-bar"></div>
        </div>
      </div>
    );
  }
}
