// components/Services.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SquareCode, Server, FileTerminal, ChartCandlestick } from 'lucide-react';
import { services } from '../data';

const Services = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const getIconComponent = (iconName) => {
    switch (iconName) {
      case 'code': return <SquareCode size={24} />;
      case 'server': return <Server size={24} />;
      case 'terminal': return <FileTerminal size={24} />;
      case 'trending-up': return <ChartCandlestick size={24} />;
      default: return <SquareCode size={24} />;
    }
  };

  return (
    <ServiceSection id="services">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <SectionIntro variants={itemVariants}>What I offers</SectionIntro>
          <SectionTitle variants={itemVariants}>My services</SectionTitle>
          <SectionDescription variants={itemVariants}>
            I am a software developer from Lagos, Nigeria with 7 years of experience in multiple
            companies like MyLottoHub, BetNaija and Nestlypay.
          </SectionDescription>
          
          <ServicesGrid>
            {services.map((service) => (
              <ServiceCard 
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                highlighted={service.highlighted}
              >
                <ServiceIconContainer highlighted={service.highlighted}>
                  {getIconComponent(service.icon)}
                </ServiceIconContainer>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ReadMoreLink href="#" highlighted={service.highlighted}>
                  Read more →
                </ReadMoreLink>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </motion.div>
      </div>
    </ServiceSection>
  );
};

const ServiceSection = styled.section`
  padding: 6rem 0;
`;

const SectionIntro = styled(motion.p)`
  color: ${props => props.theme.primary};
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  margin-bottom: 1rem;
`;

const SectionDescription = styled(motion.p)`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled(motion.div)`
  background-color: ${props => props.highlighted 
    ? props.theme.primary + '15'  // Adding transparency to primary color
    : props.theme.serviceCardBg};
  border-radius: 10px;
  padding: 2rem;
  height: 100%;
  box-shadow: ${props => props.theme.shadow};
  border: 1px solid ${props => props.highlighted 
    ? props.theme.primary 
    : props.theme.border};
  transition: all 0.3s ease;
`;

const ServiceIconContainer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background-color: ${props => props.highlighted 
    ? props.theme.primary 
    : props.theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: ${props => props.highlighted 
    ? 'white' 
    : props.theme.primary};
`;

const ServiceTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

const ServiceDescription = styled.p`
  color: ${props => props.theme.text};
  margin-bottom: 1.5rem;
`;

const ReadMoreLink = styled.a`
  color: ${props => props.highlighted 
    ? props.theme.primary 
    : props.theme.text};
  font-weight: 500;
  font-size: 0.95rem;
  display: inline-block;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
    color: ${props => props.theme.primary};
  }
`;

export default Services;
