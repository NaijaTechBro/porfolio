// // components/PortfolioItem.jsx
// import React from 'react';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';
// import { ExternalLink, GitHub } from 'lucide-react';

// const PortfolioItem = ({ item }) => {
//   return (
//     <PortfolioCard
//       whileHover={{ y: -10 }}
//       transition={{ duration: 0.3 }}
//       as="a"
//       href={item.link}
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <PortfolioImageContainer>
//         <PortfolioImage src={item.image} alt={item.title} />
        
//         <PortfolioOverlay>
//           <PortfolioCategory>{item.category}</PortfolioCategory>
//           <PortfolioActions>
//             <ActionLink 
//               href={item.githubLink} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               aria-label="View GitHub repository"
//             >
//               <GitHub size={20} />
//             </ActionLink>
//             <ActionLink 
//               href={item.link} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               aria-label="Visit live website"
//             >
//               <ExternalLink size={20} />
//             </ActionLink>
//           </PortfolioActions>
//         </PortfolioOverlay>
//       </PortfolioImageContainer>
      
//       <PortfolioCardContent>
//         <PortfolioTitle>{item.title}</PortfolioTitle>
//         <PortfolioMeta>
//           <PortfolioCheck>✓</PortfolioCheck>
//         </PortfolioMeta>
//       </PortfolioCardContent>
//     </PortfolioCard>
//   );
// };

// const PortfolioCard = styled(motion.a)`
//   background-color: ${props => props.theme.cardBg};
//   border-radius: 10px;
//   overflow: hidden;
//   box-shadow: ${props => props.theme.shadow};
//   display: block;
//   text-decoration: none;
//   color: inherit;
// `;

// const PortfolioImageContainer = styled.div`
//   position: relative;
//   overflow: hidden;
//   aspect-ratio: 16/9;
// `;

// const PortfolioImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   transition: transform 0.5s ease;
// `;

// const PortfolioOverlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.6);
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   padding: 1rem;
//   opacity: 0;
//   transition: opacity 0.3s ease;
  
//   ${PortfolioImageContainer}:hover & {
//     opacity: 1;
//   }
  
//   ${PortfolioImageContainer}:hover ${PortfolioImage} {
//     transform: scale(1.1);
//   }
// `;

// const PortfolioCategory = styled.span`
//   background-color: ${props => props.theme.primary};
//   color: white;
//   padding: 0.3rem 0.8rem;
//   border-radius: 4px;
//   font-size: 0.8rem;
//   text-transform: uppercase;
//   align-self: flex-start;
// `;

// const PortfolioActions = styled.div`
//   align-self: flex-end;
//   display: flex;
//   gap: 0.5rem;
// `;

// const ActionLink = styled.a`
//   width: 30px;
//   height: 30px;
//   border-radius: 50%;
//   background-color: white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   transition: transform 0.3s ease;
//   color: #333;
  
//   &:hover {
//     transform: translateY(-3px);
//   }
// `;

// const PortfolioCardContent = styled.div`
//   padding: 1.2rem;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const PortfolioTitle = styled.h3`
//   font-size: 1.1rem;
//   margin: 0;
// `;

// const PortfolioMeta = styled.div``;

// const PortfolioCheck = styled.span`
//   width: 24px;
//   height: 24px;
//   border-radius: 50%;
//   background-color: ${props => props.theme.primary};
//   color: white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 0.9rem;
// `;

// export default PortfolioItem;

























































// components/PortfolioItem.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PlusCircle } from 'lucide-react';

const PortfolioItem = ({ item }) => {
  return (
    <PortfolioCard
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      onClick={() => window.open(item.link, '_blank')}
    >
      <PortfolioImageContainer>
        <PortfolioImage src={item.image} alt={item.title} />
      </PortfolioImageContainer>
      
      <PortfolioLabel>
        <PortfolioLabelContent>
          <div>
            <PortfolioTitle>{item.title}</PortfolioTitle>
            <PortfolioCategory>{item.category}</PortfolioCategory>
          </div>
          <ActionButton 
            aria-label="View project details"
            onClick={(e) => {
              e.stopPropagation();
              window.open(item.githubLink || item.link, '_blank');
            }}
          >
            <PlusCircle size={16} color={item.category === 'mobile app' ? '#4CAF50' : '#3B82F6'} />
          </ActionButton>
        </PortfolioLabelContent>
      </PortfolioLabel>
    </PortfolioCard>
  );
};

const PortfolioCard = styled(motion.div)`
  position: relative;
  background-color: ${props => props.theme.cardBg};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadow};
  cursor: pointer;
`;

const PortfolioImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 16/9;
`;

const PortfolioImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${PortfolioCard}:hover & {
    transform: scale(1.05);
  }
`;

const PortfolioLabel = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  right: 16px;
  background-color: white;
  border-radius: 8px;
  padding: 10px 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const PortfolioLabelContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PortfolioTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PortfolioCategory = styled.p`
  font-size: 0.75rem;
  color: #6B7280;
  margin: 0;
  text-transform: lowercase;
`;

const ActionButton = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${props => props.color || '#F3F4F6'};
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

export default PortfolioItem;