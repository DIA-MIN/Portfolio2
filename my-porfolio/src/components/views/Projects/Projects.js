import React from 'react';
import './Projects.scss';

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="title">Projects</div>
      <div className="projects-container">
        <div className="projects-title">WATCHED</div>
        <div className="projects-subtitle">
          2021.11.01 - 2021.11.30 (개인 프로젝트)
        </div>
        <div className="projects-item">
          <video controls autoPlay muted loop>
            <source src="/img/watched.mp4" type="video/mp4"></source>
          </video>
          <div className="proejct-explain">
            다양한 <span>최신 영화들의 정보를 확인</span>하고,{' '}
            <span>나만의 영화 리스트</span>를 만들 수 있으며,{' '}
            <span>감상평을 작성</span>할 수 있는 웹사이트 입니다.
            <br />
            <br />
            왓챠, 네이버 영화 등 다양한 영화 평가 사이트는 존재하지만, 조작된
            감상평이 생각보다 많이 존재하였고, 영화 관람 전 정확한 감상평을 볼
            수 있는 사이트가 있으면 좋겠다고 생각하여 본 프로젝트를 진행하게
            되었습니다.
            <br />
            <br />
            {/* 백 엔드와 프론트 엔드 양쪽 모두를 개발하면서, CORS 이슈나
            상태관리의 중요성 등을 배울 수 있었으며, */}
            <span>백 엔드</span>를 개발하면서 프론트 엔드와의 CORS 이슈나 암호화
            그리고 Authentication의 중요성을 알게되었습니다.
            <br />
            <br />
            React로 <span>프론트 엔드</span>를 개발하고 디자인 하면서 UI/UX에
            대해서 많이 고민해볼 수 있었으며, 상태관리의 중요성을
            알게되었습니다.
            <div className="project-nav">
              <ul>
                <li>
                  <div>주요 기능</div>
                  <div>관심 목록에 영화 추가, 감상평 작성 및 추천</div>
                </li>
                <li>
                  <div>Front-end</div>
                  <div>React, Sass</div>
                </li>
                <li>
                  <div>Back-end</div>
                  <div>Express, MongoDB</div>
                </li>
                <li>
                  <div>Deployment</div>
                  <div>GitHub, AWS(EC2, Route 53)</div>
                </li>
              </ul>
              <button
                onClick={() =>
                  window.open('https://github.com/DIA-MIN/WATCHED')
                }
              >
                GitHub
              </button>
              <button
                onClick={() => window.open('http://watched.devdiamin.com/')}
              >
                사이트 보러 가기
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="projects-container">
        <div className="projects-title">PORTFOLIO</div>
        <div className="projects-subtitle">
          2021.12.02 - 2021.12.08 (개인 프로젝트)
        </div>
        <div className="projects-item">
          <video autoPlay muted loop>
            <source src="/img/portfolio.mp4" type="video/mp4"></source>
          </video>
          <div className="proejct-explain">
            나는 어떤 개발자인지 소개하고 진행한 프로젝트를 지속적으로 업데이트
            하기 위한 <span>포트폴리오 웹사이트</span>입니다.
            <br />
            <br />
            처음에는 순수하게 html, css로만 개발하였으나, React를 공부하고 난 후
            React 기반으로 다시 개발하고 배포하였습니다.
            <div className="project-nav">
              <ul>
                <li>
                  <div>주요 기능</div>
                  <div>
                    자기 소개 및 인적 사항, 나의 GitHub & Notion 사이트 소개,
                    보유 기술, 진행한 프로젝트
                  </div>
                </li>
                <li>
                  <div>Front-end</div>
                  <div>React, Sass</div>
                </li>
                <li>
                  <div>Deployment</div>
                  <div>GitHub, AWS(EC2, Route 53)</div>
                </li>
              </ul>
              <button
                onClick={() =>
                  window.open('https://github.com/DIA-MIN/Portfolio2')
                }
              >
                GitHub
              </button>
              <button onClick={() => window.open('http://devdiamin.com/')}>
                사이트 보러 가기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
