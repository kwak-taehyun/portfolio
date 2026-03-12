import {Outlet} from 'react-router';
import {useLocation, useParams} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  const {id} = useParams<string>();
  const pathname: string = location.pathname.substr(1);

  return (
    <div className={`${pathname === "intro" ? "sub_wrap no_bg" : pathname === "skill" ? "sub_wrap bg_white" : "sub_wrap"}`}>
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;