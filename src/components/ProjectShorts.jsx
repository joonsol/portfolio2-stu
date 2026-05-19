import React, { useEffect, useRef, useState } from 'react';
import '../styles/ProjectShorts.css'; 

export default function ProjectShorts() {
  // 스크롤 감지를 위한 상태와 Ref 설정
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // 한 번 화면에 들어오면 감지 해제
        }
      },
      { threshold: 0.1 } // 섹션이 화면에 10% 정도 살짝 걸릴 때 애니메이션 바로 가동
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const projectShorts = [
    {
      id: 1,
      title: 'weather app',
      tech: ['REACT', 'NODE.JS', 'FIREBASE'],
      desc: 'Full-featured e-commerce system with product management, inventory tracking, secure payments, and real-time order updates.',
      image: '/images/weather.png',
      liveLink: 'http://localhost:5175', 
      codeLink: 'https://github.com/kim-sungjun592/Wifi-Spot.git'
    },
    {
      id: 2,
      title: '끝말잇기',
      tech: ['REACT', 'NODE.JS', 'FIREBASE'],
      desc: 'Full-featured e-commerce system with product management, inventory tracking, secure payments, and real-time order updates.',
      image: '/images/game.png',
      liveLink: 'https://world-game-zeta.vercel.app', 
      codeLink: 'https://github.com/kim-sungjun592/world-game.git'
    },
    {
      id: 3,
      title: '타이머 앱',
      tech: ['REACT', 'NODE.JS', 'FIREBASE'],
      desc: 'Full-featured e-commerce system with product management, inventory tracking, secure payments, and real-time order updates.',
      image: '/images/timer.png',
      liveLink: 'https://timer-six-psi.vercel.app', 
      codeLink: 'https://github.com/kim-sungjun592/timer.git'
    },
    {
      id: 4,
      title: 'Todolist',
      tech: ['REACT', 'NODE.JS', 'FIREBASE'],
      desc: 'Full-featured e-commerce system with product management, inventory tracking, secure payments, and real-time order updates.',
      image: '/images/todolist.png',
      liveLink: 'https://todolist-ver2-sigma.vercel.app', 
      codeLink: 'https://github.com/kim-sungjun592/todolist-ver2.git'
    },
    {
      id: 5,
      title: '감성 일기장',
      tech: ['REACT', 'NODE.JS', 'FIREBASE'],
      desc: 'Full-featured e-commerce system with product management, inventory tracking, secure payments, and real-time order updates.',
      image: '/images/emotion-diary.png',
      liveLink: 'https://emotion-diary-ashen-rho.vercel.app', 
      codeLink: 'https://github.com/kim-sungjun592/emotion-diary.git'
    },
    { 
      id: 6,
      title: 'wifi-spot',
      tech: ['REACT', 'NODE.JS', 'FIREBASE'],
      desc: 'Full-featured e-commerce system with product management, inventory tracking, secure payments, and real-time order updates.',
      image: '/images/wifi-spot.png',
      liveLink: 'https://wifi-spot-woad.vercel.app/map', 
      codeLink: 'https://github.com/kim-sungjun592/Wifi-Spot.git'
    },
  ];

  return (
    // ✅ section에 ref를 적용하고, isVisible 상태에 따라 클래스를 동적으로 붙입니다.
    <section 
      id="project-shorts" 
      className={`shorts-section ${isVisible ? 'animate-on-scroll' : ''}`} 
      ref={sectionRef}
    >
      <div className="shorts-container">
        
        <div className="shorts-header">
          <h2 className="shorts-main-title">Project Shorts</h2>
          <p className="shorts-subtitle">
            A curated collection of compact projects, blending robust backend logic with intuitive<br />
            visual design.
          </p>
        </div>

        <div className="shorts-grid">
          {projectShorts.map((project) => (
            <div key={project.id} className="short-card">
              <div className="short-image-wrap">
                <img src={project.image} alt={project.title} className="short-image" />
              </div>
              <div className="short-content">
                <h3 className="short-title">{project.title}</h3>
                <div className="short-tech-list">
                  {project.tech.map((t, index) => (
                    <span key={index} className="short-tech-badge">{t}</span>
                  ))}
                </div>
                <p className="short-desc">{project.desc}</p>
                
                <div className="short-actions">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-short yellow"
                    style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box' }}
                  >
                    VIEW PROJECT
                  </a>
                  
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-short outline"
                    style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box' }}
                  >
                    VIEW CODE
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}