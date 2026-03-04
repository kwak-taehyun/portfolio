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
          <div className={`${isOpenGnb ? "wylie_logo open" : "wylie_logo"}`}>
            <h1 className="logo">
              <a onClick={() => {
                navigate('/');
              }}><img src={`${isOpenGnb || stickyHeader ? "/images/common/wylie_logo.png" : pathname === "times" || pathname === "times/" + id ? "/images/common/wylie_logo_purple.png" : "/images/common/wylie_logo.png"}`} alt="Wylie logo" /></a>
            </h1>
          </div>

          {pathname === "company" || pathname === "times" || pathname === "times/" + id || pathname === "people" ? "" :
            <div className="header_nav">
              <ul className="nav_list">
                <li><NavLink to="cx">cx</NavLink></li>
                <li><NavLink to="platform">platform</NavLink></li>
                <li><NavLink to="market">market</NavLink></li>
                <li><NavLink to="service">service</NavLink></li>
              </ul>
            </div>
          }
        </div>

        <div className="header_util">
          {pathname === "company" || pathname === "times" || pathname === "times/" + id || pathname === "people" ? "" : <a onClick={() => navigate('/company')} className="inquiry">Company</a>}
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