import React from 'react';
import './About.scss';
import {SiGithub, SiNotion} from 'react-icons/si';

const About = () => {
  const onSiteGithub = () => {
    window.open('https://github.com/DIA-MIN');
  };

  const onSiteNotion = () => {
    window.open(
      'https://diamin.notion.site/Front-end-Roadmap-Plan-5ee3b09105e74a94b1a78b4871bde3c8'
    );
  };

  return (
    <div className="about" id="about-scroll">
      <div className="title">ABOUT ME</div>
      <ul className="myinfo">
        <li>
          <div>NAME</div>
          <div>박민석</div>
        </li>
        <li>
          <div>AGES</div>
          <div>27(1995.03.27)</div>
        </li>
        <li>
          <div>PHONE</div>
          <div>010-5294-2359</div>
        </li>
        <li>
          <div>ADDRESS</div>
          <div>서울특별시 동작구</div>
        </li>
        <li>
          <div>EMAIL</div>
          <div>dia_min@naver.com</div>
        </li>
        <li>
          <div>EDUCATION</div>
          <div>을지대학교(의료IT마케팅)</div>
        </li>
      </ul>
      <div className="mynote">
        <div className="github" onClick={onSiteGithub}>
          <div className="mynote-title">
            <SiGithub className="icon" />
            GitHub
          </div>
          <div className="mynote-subtitle">
            저의 <b>소스코드 저장소</b>입니다.
          </div>
        </div>
        <div className="notion" onClick={onSiteNotion}>
          <div className="mynote-title">
            <SiNotion className="icon" />
            Notion
          </div>
          <div className="mynote-subtitle">
            공부한 내용을 기록하기 위한 <b>노트</b>입니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
