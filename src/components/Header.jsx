
// components/Header.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { Computer, Menu, X } from 'lucide-react';

const Header = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <HeaderContainer scrolled={isScrolled}>
      <div className="container">
        <Nav>
          <Logo href="#home">
            <Computer size={24} />
            <span>Adeiza</span>
          </Logo>
          
          <DesktopMenu>
            <MenuItem href="#home">Home</MenuItem>
            <MenuItem href="#about">About me</MenuItem>
            <MenuItem href="#services">Services</MenuItem>
            <MenuItem href="#portfolio">My work</MenuItem>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <ContactButton href="#contact">Connect</ContactButton>
          </DesktopMenu>

          <MobileMenuButton onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>
        </Nav>
      </div>

      <MobileMenuOverlay 
        animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: mobileMenuOpen ? 'all' : 'none' }}
      >
        <MobileMenuContainer
          animate={{ x: mobileMenuOpen ? 0 : '100%' }}
          initial={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
        >
          <MobileMenuHeader>
            <Logo href="#home" onClick={() => setMobileMenuOpen(false)}>
              <Computer size={24} />
              <span>Adeiza</span>
            </Logo>
            <CloseButton onClick={toggleMobileMenu}>
              <X size={24} />
            </CloseButton>
          </MobileMenuHeader>
          
          <MobileMenuItems>
            <MobileMenuItem href="#home" onClick={() => setMobileMenuOpen(false)}>Home</MobileMenuItem>
            <MobileMenuItem href="#about" onClick={() => setMobileMenuOpen(false)}>About me</MobileMenuItem>
            <MobileMenuItem href="#services" onClick={() => setMobileMenuOpen(false)}>Services</MobileMenuItem>
            <MobileMenuItem href="#portfolio" onClick={() => setMobileMenuOpen(false)}>My work</MobileMenuItem>
            <MobileMenuItem href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</MobileMenuItem>
            <ThemeToggleContainer>
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </ThemeToggleContainer>
          </MobileMenuItems>
        </MobileMenuContainer>
      </MobileMenuOverlay>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: ${props => props.scrolled ? '0.8rem 0' : '1.5rem 0'};
  background-color: ${props => props.scrolled ? props.theme.navbarBg : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.scrolled ? props.theme.shadow : 'none'};
  transition: all 0.3s ease;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.headline};
  
  span {
    margin-left: 0.25rem;
  }
`;

const DesktopMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled.a`
  color: ${props => props.theme.text};
  font-weight: 500;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${props => props.theme.primary};
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const ContactButton = styled.a`
  background-color: ${props => props.theme.primary};
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.headline};
    color: white;
    transform: translateY(-3px);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.text};
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1001;
`;

const MobileMenuContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 75%;
  max-width: 300px;
  height: 100%;
  background-color: ${props => props.theme.body};
  z-index: 1002;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.text};
`;

const MobileMenuItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const MobileMenuItem = styled.a`
  color: ${props => props.theme.text};
  font-size: 1.2rem;
  font-weight: 500;
`;

const ThemeToggleContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

export default Header;
