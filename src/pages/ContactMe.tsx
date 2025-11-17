import React, { useEffect, useState } from 'react';
import './ContactMe.css';
import profilePic from '../images/sumanth.jpeg';
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin } from 'react-icons/fa';
import { ContactMe as IContactMe } from '../types';
import { getContactMe } from '../queries/getContactMe';

const fallbackContact: IContactMe = {
  profilePicture: { url: '' },
  name: 'Sankalp Chaturvedi',
  title: 'Director · Writer · Cinematographer & Colourist',
  summary:
    'I tell intimate stories with cinematic scale, balancing directing, writing, cinematography and colour to keep every frame emotionally honest.',
  companyUniversity: 'Based in Delhi NCR · Available worldwide',
  linkedinLink: 'https://www.linkedin.com/in/sankalp-chaturvedi',
  email: 'sankalpchaturvedi31@gmail.com',
  phoneNumber: '+919205062634'
};

const ContactMe: React.FC = () => {

  const [userData, setUserData] = useState<IContactMe>(fallbackContact)

  useEffect(() => {
    async function fetchUserData() {
      try {
        const data = await getContactMe();
        setUserData(data);
      } catch (error) {
        console.error('Unable to fetch contact card, showing Sankalp’s details instead.', error);
      }
    }

    fetchUserData();
  }, []);

  const formattedPhone = userData.phoneNumber.replace(/(\+?\d{2})(\d{5})(\d{5})/, '$1 $2 $3');

  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <img src={profilePic} alt="Sankalp Chaturvedi" className="badge-avatar" />
        <div className="badge-content">
          <h3 className="badge-name">{userData?.name}</h3>
          <p className="badge-title">{userData.title}</p>
          <p className="badge-description">
            {userData.summary}
          </p>
          <p className="badge-company">{userData.companyUniversity}</p>
          <a
            href={userData.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link"
          >
            <FaLinkedin className="linkedin-icon" /> View Profile
          </a>
        </div>
      </div>
      <div className="contact-header">
        <p>Let’s talk stories, colour palettes or that scene you still can’t shake.</p>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href={`mailto:${userData.email}`} className="contact-link">
            {userData.email}
          </a>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href={`tel:${userData.phoneNumber}`} className="contact-link">
            {formattedPhone}
          </a>
        </div>
        <div className="contact-fun">
          <p>Or catch up over a coffee ☕</p>
          <FaCoffee className="coffee-icon" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
