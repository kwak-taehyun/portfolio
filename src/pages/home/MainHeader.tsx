import {useContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import GnbMenu from '../../components/GnbMenu';
import HomeContext from './HomeContext';

const MainHeader = () => {
  const value = useContext(HomeContext);
  const navigate = useNavigate();

  useEffect(() => {
    value?.change.onChangeMode(true);
  }, []);

  return (
    <header className="header">
      <div className={`${value?.state.isHomeValid ? "inner home" : "inner slick"}`}>
        <div className={`${value?.state.isOpenGnb ? "wylie_logo open" : "wylie_logo"}`}>
          <h1 className="logo">
            <a onClick={() => {
              navigate('/');
            }}><img src="/images/common/wylie_logo.png" alt="Wylie logo" /></a>
          </h1>
          <div className="logo_text">
            <span>Total</span>
            <span>Communication</span>
            <span>Group</span>
          </div>
        </div>

        <div className="header_util">
          <a href="mailto:wylie@wylie.co.kr" className="inquiry">프로젝트 문의</a>
          <div className={`${value?.state.isOpenGnb ? "gnb_area open" : "gnb_area"}`}>
            <div className="gnb_box">
              <a className="btn_gnb" onClick={value?.change.gnbClick}><span className="blind">전체메뉴</span></a>
            </div>
            {value?.state.isOpenGnb ? <GnbMenu /> : ''}
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;