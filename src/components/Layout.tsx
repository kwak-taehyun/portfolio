import {Outlet} from 'react-router';
import {useLocation} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import DarkVeil from './effect/DarkVeil';

const Layout = () => {
  const location = useLocation();
  const pathname: string = location.pathname.substr(1);

  return (
    <div className={`${pathname === "intro" ? "sub_wrap no_bg" : "sub_wrap"}`}>
      {pathname === "intro" ? "" 
        :
        <div className="sub_visual" style={{width: '100%', height: '1200px', position: 'absolute',}}>
          <DarkVeil
            key={pathname}
            hueShift={0}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={1.0}
            scanlineFrequency={0}
            warpAmount={0}
          />
        </div>
      }
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;