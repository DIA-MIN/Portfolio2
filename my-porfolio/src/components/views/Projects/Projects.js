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
                  <div>React, Redux, Sass</div>
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
                onClick={() =>
                  window.open('https://www.watched.devdiamin.com/')
                }
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
          <video controls autoPlay muted loop>
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
              <button onClick={() => window.open('https://www.devdiamin.com/')}>
                사이트 보러 가기
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="projects-container">
        <div className="projects-title">IWANNA</div>
        <div className="projects-subtitle">
          2022.07.06 - 2022.08.02 (개인 프로젝트)
        </div>
        <div className="projects-item">
          <video controls autoPlay muted loop>
            <source src="/img/iwanna.mp4" type="video/mp4"></source>
          </video>
          <div className="proejct-explain">
            다양한 카테고리의<span>최신 뉴스의 정보를 확인</span>하고, 원하는
            뉴스를<span>검색</span>할 수 있으며, 관심 뉴스는 <span>스크랩</span>
            하여 관리할 수 있는 웹사이트 입니다.
            <br />
            <br />
            수 많은 방송/통신사 중 하나를 선택하는 과정 부터 원하는 카테고리의
            뉴스를 접하기까지의 프로세스가 너무 복잡하다 생각했습니다. 그래서
            뉴스를 쉽게 접하고 카테고리별 원하는 뉴스를 보며, 스크랩까지 가능한
            웹사이트가 있으면 자주 사용할 거 같아 본 프로젝트를 진행하게
            되었습니다.
            <br />
            <br />
            <span>TypeScript</span>를 프로젝트에 적용함으로써 Data Type의
            중요성을 알게되었습니다.
            <br />
            <br />
            React에서 제공 하는 <span>React.StrictMode</span>의 역할뿐 아니라
            React에 대해서 더 공부할 수 있었던 계기가 되었습니다.
            <br />
            <br />
            Open API를 활용할 때 로컬 환경에서만 데이터가 제공되는 문제를
            해결하는 과정에서 API Document를 잘 숙지하고 활용하는 역량을
            길렀습니다.
            <div className="project-nav">
              <ul>
                <li>
                  <div>주요 기능</div>
                  <div>카테고리별 뉴스 확인, 뉴스 검색, 관심 뉴스 스크랩</div>
                </li>
                <li>
                  <div>Front-end</div>
                  <div>React, TypeScript, Redux, Sass</div>
                </li>
                <li>
                  <div>Deployment</div>
                  <div>GitHub</div>
                </li>
              </ul>
              <button
                onClick={() => window.open('https://github.com/DIA-MIN/IWANNA')}
              >
                GitHub
              </button>
              <button
                onClick={() => window.open('https://dia-min.github.io/IWANNA/')}
              >
                사이트 보러 가기
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="projects-container">
        <div className="projects-title">COOBOOK</div>
        <div className="projects-subtitle">
          2022.10.14 - 2022.10.26 (개인 프로젝트)
        </div>
        <div className="projects-item">
          <video controls autoPlay muted loop>
            <source src="/img/coobook.mp4" type="video/mp4"></source>
          </video>
          <div className="proejct-explain">
            <span>조리 방법</span>또는 <span>요리 종류</span>에 따라 다양한
            레시피를 둘러볼 수 있으며, 원하는 요리의 <span>레시피를 검색</span>
            할 수 있습니다. 관심있는 레시피는 <span>스크랩</span>하여 관리할 수
            있는 웹사이트 입니다.
            <br />
            <br />
            YouTube의 수많은 요리 채널과 웹상의 다양한 블로그가 존재하지만,
            일일이 관련 영상을 찾아 돌려보거나 봤던 블로그를 다시 찾아야 하는
            불편함이 존재했습니다. 그래서 다양한 요리 레시피를 둘러 보거나
            검색을 통해 원하는 레시피는 즐겨 찾기 할 수 있는 웹사이트를 만들어
            자취하는 지인들에게 제공하면 좋겠다고 생각하여 본 프로젝트를
            진행하게 되었습니다.
            <br />
            <br />
            <span>React</span> 라이브러리와 <span>Vue</span> 프레임워크의
            차이점을 비교해가며, 진행한 프로젝트로 각 프론트 엔드 라이브러리
            또는 프레임워크의 장/단점을 알 수있는 계기가 되었습니다.
            <br />
            <br />
            Vue 사용자 정의 지시자를 활용하여 <span>lazy loading</span>을
            구현하여 이미지 로딩 시 속도 및 성능을 개선했습니다.
            <div className="project-nav">
              <ul>
                <li>
                  <div>주요 기능</div>
                  <div>다양한 레시피 확인, 레시피 검색, 관심 레시피 스크랩</div>
                </li>
                <li>
                  <div>Front-end</div>
                  <div>Vue, Vuex, Sass</div>
                </li>
                <li>
                  <div>Deployment</div>
                  <div>GitHub</div>
                </li>
              </ul>
              <button
                onClick={() =>
                  window.open('https://github.com/DIA-MIN/COOBOOK')
                }
              >
                GitHub
              </button>
              <button
                onClick={() =>
                  window.open('https://dia-min.github.io/COOBOOK/')
                }
              >
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
