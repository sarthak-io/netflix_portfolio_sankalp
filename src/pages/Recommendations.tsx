import React from 'react';
import './Recommendations.css';
import chrisProfilePic from '../images/chris.jpg'; // Placeholder portrait

const Recommendations: React.FC = () => {
  return (
    <div className='timeline-container'>
      <div className="recommendation-card">
        <div className="recommendation-header">
          <img src={chrisProfilePic} alt="Aditi Sharma" className="profile-pic" />
          <div>
            <h3>Aditi Sharma</h3>
            <p>Producer, Paper Lantern Films</p>
            <p className="date">January 18, 2025</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>✨ "Sankalp is the rare filmmaker who can build a visual language, guide actors with care and still keep post-production perfectly organised. On <strong>Pegh</strong> he brought a warmth and vulnerability to every frame that we didn’t know the script was capable of."</p>
          <p>🎬 "He wears many hats without ego—writing late-night rewrites, planning blocking with the AD team and then jumping into the grade to make sure the mood survives the edit. I trust him with sensitive performances and with tight schedules because he communicates clearly and keeps the crew safe."</p>
          <p>🌈 "From branded films to festival shorts, Sankalp’s colour sensibilities and ability to pull intimate emotions out of crowded locations have elevated each project. I’ll work with him again in a heartbeat."</p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
