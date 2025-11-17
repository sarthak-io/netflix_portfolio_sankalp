import React, { useEffect, useState } from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { getProfileBanner } from '../queries/getProfileBanner';
import { ProfileBanner as ProfileBannerType } from '../types';

const FALLBACK_PROFILE_BANNER: ProfileBannerType = {
  backgroundImage: {
    url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80'
  },
  headline: 'Sankalp Chaturvedi · Director | Writer | Cinematographer | Colourist',
  resumeLink: { url: 'https://drive.google.com/file/d/1j4ySankalpCV' },
  linkedinLink: 'https://www.linkedin.com/in/sankalp-chaturvedi',
  profileSummary:
    'Delhi NCR-based storyteller crafting intimate films, branded narratives and long-form pieces with a director’s eye, a cinematographer’s instincts and a colourist’s precision.'
};

const ProfileBanner: React.FC = () => {
  const [bannerData, setBannerData] = useState<ProfileBannerType>(FALLBACK_PROFILE_BANNER);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProfileBanner();
        setBannerData(data);
      } catch (error) {
        console.error('Unable to reach DatoCMS, rendering Sankalp’s default hero.', error);
      }
    }
    fetchData();
  }, []);

  const handlePlayClick = () => {
    window.open(bannerData.resumeLink.url, '_blank');
  };

  const handleLinkedinClick = () => { 
    window.open(bannerData.linkedinLink, '_blank');
  }

  return (
    <div
      className="profile-banner"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.85)), url(${bannerData.backgroundImage?.url})`
      }}
    >
      <div className="banner-content">
        <h1 className="banner-headline" id='headline'>{bannerData.headline}</h1>
        <p className="banner-description">
          {bannerData.profileSummary}
        </p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="Linkedin" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
