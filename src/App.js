import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './pages/About'
import NotFound from './pages/NotFound'
import CaseStudies from './components/caseStudies';
import CaseStudyDetail from './components/CaseStudyDetail';

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
      <Footer />
    </div>
  );
}

export default App;
