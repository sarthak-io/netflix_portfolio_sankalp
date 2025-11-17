import React from 'react';
import './ProfileCard.css';

interface ProfileCardProps {
  label: string;
  image: string;
  onClick: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ label, image, onClick }) => {
  return (
    <div className="profile-card" onClick={onClick}>
      <div className="image-container">
        <img src={image} alt={`${label} profile`} className="profile-image" />
      </div>
      <h3 className="profile-name">{label}</h3>
    </div>
  );
};

export default ProfileCard;
