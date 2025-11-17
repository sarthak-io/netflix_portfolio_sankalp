import React, { useEffect, useState } from 'react';
import './WorkPermit.css';
import { getWorkPermit } from '../queries/getWorkPermit';
import { WorkPermit as IWorkPermit } from '../types';

const fallbackWorkPermit: IWorkPermit = {
  visaStatus: 'Indian passport · Freelance artist visa',
  expiryDate: new Date('2026-12-31'),
  summary:
    'Delhi NCR-based director, writer, cinematographer and colourist collaborating on films, branded content and long-form narratives across India and abroad.',
  additionalInfo:
    'Comfortable travelling for productions, available for remote colour work, and able to support international shoots with quick paperwork turnarounds.'
};

const WorkPermit: React.FC = () => {

  const [workPermitData, setWorkPermitData] = useState<IWorkPermit>(fallbackWorkPermit);
  useEffect(() => {
    async function fetchWorkPermitData() {
      try {
        const data = await getWorkPermit();
        setWorkPermitData(data);
      } catch (error) {
        console.error('Unable to fetch work permit data, using default copy instead.', error);
      }
    }
    fetchWorkPermitData();
  }, []);

  return (
    <div className="work-permit-container">
      <div className="work-permit-card">
        <h2 className="work-permit-headline">🎬 Availability & Travel</h2>
        <p className="work-permit-summary">
          {workPermitData.summary}
        </p>
        <p className="work-permit-summary">
          I'm currently on a <strong>{workPermitData.visaStatus}</strong> 🛂. My paperwork is cleared through <strong>{new Date(workPermitData.expiryDate).toLocaleDateString()}</strong> 📅, so I can jump onto productions without delays.
        </p>
        <p className="additional-info">{workPermitData.additionalInfo}</p>
      </div>
    </div>
  );
};

export default WorkPermit;
