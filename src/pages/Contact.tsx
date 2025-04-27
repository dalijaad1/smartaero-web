import React from 'react';
import ContactComponent from '../components/Contact';

interface ContactPageProps {
  isDarkMode: boolean;
}

const ContactPage: React.FC<ContactPageProps> = ({ isDarkMode }) => {
  return (
    <main className="pt-20">
      <ContactComponent isDarkMode={isDarkMode} />
    </main>
  );
};

export default ContactPage;