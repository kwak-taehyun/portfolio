import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

// SPA 페이지에서 페이지 이동시 scroll위치를 탑으로 이동시킴(pathname 변경시)
export default function ScrollToTop() {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};