import React, { useEffect, useRef, useState } from 'react';
import '../styles/Skills.css';

export default function Skills() {
  // 스크롤 감지를 위한 상태와 Ref 설정
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // 애니메이션이 한 번 가동되면 감지 종료
        }
      },
      { threshold: 0.15 } // 섹션이 화면에 15% 정도 노출될 때 실행
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const skillCategories = [
    {
      title: 'Frontend\nDevelopment',
      icon: '⚡',
      color: '#8b5cf6', // 보라색
      skills: [
        { name: 'React / Next.js', percent: 90 },
        { name: 'TypeScript', percent: 85 },
        { name: 'Tailwind CSS', percent: 92 },
        { name: 'Redux / Zustand', percent: 88 },
      ],
    },
    {
      title: 'Backend\nDevelopment',
      icon: '⏱️',
      color: '#10b981', // 초록색
      skills: [
        { name: 'Node.js / Express', percent: 92 },
        { name: 'REST & GraphQL', percent: 88 },
        { name: 'PostgreSQL / Redis', percent: 86 },
        { name: 'Prisma / TypeORM', percent: 84 },
      ],
    },
    {
      title: 'DevOps &\nCloud',
      icon: '⬡',
      color: '#f97316', // 주황색
      skills: [
        { name: 'Docker / Kubernetes', percent: 82 },
        { name: 'AWS / GCP / Vercel', percent: 85 },
        { name: 'CI/CD Pipelines', percent: 80 },
        { name: 'Nginx / Linux', percent: 83 },
      ],
    },
    {
      title: 'Testing &\nQA',
      icon: '✓',
      color: '#ec4899', // 핑크색
      skills: [
        { name: 'Jest / Vitest', percent: 87 },
        { name: 'Cypress / Playwright', percent: 84 },
        { name: 'React Testing Lib', percent: 85 },
        { name: 'Storybook', percent: 88 },
      ],
    },
  ];

  return (
    // ✅ section에 ref를 바인딩하고, 감지 상태에 따라 'animate-on-scroll' 클래스를 주입합니다.
    <section 
      id="skills" 
      className={`skills-tools-section ${isVisible ? 'animate-on-scroll' : ''}`} 
      ref={sectionRef}
    >
      <div className="skills-tools-container">
        
        {/* 상단 헤더 */}
        <div className="skills-header">
          <h2 className="skills-title">Skills & Tools</h2>
          <p className="skills-subtitle">
            Design-driven web development with scalable backend architecture,<br />
            interactive dashboards, and optimized user experiences.
          </p>
        </div>

        {/* 4열 스킬 카드 그리드 */}
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-card">
              
              {/* 카드 헤더 (아이콘 + 제목) */}
              <div className="skill-card-header">
                <div 
                  className="skill-icon-wrapper" 
                  style={{ backgroundColor: `${category.color}20`, color: category.color }}
                >
                  {category.icon}
                </div>
                <h3 className="skill-card-title">
                  {category.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </h3>
              </div>

              {/* 스킬 목록 및 프로그래스 바 */}
              <div className="skill-list">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.percent}%</span>
                    </div>
                    <div className="skill-progress-bg">
                      {/* 💡 CSS 애니메이션 연동을 위해 인라인 스타일에 CSS 변수(--target-width)를 내려줍니다. */}
                      <div 
                        className="skill-progress-fill" 
                        style={{ 
                          '--target-width': `${skill.percent}%`, 
                          backgroundColor: category.color 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}