import React, { useEffect, useState } from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiIeee } from 'react-icons/si';
import { Certification } from '../types';
import { getCertifications } from '../queries/getCertifications';
const iconData: { [key: string]: JSX.Element } = {
  'udemy': <SiUdemy />,
  'coursera': <SiCoursera />,
  'ieee': <SiIeee />,
  'university': <FaUniversity />
}

const FALLBACK_CERTIFICATIONS: Certification[] = [
  {
    title: 'Best Colour Grading',
    issuer: 'Mumbai Indie Shorts Awards',
    issuedDate: '2024',
    link: 'https://filmfreeway.com/festivals',
    iconName: 'ieee'
  },
  {
    title: 'Emerging Director (Short Form)',
    issuer: 'Delhi International Film Festival',
    issuedDate: '2023',
    link: 'https://diff.co.in',
    iconName: 'university'
  },
  {
    title: 'Colour Science Lab Residency',
    issuer: 'Post Studio Mumbai',
    issuedDate: '2022',
    link: 'https://poststudiomumbai.com',
    iconName: 'coursera'
  }
];

const Certifications: React.FC = () => {

  const [certifications, setCertifications] = useState<Certification[]>(FALLBACK_CERTIFICATIONS);

  useEffect(() => {
    async function fetchCertifications() {
      try {
        const data = await getCertifications();
        setCertifications(data);
      } catch (error) {
        console.error('Unable to fetch certifications, using awards + residencies snapshot.', error);
      }
    }

    fetchCertifications();
  }, []);

  return (
    <div className="certifications-container">
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <a href={cert.link} key={index} target="_blank" rel="noopener noreferrer" className="certification-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="certification-content">
              <div className="certification-icon">{iconData[cert.iconName] || <FaUniversity />}</div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.issuedDate && <span className="issued-date">Issued {cert.issuedDate}</span>}
            </div>
            <div className="certification-link animated-icon">
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
