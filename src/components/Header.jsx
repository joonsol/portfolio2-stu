import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 기본값을 다크모드(true)로 설정하되, 이미 body에 light-mode 클래스가 있다면 false로 시작
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return !document.body.classList.contains('light-mode');
    }
    return true;
  });

  // 테마를 전환하는 함수
  const toggleTheme = () => {
    if (isDarkMode) {
      document.body.classList.add('light-mode');
      setIsDarkMode(false);
    } else {
      document.body.classList.remove('light-mode');
      setIsDarkMode(true);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        
        {/* 좌측: 로고 영역 */}
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="logo-box">ksj</div>
          <span className="logo-text">김성준</span>
        </div>
        
        {/* 중앙: 네비게이션 링크 */}
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><a onClick={() => scrollToSection('about')}>About</a></li>
            <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
            {/* 만약 Project Shorts 섹션으로 가고 싶다면 아래 id를 'project-shorts'로 바꾸셔도 됩니다! */}
            <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
            <li><a onClick={() => scrollToSection('blog')}>Blog</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </nav>

        {/* 우측: 버튼 영역 */}
        <div className="header-actions">
          {/* 다크/화이트 모드 토글 버튼 추가 */}
          <button 
            className="theme-toggle-btn" 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          
          <button className="btn-header outline">Resume</button>
          <button className="btn-header yellow">Hire Me</button>
        </div>

        {/* 모바일 햄버거 메뉴 버튼 */}
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
      </div>
    </header>
  );
}