import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import me from '../assets/banw.jpg';

const Hero = () => {
  const [isHovering, setIsHovering] = useState(false);
 
  return (
    <HeroSection 
      id="home"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="container">
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProfileImageContainer>
              <ProfileImage src={me} alt="Sodiq Baki" />
            </ProfileImageContainer>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Greeting>Hi! I'm Sodiq Baki Adeiza <span>👋</span></Greeting>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <HeroTitle>
              software developer<br />
              based in lagos.
            </HeroTitle>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <HeroDescription>
              I am a Software developer from Lagos, Nigeria with 7 years of experience, worked with companies and done integrations with Lottomania, BetNaija, Nestlypay, Nidful etc.
            </HeroDescription>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <ButtonGroup>
              <PrimaryButton href="#contact">connect with me</PrimaryButton>
              <SecondaryButton href="/Baki_Sodiq_Adeiza_CV.pdf" download="Baki_Sodiq_Adeiza_CV.pdf">
                my resume <Download size={16} />
              </SecondaryButton>
            </ButtonGroup>
          </motion.div>
        </HeroContent>
      </div>
      
      <BackgroundImage1 
        animate={{ 
          rotate: isHovering ? [0, 360] : 360,
          scale: isHovering ? [1, 1.1, 1] : 1,
          opacity: isHovering ? 0.1 : 0.05
        }} 
        transition={{ 
          rotate: { duration: isHovering ? 5 : 100, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity, repeatType: "reverse" },
          opacity: { duration: 0.5 }
        }} 
      />
      
      <BackgroundImage2 
        animate={{ 
          rotate: isHovering ? [0, -360] : -360,
          x: isHovering ? [0, -20, 0] : 0,
          opacity: isHovering ? 0.1 : 0.05
        }} 
        transition={{ 
          rotate: { duration: isHovering ? 6 : 120, repeat: Infinity, ease: "linear" },
          x: { duration: 3, repeat: Infinity, repeatType: "reverse" },
          opacity: { duration: 0.5 }
        }} 
      />
      
      <BackgroundImage3 
        animate={{ 
          rotate: isHovering ? [0, 360] : 360,
          y: isHovering ? [0, 20, 0] : 0,
          opacity: isHovering ? 0.1 : 0.05
        }} 
        transition={{ 
          rotate: { duration: isHovering ? 4 : 90, repeat: Infinity, ease: "linear" },
          y: { duration: 2.5, repeat: Infinity, repeatType: "reverse" },
          opacity: { duration: 0.5 }
        }} 
      />
    </HeroSection>
  );
};

const HeroSection = styled.section`
  padding: 10rem 0 5rem;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 8rem 0 4rem;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const ProfileImageContainer = styled.div`
  margin-bottom: 2rem;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid ${props => props.theme.primary};
`;

const Greeting = styled.p`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  
  span {
    animation: wave 2.5s infinite;
    display: inline-block;
    transform-origin: 70% 70%;
    
    @keyframes wave {
      0% { transform: rotate(0deg); }
      10% { transform: rotate(14deg); }
      20% { transform: rotate(-8deg); }
      30% { transform: rotate(14deg); }
      40% { transform: rotate(-4deg); }
      50% { transform: rotate(10deg); }
      60% { transform: rotate(0deg); }
      100% { transform: rotate(0deg); }
    }
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled.a`
  background-color: ${props => props.theme.primary};
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.headline};
    color: white;
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.shadow};
  }
`;

const SecondaryButton = styled.a`
  background-color: transparent;
  color: ${props => props.theme.text};
  padding: 0.75rem 1.45rem;
  border-radius: 50px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1px solid ${props => props.theme.border};
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${props => props.theme.primary};
    color: ${props => props.theme.primary};
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.shadow};
  }
`;

const BackgroundImage = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  opacity: 0.05;
  z-index: 1;
`;

const BackgroundImage1 = styled(BackgroundImage)`
  width: 300px;
  height: 300px;
  background-color: ${props => props.theme.primary};
  top: 10%;
  left: 10%;
`;

const BackgroundImage2 = styled(BackgroundImage)`
  width: 200px;
  height: 200px;
  background-color: ${props => props.theme.headline};
  top: 60%;
  right: 10%;
`;

const BackgroundImage3 = styled(BackgroundImage)`
  width: 150px;
  height: 150px;
  background-color: ${props => props.theme.primary};
  bottom: 10%;
  left: 20%;
`;

export default Hero;