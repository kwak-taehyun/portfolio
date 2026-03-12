import {useState, useEffect, useMemo} from 'react';
import {NavLink, useNavigate, useLocation, useParams} from 'react-router-dom';
import {throttle} from 'lodash';
import GnbMenu from './GnbMenu';

const Header = () => {
  const [isOpenGnb, setIsOpenGnb] = useState<boolean>(false);
  const [stickyHeader, setStickyHeader] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const pathname: string = location.pathname.substr(1);
  const {id} = useParams<string>();

  const setPointHeader = useMemo(() => throttle(() => {
    if(window.scrollY > 10){
      setStickyHeader(true);
    }else{
      setStickyHeader(false);
    }
  }, 300), [stickyHeader]);

  useEffect(() => {
    setIsOpenGnb(false);
  }, [location]);

  useEffect (() => {
    window.addEventListener('scroll', setPointHeader);

    return () => {
      window.removeEventListener('scroll', setPointHeader);
    };
  }, [stickyHeader]);

  return (
    <header className={`${stickyHeader ? "header sticky" : "header"}`}>
      <div className="inner">
        <div className="header_cont">
          <div className={`${isOpenGnb ? "header_logo open" : "header_logo"}`}>
            <h1 className="logo">
              <a onClick={() => {
                navigate('/');
              }}>
                <span className={`text ${isOpenGnb || stickyHeader ? "light" : pathname === "times" || pathname === "times/" + id ? "dark" : "light"}`}>Publisher. <strong>Kwak T.H.</strong></span>
              </a>
            </h1>
          </div>

          {pathname === "company" || pathname === "times" || pathname === "times/" + id || pathname === "people" ? "" :
            <div className="header_nav">
              <ul className="nav_list">
                <li><NavLink to="intro">intro</NavLink></li>
                <li><NavLink to="work">work</NavLink></li>
                <li><NavLink to="career">career</NavLink></li>
                <li><NavLink to="skill">skill</NavLink></li>
              </ul>
            </div>
          }
        </div>

        <div className="header_util">
          <div className={`${isOpenGnb ? "gnb_area open" : "gnb_area"}`}>
            <div className="gnb_box">
              <a className="btn_gnb" onClick={() => {setIsOpenGnb(!isOpenGnb)}}><span className="blind">전체메뉴</span></a>
            </div>
            {isOpenGnb ? <GnbMenu /> : ''}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;