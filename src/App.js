import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CaseStudies from './components/CaseStudies';
import CaseStudyDetail from './components/CaseStudyDetail';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
      <Header />

      <main>
      <Routes>
        <Route path="/" element={<CaseStudies />} />
        <Route path="/case-study/:slug" element={<CaseStudyDetail />} />
      </Routes>
      </main>

      <Footer />
      </div>
    </Router>
  );
}

export default App;
