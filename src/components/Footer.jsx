// components/Footer.jsx
import React from 'react';
import styled from 'styled-components';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <CopyrightText>
            © {currentYear} Sodiq Baki. All rights reserved.
          </CopyrightText>
          
          <FooterLinks>
            <FooterLink href="#terms">Terms of Service</FooterLink>
            <FooterLink href="#privacy">Privacy Policy</FooterLink>
            <FooterLink href="#contact">Contact with me</FooterLink>
          </FooterLinks>
          
          <SocialLinks>
            <SocialLink href="https://github.com/NaijaTechBro" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </SocialLink>
            <SocialLink href="https://x.com/NaijaTechBro" target="_blank" rel="noopener noreferrer">
              <Twitter size={20} />
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/baki-sodiq-naijatechbro" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </SocialLink>
            <SocialLink href="https://instagram.com/NaijaTechBro" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} />
            </SocialLink>
          </SocialLinks>
        </FooterContent>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.background};
  padding: 1.5rem 0;
  border-top: 1px solid ${props => props.theme.border};
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const CopyrightText = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: ${props => props.theme.text};
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const FooterLink = styled.a`
  color: ${props => props.theme.text};
  font-size: 0.9rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: ${props => props.theme.text};
  transition: all 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.primary};
    transform: translateY(-3px);
  }
`;

export default Footer;
