import React, {Suspense} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Loading from './pages/Loading';

const Home = React.lazy(() => import("./pages/home/Home"));
const Work = React.lazy(() => import("./pages/worklist/Work"));
const Intro = React.lazy(() => import("./pages/intro/Intro"));
const Career = React.lazy(() => import("./pages/career/Career"));
const Skill = React.lazy(() => import("./pages/skill/Skill"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Layout />}>
            <Route path="work" element={<Work />} />
            <Route path="intro" element={<Intro />} />
            <Route path="career" element={<Career />} />
            <Route path="skill" element={<Skill />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
