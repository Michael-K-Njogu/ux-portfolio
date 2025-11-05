import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import BackToTop from './components/ui/BackToTop';

const App = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* ← this is where nested routes will render */}
      <BackToTop />
      <Footer />
    </>
  );
};

export default App;
