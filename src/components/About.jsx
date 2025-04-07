import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import portrait from "../assets/portrait.jpg";
import { Code, GraduationCap, Briefcase } from 'lucide-react';
import figma from '../assets/tools/figma.png';
import git from '../assets/tools/git.png';
import mongo from '../assets/tools/mongo.png';
import vscode from '../assets/tools/vscode.png';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Skill icons list - match the ones in the image
  const skillIcons = [
    { name: "VSCode", color: "#007ACC", icon: vscode },
    { name: "MongoDB", color: "#47A248", icon: mongo },
    { name: "Figma", color: "#F24E1E", icon: figma },
    { name: "Git", color: "#F05032", icon: git }
  ];

  return (
    <AboutSection id="about">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <SectionIntro variants={itemVariants}>Introduction</SectionIntro>
          <SectionTitle variants={itemVariants}>About me</SectionTitle>
          
          <AboutGrid>
            <AboutImageContainer variants={itemVariants}>
              <AboutImage src={portrait} alt="Profile" />
            </AboutImageContainer>
            
            <AboutContent>
              <AboutText variants={itemVariants}>
                I am an experienced Software Developer with more than half a decade of professional expertise in
                the field. Throughout my career, I have had the privilege of collaborating with prestigious
                organizations, contributing to their success and growth.
              </AboutText>
              
              <FeatureBoxContainer>
                <FeatureBox variants={itemVariants}>
                  <FeatureIcon>
                    <Code size={24} />
                  </FeatureIcon>
                  <FeatureTitle>Languages</FeatureTitle>
                  <FeatureDescription>React.js, Python, Php, Typescript, Node.js, JavaScript, Next.js</FeatureDescription>
                </FeatureBox>
                
                <FeatureBox variants={itemVariants}>
                  <FeatureIcon>
                    <GraduationCap size={24} />
                  </FeatureIcon>
                  <FeatureTitle>Education</FeatureTitle>
                  <FeatureDescription>B.Eng in Mechanical Engineering</FeatureDescription>
                </FeatureBox>
                
                <FeatureBox variants={itemVariants}>
                  <FeatureIcon>
                    <Briefcase size={24} />
                  </FeatureIcon>
                  <FeatureTitle>Projects</FeatureTitle>
                  <FeatureDescription>More than 5 Projects</FeatureDescription>
                </FeatureBox>
              </FeatureBoxContainer>
              
              <SkillsContainer variants={itemVariants}>
                <SkillsTitle>Tools I use</SkillsTitle>
                <SkillsList>
                  {skillIcons.map((skill, index) => (
                    <SkillItem key={index}>
                      <SkillIcon backg>
                        <IconImage src={skill.icon} alt={skill.name} />
                      </SkillIcon>
                    </SkillItem>
                  ))}
                </SkillsList>
              </SkillsContainer>
            </AboutContent>
          </AboutGrid>
        </motion.div>
      </div>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  padding: 6rem 0;
  background-color: ${props => props.theme.background};
`;

const SectionIntro = styled(motion.p)`
  color: ${props => props.theme.primary};
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  margin-bottom: 3rem;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImageContainer = styled(motion.div)`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadow};
`;

const AboutImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const AboutContent = styled.div``;

const AboutText = styled(motion.p)`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.7;
`;

const FeatureBoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureBox = styled(motion.div)`
  background-color: ${props => props.theme.cardBg};
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadow};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  color: ${props => props.theme.primary};
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.text};
`;

const SkillsContainer = styled(motion.div)`
  margin-top: 2rem;
`;

const SkillsTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const SkillsList = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const SkillIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${props => props.backgroundColor || props.theme.cardBg};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${props => props.theme.shadow};
  transition: transform 0.3s ease;
  padding: 8px;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export default About;