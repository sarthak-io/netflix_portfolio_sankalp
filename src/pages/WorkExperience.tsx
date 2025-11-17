import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';
import { TimelineItem } from '../types';
import { getTimeline } from '../queries/getTimeline';

const FALLBACK_TIMELINE: TimelineItem[] = [
  {
    timelineType: 'work',
    name: 'Karakoram — Short Film',
    title: 'Writer & Director',
    techStack: 'Direction · Screenwriting · Production Design',
    summaryPoints: [
      'Authored and directed a meditative sibling drama set in Ladakh.',
      'Managed a lean mountain-unit crew while keeping performances grounded and intimate.'
    ],
    dateRange: '2025'
  },
  {
    timelineType: 'work',
    name: 'Pegh — Short Film',
    title: 'Director',
    techStack: 'Direction · Mood Films · Collaboration',
    summaryPoints: [
      'Conceived and helmed an indie drama exploring isolation in Delhi winters.',
      'Used handheld cinematography and expressive colour palettes to accentuate performances.'
    ],
    dateRange: '2024'
  },
  {
    timelineType: 'work',
    name: 'Ghalib Chai Bar — Short Film',
    title: 'Writer & Director',
    techStack: 'Comedy · Dialogue · Ensemble Direction',
    summaryPoints: [
      'Wrote a slice-of-life comedy centred on a bustling Delhi tea room.',
      'Directed a multi-character ensemble with improvisation-friendly blocking.'
    ],
    dateRange: '2024'
  },
  {
    timelineType: 'work',
    name: 'Anima — Feature Film',
    title: 'Colourist & Digital Intermediate Lead',
    techStack: 'Colour Grading · HDR · Look Development',
    summaryPoints: [
      'Led the colour pipeline for a stylised thriller, building custom LUTs across HDR and SDR deliveries.',
      'Partnered with the director to mirror emotional beats with cool-to-warm transitions.'
    ],
    dateRange: '2024'
  },
  {
    timelineType: 'work',
    name: 'Curtain Call — Anthology Series',
    title: 'Director of Photography & Colourist',
    techStack: 'Cinematography · Lighting · Remote Grade',
    summaryPoints: [
      'Shot six anthology episodes, designing bespoke looks per story world.',
      'Finished the entire series grade remotely, ensuring calibrated monitors for the post team.'
    ],
    dateRange: '2023'
  },
  {
    timelineType: 'work',
    name: 'Afterhours — Short Film',
    title: 'Writer-Director',
    techStack: 'Experimental Narratives · Soundscapes',
    summaryPoints: [
      'Crafted an atmospheric exploration of loneliness with minimal dialogue.',
      'Balanced neon-inspired lighting with textured 16mm-inspired grades.'
    ],
    dateRange: '2022'
  },
  {
    timelineType: 'education',
    name: 'Film & Television Institute of India',
    title: 'Film Direction & Screenwriting Diploma',
    techStack: 'Story Development · Production Workshops',
    summaryPoints: [
      'Focused on character-driven storytelling and collaborative directing.',
      'Graduated with a thesis film that premiered at student film festivals.'
    ],
    dateRange: '2018 – 2020'
  },
  {
    timelineType: 'education',
    name: 'Delhi University',
    title: 'B.A. (Hons) · Mass Media',
    techStack: 'Film Theory · Editing · Photography',
    summaryPoints: [
      'Built the foundation for cinematography and post-production workflows.',
      'Produced short documentaries covering neighbourhood stories across Delhi NCR.'
    ],
    dateRange: '2014 – 2017'
  }
];

const WorkExperience: React.FC = () => {

  const [timeLineData, setTimeLineData] = useState<TimelineItem[]>(FALLBACK_TIMELINE);

  useEffect(() => {
    async function fetchTimelineItem() {
      try {
        const data = await getTimeline();
        setTimeLineData(data);
      } catch (error) {
        console.error('Unable to fetch timeline data, falling back to the curated filmography.', error);
      }
    }
    fetchTimelineItem();
  }, []);

  const renderSummary = (summaryPoints: TimelineItem['summaryPoints']) => {
    const entries = Array.isArray(summaryPoints) ? summaryPoints : [summaryPoints];
    const cleaned = entries
      .map((point) => point.trim())
      .filter((point) => point.length > 0);
    if (cleaned.length === 0) return null;
    return (
      <ul className="timeline-summary">
        {cleaned.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">📅 Work Experience & Education Timeline</h2>
      </div>
      <VerticalTimeline>
        {timeLineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.timelineType}`}
            contentStyle={
              item.timelineType === "work"
                ? index === 0
                  ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                  : { background: 'rgb(240, 240, 240)', color: '#fff' }
                : { background: 'rgb(255, 224, 230)', color: '#fff' } // Lighter red for education
            }
            contentArrowStyle={
              item.timelineType === "work"
                ? { borderRight: index === 0 ? '7px solid rgb(33, 150, 243)' : '7px solid rgb(240, 240, 240)' }
                : { borderRight: '7px solid rgb(255, 224, 230)' }
            }
            date={item.dateRange}
            iconStyle={
              item.timelineType === "work"
                ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                : { background: 'rgb(255, 160, 200)', color: '#fff' } // Softer red for education icon
            }
            icon={item.timelineType === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            {item.timelineType === "work" ? (
              <div style={{ color: 'black' }}>
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
                <p className="vertical-timeline-element-tech">🎬 {item.techStack}</p>
                {renderSummary(item.summaryPoints)}
              </div>
            ) : (
              <div style={{ color: 'black' }}>
                <h3 className="vertical-timeline-element-title">{item.name}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.title}</h4>
                {renderSummary(item.summaryPoints)}
              </div>
            )}
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
