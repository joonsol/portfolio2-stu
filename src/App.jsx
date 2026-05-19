import React, { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import ProjectShorts from "./components/ProjectShorts.jsx"; // 여기도 공백 없이!
import Skills from './components/Skills.jsx'; // 👈 1. Skills 컴포넌트를 불러옵니다!
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './styles/App.css';

function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const scrollBtn = document.querySelector('.scroll-to-top');
    if (scrollBtn) {
      if (showScrollToTop) {
        scrollBtn.classList.add('show');
      } else {
        scrollBtn.classList.remove('show');
      }
    }
  }, [showScrollToTop]);

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <ProjectShorts />
      <Skills /> {/* 👈 2. ProjectShorts 아래, Contact 위에 스킬 섹션을 넣습니다! */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;