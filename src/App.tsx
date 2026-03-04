import React, {Suspense} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Loading from './pages/Loading';

const Home = React.lazy(() => import("./pages/home/Home"));
const Cx = React.lazy(() => import("./pages/cx/Cx"));
const Platform = React.lazy(() => import("./pages/platform/Platform"));
const Market = React.lazy(() => import("./pages/marketing/Market"));
const Service = React.lazy(() => import("./pages/service/Service"));
const Company = React.lazy(() => import("./pages/company/Company"));
const People = React.lazy(() => import("./pages/people/People"));
const Times = React.lazy(() => import("./pages/times/Times"));
const TimesDetail = React.lazy(() => import("./pages/times/TimesDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Layout />}>
            <Route path="cx" element={<Cx />} />
            <Route path="platform" element={<Platform />} />
            <Route path="market" element={<Market />} />
            <Route path="service" element={<Service />} />
            <Route path="company" element={<Company />} />
            <Route path="people" element={<People />} />
            <Route path="times" element={<Times />} />
            <Route path="times/:id" element={<TimesDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
