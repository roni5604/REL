import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Team from './components/Team';
import InvestmentProcess from './components/InvestmentProcess';
import Loans from './components/Loans';
import Testimonials from './components/Testimonials';
import Projects from './components/Projects';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <>
      <Navbar />
      <Team />
      <InvestmentProcess />
      <Loans />
      <Testimonials />
      <Projects />
      <FAQ />
      <Contact />
    </>
  );
}
