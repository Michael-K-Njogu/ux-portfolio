import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './pages/About'
import NotFound from './pages/NotFound'
import CaseStudies from './components/AllCaseStudies';
import CaseStudyDetail from './components/CaseStudyDetail';
import BackToTop from './components/ui/BackToTop';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<CaseStudies />} />
        <Route path="case-studies/:slug" element={<CaseStudyDetail />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;
