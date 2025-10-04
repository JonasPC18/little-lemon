import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Hero from '../components/layout/Hero';
import Highlights from '../components/layout/Highlights';
import Testimonials from '../components/layout/Testimonials';
import About from '../components/layout/About';

export default function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.querySelector(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location, navigate]);

  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="menu">
        <Highlights />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="about">
        <About />
      </section>
    </>
  );
}
