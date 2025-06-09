import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Sandro Colombo</h2>
        <p>
          <a href="mailto:alexsandrocolombo@gmail.com">alexsandrocolombo@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Alex. I am a software engineer and entrepreneur
        based in Valencia, Spain. I specialize in building{' '}
        <strong>web applications</strong>,{' '}
        <strong>AI-powered products and services, and automate work flows.
        </strong>
        I have a strong background in <strong>JavaScript</strong>,{' '}
        <strong>React</strong>, and <strong>Node.js</strong>.
        I have a passion for creating tools that empower developers and
        companies, also I am the founder and CTO of <a href="https://codeinmersion.com">Code Inmersion</a>,
        platform to build innovative
        solutions for our clients and teach the next generation of developers
        with immersive courses.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Alex Sandro&apos;Colombo <Link to="/">alexsandrocolombo.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
