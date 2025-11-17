import React, { useEffect, useState } from 'react';
import './Skills.css';
import { getSkills } from '../queries/getSkills';

import { FaReact, FaNodeJs, FaAws, FaDocker, FaJava, FaPenFancy, FaFilm, FaPalette, FaPeopleCarry, FaCameraRetro, FaLightbulb } from 'react-icons/fa';
import { SiRubyonrails, SiTypescript, SiPostgresql, SiMysql, SiKubernetes, SiGooglecloud, SiSpringboot, SiPhp, SiNetlify, SiHeroku, SiRabbitmq, SiImessage } from 'react-icons/si';
import { Skill } from '../types';

const iconMap: { [key: string]: JSX.Element } = {
  SiRubyonrails: <SiRubyonrails />,
  FaNodeJs: <FaNodeJs />,
  SiSpringboot: <SiSpringboot />,
  FaJava: <FaJava />,
  SiPhp: <SiPhp />,
  FaReact: <FaReact />,
  SiTypescript: <SiTypescript />,
  FaAws: <FaAws />,
  FaDocker: <FaDocker />,
  SiPostgresql: <SiPostgresql />,
  SiMysql: <SiMysql />,
  SiKubernetes: <SiKubernetes />,
  SiGooglecloud: <SiGooglecloud />,
  SiHeroku: <SiHeroku />,
  SiNetlify: <SiNetlify />,
  SiRabbitmq: <SiRabbitmq />,
  SiImessage: <SiImessage />,
  FaPenFancy: <FaPenFancy />,
  FaFilm: <FaFilm />,
  FaPalette: <FaPalette />,
  FaPeopleCarry: <FaPeopleCarry />,
  FaCameraRetro: <FaCameraRetro />,
  FaLightbulb: <FaLightbulb />,
};

const FALLBACK_SKILLS: Skill[] = [
  {
    name: 'Screenwriting',
    category: 'Story & Writing',
    description: 'Story ideation, character arcs, non-linear structures and emotionally grounded dialogue.',
    icon: 'FaPenFancy'
  },
  {
    name: 'Concept Development',
    category: 'Story & Writing',
    description: 'World-building, tonal treatments and pitch decks for narrative and branded content.',
    icon: 'FaLightbulb'
  },
  {
    name: 'Direction',
    category: 'Direction',
    description: 'Visual staging, multi-genre tonal control and collaborative, safe production environments.',
    icon: 'FaFilm'
  },
  {
    name: 'Cinematography',
    category: 'Cinematography & Colour',
    description: 'Handheld and studio camera work, naturalistic lighting and stylised blocking.',
    icon: 'FaCameraRetro'
  },
  {
    name: 'Colour Grading',
    category: 'Cinematography & Colour',
    description: 'Story-driven grades with precise adjustments, mood boards and look development workflows.',
    icon: 'FaPalette'
  },
  {
    name: 'Creative Leadership',
    category: 'Collaboration',
    description: 'Clear communication, department alignment and emotionally safe sets.',
    icon: 'FaPeopleCarry'
  }
];


const Skills: React.FC = () => {

  const [skillsData, setSkillsData] = useState<Skill[]>(FALLBACK_SKILLS);

  useEffect(() => {
    async function fetchSkills() {
      try {
        const data = await getSkills();
        setSkillsData(data);
      } catch (error) {
        console.error('Unable to fetch skills from CMS, using curated film skillset.', error);
      }
    }

    fetchSkills()
  }, []);

  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});


  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter: any, i: number) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
