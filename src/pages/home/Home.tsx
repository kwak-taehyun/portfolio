import {HomeProvider} from './HomeContext';
import MainHeader from './MainHeader';
import MainContents from './MainContents';
import {isMobile} from 'react-device-detect';

const Home = () => {
  return (
    <div className={`main ${isMobile ? "mobile" : ""}`} id="main">
      <HomeProvider>
        <>
          <MainHeader />
          <div className="main_contents">
            <MainContents />
          </div>
        </>
      </HomeProvider>
      
      <footer className="main_footer">
        <span className="copyright">ⓒ Kwak's. All rights reserved.</span>
        {/*<span className="company_brief">
          <a download>COMPANY BRIEF</a>
        </span>*/}
      </footer>
    </div>
  );
};

export default Home;