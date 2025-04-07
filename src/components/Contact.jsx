
// components/Contact.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };
  
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

  return (
    <ContactSection id="contact">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <SectionIntro variants={itemVariants}>Connect with me</SectionIntro>
          <SectionTitle variants={itemVariants}>Get in touch</SectionTitle>
          <SectionDescription variants={itemVariants}>
            I'd love to hear from you! If you have any questions, comments or
            feedback, please use the form below.
          </SectionDescription>
          
          <ContactFormContainer variants={itemVariants}>
            <Form onSubmit={handleSubmit}>
              <FormField>
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  hasError={errors.name}
                />
                {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
              </FormField>
              
              <FormField>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  hasError={errors.email}
                />
                {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
              </FormField>
              
              <FormField>
                <TextArea
                  name="message"
                  placeholder="Enter your message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  hasError={errors.message}
                />
                {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
              </FormField>
              
              <SubmitButtonContainer>
                <SubmitButton 
                  type="submit" 
                  disabled={isSubmitting}
                  whileHover={{ y: -5 }}
                  whileTap={{ y: 0 }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit now'} →
                </SubmitButton>
              </SubmitButtonContainer>
              
              {submitSuccess && (
                <SuccessMessage>
                  Thank you for your message! I'll get back to you soon.
                </SuccessMessage>
              )}
            </Form>
          </ContactFormContainer>
          
          <ContactInfoContainer variants={itemVariants}>
            <ContactName>Adeiza<span>.</span></ContactName>
            <ContactEmail>
              <Mail size={16} />
              <span>bakisodiq@gmail.com</span>
            </ContactEmail>
          </ContactInfoContainer>
        </motion.div>
      </div>
    </ContactSection>
  );
};

const ContactSection = styled.section`
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

const ContactFormContainer = styled(motion.div)`
  max-width: 600px;
  margin: 0 auto;
  background-color: ${props => props.theme.cardBg};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadow};
`;

const Form = styled.form``;

const FormField = styled.div`
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border-radius: 5px;
  border: 1px solid ${props => props.hasError ? 'red' : props.theme.inputBorder};
  background-color: ${props => props.theme.inputBg};
  color: ${props => props.theme.text};
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? 'red' : props.theme.primary};
  }
  
  &::placeholder {
    color: ${props => props.theme.text}80;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  border-radius: 5px;
  border: 1px solid ${props => props.hasError ? 'red' : props.theme.inputBorder};
  background-color: ${props => props.theme.inputBg};
  color: ${props => props.theme.text};
  font-size: 1rem;
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? 'red' : props.theme.primary};
  }
  
  &::placeholder {
    color: ${props => props.theme.text}80;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.85rem;
  margin-top: 0.3rem;
`;

const SubmitButtonContainer = styled.div`
  text-align: center;
`;

const SubmitButton = styled(motion.button)`
  background-color: ${props => props.theme.primary};
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:disabled {
    background-color: ${props => props.theme.border};
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  margin-top: 1rem;
  padding: 0.8rem;
  background-color: #4caf5020;
  color: #4caf50;
  border-radius: 5px;
  text-align: center;
`;

const ContactInfoContainer = styled(motion.div)`
  text-align: center;
  margin-top: 3rem;
`;

const ContactName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  
  span {
    color: ${props => props.theme.primary};
  }
`;

const ContactEmail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${props => props.theme.text};
`;

export default Contact;

