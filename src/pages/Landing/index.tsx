import React from 'react';

import './styles.css'

import logoImg from '../../assets/images/camaleao-logo.png';

import { FiGithub, FiArrowRight, FiBookOpen } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
  return (
    <div id="container">
      <div id="main">
        <div id="transition">
          <header>
            <p>A soft skill mais importante?</p>
            <h1>Adaptabilidade e<br />suas vantagens</h1>
          </header>

          <div id="buttons">
            <a id="ted" href="https://www.youtube.com/watch?v=TfTl3HLedw0&ab_channel=TEDxTalks" target="_blank" rel="noreferrer">
              <p>TED Talks</p>
              <FiBookOpen size={30} />
            </a>

            <Link to="/content" id="leitura">
              <p>Leitura</p>
              <FiArrowRight size={35} />
            </Link>
          </div>
        </div>
      </div>

      <div id="background">
        <header>
          <a href="https://github.com/  EduardoBravoP" target="_blank"  rel="noreferrer">
            <p>GitHub</p>
            <FiGithub size={24} />
          </a>
        </header>
        <img src={logoImg} alt="logo"/>
      </div>
    </div>
  );
};

export default Landing;