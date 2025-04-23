import { Routes, Route, useLocation } from 'react-router';
import CottonLanding from './components/cotton-landing';
import FAQ from './components/faq';
import Header from './components/header';
import Hero from './components/hero';
import ImageGallery from './components/image-gallery';
import TeamBuildingPage from './components/team-building-page';
import WhyChooseCotton from './components/why-choose-cotton';
import { WorkforceBanner } from './components/workforce-banner';
import IndividualsPage from './pages/individual/main';
import MainPage from './pages/enterprise/main';
import { useEffect } from 'react';
import Footer from './components/Footer';

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top when route changes
    }, [pathname]);

    return null;
  };
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/individual" element={<IndividualsPage />} />
        <Route path="/enterprise" element={<MainPage />} />
        <Route
          path="/"
          element={
            <div className="pt-16">
              <Hero />
              <ImageGallery />
              <TeamBuildingPage />
              <CottonLanding />
              <WhyChooseCotton />
              <FAQ />
              <WorkforceBanner />
            </div>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
