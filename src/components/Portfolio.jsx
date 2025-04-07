
// // components/Portfolio.jsx
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';
// import PortfolioItem from './PortfolioItem';
// import { portfolioItems } from '../data';

// const Portfolio = () => {
//   const [filter, setFilter] = useState('all');
  
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };
  
//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.5 }
//     }
//   };
  
//   const filteredItems = filter === 'all' 
//     ? portfolioItems 
//     : portfolioItems.filter(item => item.category === filter);
  
//   const categories = ['all', ...new Set(portfolioItems.map(item => item.category))];

//   return (
//     <PortfolioSection id="portfolio">
//       <div className="container">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={containerVariants}
//         >
//           <SectionIntro variants={itemVariants}>My portfolio</SectionIntro>
//           <SectionTitle variants={itemVariants}>My latest work</SectionTitle>
//           <SectionDescription variants={itemVariants}>
//             Welcome to my web development portfolio! Explore a collection of projects showcasing
//             my expertise in front-end development.
//           </SectionDescription>
          
//           <FilterContainer variants={itemVariants}>
//             {categories.map((category, index) => (
//               <FilterButton 
//                 key={index}
//                 active={filter === category}
//                 onClick={() => setFilter(category)}
//               >
//                 {category === 'all' ? 'All' : category}
//               </FilterButton>
//             ))}
//           </FilterContainer>
          
//           <PortfolioGrid>
//             {filteredItems.map((item) => (
//               <motion.div key={item.id} variants={itemVariants}>
//                 <PortfolioItem item={item} />
//               </motion.div>
//             ))}
//           </PortfolioGrid>
          
//           <MoreButtonContainer>
//             <MoreButton href="#portfolio">Show more →</MoreButton>
//           </MoreButtonContainer>
//         </motion.div>
//       </div>
//     </PortfolioSection>
//   );
// };

// const PortfolioSection = styled.section`
//   padding: 6rem 0;
//   background-color: ${props => props.theme.background};
// `;

// const SectionIntro = styled(motion.p)`
//   color: ${props => props.theme.primary};
//   font-weight: 500;
//   margin-bottom: 0.5rem;
//   text-align: center;
// `;

// const SectionTitle = styled(motion.h2)`
//   text-align: center;
//   margin-bottom: 1rem;
// `;

// const SectionDescription = styled(motion.p)`
//   text-align: center;
//   max-width: 700px;
//   margin: 0 auto 2rem;
// `;

// const FilterContainer = styled(motion.div)`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 0.8rem;
//   margin-bottom: 2.5rem;
// `;

// const FilterButton = styled.button`
//   background-color: ${props => props.active ? props.theme.primary : 'transparent'};
//   color: ${props => props.active ? 'white' : props.theme.text};
//   border: 1px solid ${props => props.active ? 'transparent' : props.theme.border};
//   padding: 0.5rem 1.2rem;
//   border-radius: 50px;
//   font-size: 0.9rem;
//   cursor: pointer;
//   transition: all 0.3s ease;
  
//   &:hover {
//     background-color: ${props => !props.active && props.theme.border};
//   }
// `;

// const PortfolioGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
//   gap: 2rem;
// `;

// const MoreButtonContainer = styled.div`
//   text-align: center;
//   margin-top: 3rem;
// `;

// const MoreButton = styled.a`
//   background-color: transparent;
//   color: ${props => props.theme.text};
//   padding: 0.8rem 2rem;
//   border-radius: 50px;
//   font-weight: 500;
//   border: 1px solid ${props => props.theme.border};
//   transition: all 0.3s ease;
  
//   &:hover {
//     border-color: ${props => props.theme.primary};
//     color: ${props => props.theme.primary};
//     transform: translateY(-3px);
//     box-shadow: ${props => props.theme.shadow};
//   }
// `;

// export default Portfolio;












// components/Portfolio.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PortfolioItem from './PortfolioItem';
import { portfolioItems } from '../data';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
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
  
  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);
  
  const categories = ['all', ...new Set(portfolioItems.map(item => item.category))];

  return (
    <PortfolioSection id="portfolio">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <SectionIntro variants={itemVariants}>My portfolio</SectionIntro>
          <SectionTitle variants={itemVariants}>My latest work</SectionTitle>
          <SectionDescription variants={itemVariants}>
            Welcome to my web development portfolio! Explore a collection of projects showcasing
            my expertise in front-end development.
          </SectionDescription>
          
          <FilterContainer variants={itemVariants}>
            {categories.map((category, index) => (
              <FilterButton 
                key={index}
                active={filter === category}
                onClick={() => setFilter(category)}
              >
                {category === 'all' ? 'All' : category}
              </FilterButton>
            ))}
          </FilterContainer>
          
          <PortfolioGrid>
            {filteredItems.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <PortfolioItem item={item} />
              </motion.div>
            ))}
          </PortfolioGrid>
          
          <MoreButtonContainer>
            <MoreButton href="#portfolio">Show more →</MoreButton>
          </MoreButtonContainer>
        </motion.div>
      </div>
    </PortfolioSection>
  );
};

const PortfolioSection = styled.section`
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
  margin-bottom: 1rem;
`;

const SectionDescription = styled(motion.p)`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 2rem;
`;

const FilterContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 2.5rem;
`;

const FilterButton = styled.button`
  background-color: ${props => props.active ? props.theme.primary : 'transparent'};
  color: ${props => props.active ? 'white' : props.theme.text};
  border: 1px solid ${props => props.active ? 'transparent' : props.theme.border};
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => !props.active && props.theme.border};
  }
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const MoreButtonContainer = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

const MoreButton = styled.a`
  background-color: transparent;
  color: ${props => props.theme.text};
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 500;
  border: 1px solid ${props => props.theme.border};
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${props => props.theme.primary};
    color: ${props => props.theme.primary};
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.shadow};
  }
`;

export default Portfolio;