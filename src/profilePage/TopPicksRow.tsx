import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import { FaFilm, FaPenFancy, FaPalette, FaAward, FaEnvelope, FaMusic, FaBook, FaHandshake } from 'react-icons/fa';

type ProfileType = 'director' | 'writer' | 'colorist' | 'cinephile';

interface TopPicksRowProps {
  profile: ProfileType;
}

const profileLabels: Record<ProfileType, string> = {
  director: 'Directors',
  writer: 'Writers',
  colorist: 'Colourists',
  cinephile: 'Cinephiles'
};

const topPicksConfig: Record<ProfileType, { title: string; imgSrc: string; route: string; icon: JSX.Element }[]> = {
  director: [
    { title: "Filmography", imgSrc: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=600&q=80", icon: <FaFilm />, route: "/work-experience" },
    { title: "Projects", imgSrc: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=600&q=80", icon: <FaFilm />, route: "/projects" },
    { title: "Recommendations", imgSrc: "https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=600&q=80", icon: <FaHandshake />, route: "/recommendations" },
    { title: "Contact", imgSrc: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80", icon: <FaEnvelope />, route: "/contact-me" }
  ],
  writer: [
    { title: "Creative Toolkit", imgSrc: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=600&q=80", route: "/skills", icon: <FaPenFancy /> },
    { title: "Blogs", imgSrc: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&w=600&q=80", route: "/blogs", icon: <FaBook /> },
    { title: "Reading List", imgSrc: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=600&q=80", route: "/reading", icon: <FaBook /> },
    { title: "Contact", imgSrc: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80", route: "/contact-me", icon: <FaEnvelope /> }
  ],
  colorist: [
    { title: "Projects", imgSrc: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=600&q=80", route: "/projects", icon: <FaPalette /> },
    { title: "Awards", imgSrc: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80", route: "/certifications", icon: <FaAward /> },
    { title: "Availability", imgSrc: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80", route: "/work-permit", icon: <FaFilm /> },
    { title: "Contact", imgSrc: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80", route: "/contact-me", icon: <FaEnvelope /> }
  ],
  cinephile: [
    { title: "Music", imgSrc: "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&w=600&q=80", route: "/music", icon: <FaMusic /> },
    { title: "Reading", imgSrc: "https://images.unsplash.com/photo-1455885666463-1b30cf3c61c8?auto=format&fit=crop&w=600&q=80", route: "/reading", icon: <FaBook /> },
    { title: "Blogs", imgSrc: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80", route: "/blogs", icon: <FaPenFancy /> },
    { title: "Contact", imgSrc: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80", route: "/contact-me", icon: <FaEnvelope /> }
  ]
};


const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profileLabels[profile]}</h2>
      <div className="card-row">
      {topPicks.map((pick, index) => (
          <div 
            key={index} 
            className="pick-card" 
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }} // Adding delay based on index
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
