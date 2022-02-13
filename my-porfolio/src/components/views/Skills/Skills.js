import React from 'react';
import './Skills.scss';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiOracle,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiGithub,
  SiAmazonaws,
} from 'react-icons/si';
import {FaSass, FaCertificate} from 'react-icons/fa';
import {GrMysql} from 'react-icons/gr';

function Skills() {
  return (
    <div className="skills" id="skills-scroll">
      <div className="title">Skills</div>
      <div className="skills-container">
        <div className="skills-subtitle first">Front-end</div>
        <ul className="skills-item front-end">
          <li>
            <SiHtml5 className="skills-icon html" />
            <div>HTML</div>
          </li>
          <li>
            <SiCss3 className="skills-icon css" />
            <div>CSS</div>
          </li>
          <li>
            <SiJavascript className="skills-icon js" />
            <div>JS</div>
          </li>
          <li>
            <SiTypescript className="skills-icon typescript" />
            <div>TypeScript</div>
          </li>
          <li>
            <FaSass className="skills-icon sass" />
            <div>Sass</div>
          </li>
          <li>
            <SiReact className="skills-icon react" />
            <div>React</div>
          </li>
          <li>
            <SiRedux className="skills-icon redux" />
            <div>Redux</div>
          </li>
        </ul>
        <div className="skills-subtitle">Back-end</div>
        <ul className="skills-item back-end">
          <li>
            <SiNodedotjs className="skills-icon nodejs" />
            <div>nodeJS</div>
          </li>
          <li>
            <SiMongodb className="skills-icon mongodb" />
            <div>mongoDB</div>
          </li>
          <li>
            <SiOracle className="skills-icon oracle" />
            <div>oracleDB</div>
          </li>
          <li>
            <GrMysql className="skills-icon mysql" />
            <div>MySQL</div>
          </li>
        </ul>
        <div className="skills-subtitle">Version Control</div>
        <ul className="skills-item vc">
          <li>
            <SiGit className="skills-icon git" />
            <div>git</div>
          </li>
          <li>
            <SiGithub className="skills-icon github" />
            <div>GitHub</div>
          </li>
        </ul>
        <div className="skills-subtitle">Deployment</div>
        <ul className="skills-item">
          <li>
            <SiAmazonaws className="skills-icon aws" />
            <div className="title-aws">AWS EC2</div>
          </li>
        </ul>
        <div className="skills-subtitle">Certificate</div>
        <ul className="skills-item">
          <li>
            <FaCertificate className="skills-icon certificate" />
            <div className="title-certificate">정보처리기사</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
