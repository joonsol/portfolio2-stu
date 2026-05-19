import React, { useEffect, useRef, useState } from 'react';
import '../styles/Projects.css';

export default function Projects() {
  // 스크롤 감지를 위한 상태와 Ref 설정
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // 한 번 등장하면 감지 해제
        }
      },
      { threshold: 0.1 } // 섹션이 화면에 10% 정도 살짝 보이기 시작할 때 바로 트리거
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'converse UI/UX Design',
      description: 'A comprehensive Converse web experience: from high-fidelity Figma prototyping to robust full-stack implementation',
      image: '/images/converse.png',
      technologies: ['Node.js', 'ui/ux', 'figma'],
      liveLink: 'https://canverse-tocobo.vercel.app', 
      codeLink: 'https://github.com/kim-sungjun592/canverse-tocobo'
    },
    {
      id: 2,
      title: 'Picstory',
      description: 'This project is a MERN-based full-stack web application...',
      image: '/images/picstory.png',
      technologies: ['Node.js', 'ui/ux', 'figma'],
      // 💡 한 가지 팁: 현재 localhost 주소로 되어 있는데, 나중에 배포하시면 배포 주소로 갈아끼워 주세요!
      liveLink: 'http://localhost:5173', 
      codeLink: 'https://github.com/kim-sungjun592/picstory.git'
    }
  ];

  return (
    // ✅ section에 ref를 달고, 이고, isVisible 상태에 따라 'animate-on-scroll' 클래스를 붙여줍니다.
    <section 
      id="projects" 
      className={`high-impact-section ${isVisible ? 'animate-on-scroll' : ''}`} 
      ref={sectionRef}
    >
      <div className="container">
        
        {/* 헤더 영역 */}
        <div className="section-header">
          <h2 className="section-title">High-Impact Builds</h2>
          <p className="section-subtitle">
            Architecting robust backends and intuitive design systems that transform complex data into<br />
            seamless experiences
          </p>
        </div>

        {/* 프로젝트 리스트 영역 */}
        <div className="builds-list">
          {projects.map((project, index) => (
            <div key={project.id} className={`build-item ${index % 2 !== 0 ? 'reverse' : ''}`}>
              
              {/* 왼쪽/오른쪽 이미지 영역 */}
              <div className="build-image-wrapper">
                <img src={project.image} alt={project.title} className="build-image" />
              </div>
              
              {/* 텍스트 및 정보 영역 */}
              <div className="build-info">
                <div className="build-meta">
                  <div className="tech-badges">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="external-link-icon" aria-label="View Project">
                    ↗
                  </a>
                </div>

                <h3 className="build-title">{project.title}</h3>
                <p className="build-desc">{project.description}</p>

                <div className="build-actions">
                  <a 
                    href={project.liveLink} 
                    target="_blank"             
                    rel="noopener noreferrer"   
                    className="btn-build yellow"
                    style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }} 
                  >
                    <span className="btn-icon">🔗</span> Live Demo
                  </a>

                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-build outline"
                    style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
                  >
                    <span className="btn-icon">💻</span> View Code
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