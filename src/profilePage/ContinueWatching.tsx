import React from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';

type ProfileType = 'director' | 'writer' | 'colorist' | 'cinephile';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const profileLabels: Record<ProfileType, string> = {
  director: 'Directors',
  writer: 'Writers',
  colorist: 'Colourists',
  cinephile: 'Cinephiles'
};

const continueWatchingConfig: Record<ProfileType, { title: string; imgSrc: string; link: string }[]> = {
  director: [
    { title: "Projects", imgSrc: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80", link: "/projects" },
    { title: "Recommendations", imgSrc: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80", link: "/recommendations" },
    { title: "Contact", imgSrc: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80", link: "/contact-me" }
  ],
  writer: [
    { title: "Blogs", imgSrc: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?auto=format&fit=crop&w=800&q=80", link: "/blogs" },
    { title: "Reading", imgSrc: "https://images.unsplash.com/photo-1463320898484-cdee8141c787?auto=format&fit=crop&w=800&q=80", link: "/reading" },
    { title: "Contact", imgSrc: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80", link: "/contact-me" }
  ],
  colorist: [
    { title: "Awards", imgSrc: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80", link: "/certifications" },
    { title: "Availability", imgSrc: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80", link: "/work-permit" },
    { title: "Contact", imgSrc: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80", link: "/contact-me" }
  ],
  cinephile: [
    { title: "Music", imgSrc: "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&w=800&q=80", link: "/music" },
    { title: "Reading", imgSrc: "https://images.unsplash.com/photo-1455885666463-1b30cf3c61c8?auto=format&fit=crop&w=800&q=80", link: "/reading" },
    { title: "Blogs", imgSrc: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80", link: "/blogs" }
  ]
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profileLabels[profile]}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <Link to={pick.link} key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
