import React, {forwardRef} from 'react';
import './Home.scss';

const Home = forwardRef((props, ref) => {
  return (
    <div className="home" ref={ref}>
      <div className="moto">"SLOWLY, STEADILY, BUT ALL THE WAY!"</div>
      <div className="intro">
        <div className="profile">
          <img src="img/profileImg.jpg" alt="profileImg" />
        </div>
        <div className="explain">
          안녕하세요.
          <br />
          프론트 엔드 개발자 박민석 입니다.
          <br />
          천천히, 꾸준히 성장하는 개발자가 되겠습니다.
        </div>
      </div>
    </div>
  );
});

export default Home;
