import React, { useEffect, useRef, useState } from 'react';
import '../styles/About.css'; 

export default function About() {
  // 애니메이션 트리거를 위한 상태와 Ref 설정
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 화면에 요소가 보이면 isVisible을 true로 변경
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // 한 번 실행된 후에는 감지 중지 (계속 깜빡이지 않게)
        }
      },
      { threshold: 0.3 } // 섹션이 화면에 30% 정도 보일 때 애니메이션 시작
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    // section에 ref를 달아주고, isVisible 상태에 따라 클래스 추가
    <section id="about" className="about-section" ref={sectionRef}>
      <div className={`about-container ${isVisible ? 'animate-on-scroll' : ''}`}>
        
        {/* 메인 제목 및 부제목 */}
        <div className="about-header-text">
          <h2 className="about-title">Design & Code Studio</h2>
          <p className="about-subtitle">
            Full-stack backend developer with modern UI design systems, scalable architecture, admin dashboards, and creative web experiences.
          </p>
        </div>

        {/* 중앙 통계 박스 */}
        <div className="about-stats-box">
          <div className="stat-column">
            <h3>5+</h3>
            <p>Fullstack Exp.</p>
          </div>
          <div className="stat-column">
            <h3>40+</h3>
            <p>Projects</p>
          </div>
          {/* 'Collaborations' 텍스트 줄바꿈을 위해 클래스 추가 */}
          <div className="stat-column collaborations">
            <h3>15+</h3>
            <p>Collaborati<br/>ons</p>
          </div>
          <div className="stat-column">
            <h3>99%</h3>
            <p>Deployments</p>
          </div>
        </div>
        
      </div>
    </section>
  );
}