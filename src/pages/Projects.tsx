import React, { useEffect, useState } from 'react';
import './Projects.css';
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaDocker, FaAngular, FaGithub, FaGitlab, FaGoogle, FaJava, FaJenkins, FaMicrosoft, FaPython, FaVuejs } from 'react-icons/fa';
import { SiRubyonrails, SiPostgresql, SiMongodb, SiMaterialdesign, SiHtml5, SiCss3, SiJquery, SiAwsamplify, SiFirebase, SiTerraform, SiArgo } from 'react-icons/si';
import { Project } from '../types';
import { getProjects } from '../queries/getProjects';
import { GrDeploy, GrKubernetes } from "react-icons/gr";

const techIcons: { [key: string]: JSX.Element } = {
  "ReactJS": <FaReact />,
  "NodeJS": <FaNodeJs />,
  "AWS": <FaAws />,
  "PostgreSQL": <SiPostgresql />,
  "MongoDB": <SiMongodb />,
  "Ruby On Rails": <SiRubyonrails />,
  "Material UI": <SiMaterialdesign />,
  "HTML5": <SiHtml5 />,
  "CSS3": <SiCss3 />,
  "jQuery": <SiJquery />,
  "AWS-ECS": <SiAwsamplify />,
  'Cognito': <FaAws />,
  'Lambda': <FaAws />,
  'ECS': <FaAws />,
  'Jenkins': <FaJenkins />,
  'Docker': <FaDocker />,
  'GraphQL': <FaDatabase />,
  'CI/CD': <FaGitlab />,
  'GitLab': <FaGitlab />,
  'GitHub': <FaGithub />,
  'Heroku': <GrDeploy />,
  'Netlify': <GrDeploy />,
  'Firebase': <SiFirebase />,
  'GCP': <FaGoogle />,
  'Azure': <FaMicrosoft />,
  'Kubernetes': <GrKubernetes />,
  'Terraform': <SiTerraform />,
  'ArgoCD': <SiArgo />,
  'Java': <FaJava />,
  'Spring Boot': <FaJava />,
  'Python': <FaPython />,
  'Node.js': <FaNodeJs />,
  'Express.js': <FaNodeJs />,
  'Hibernate': <FaJava />,
  'Maven': <FaJava />,
  'Gradle': <FaJava />,
  'JUnit': <FaJava />,
  'Mockito': <FaJava />,
  'Jest': <FaReact />,
  'React': <FaReact />,
  'Angular': <FaAngular />,
  'Vue.js': <FaVuejs />,
  'Next.js': <FaReact />,
  'Gatsby': <FaReact />,
  'Nuxt.js': <FaVuejs />,
  'Redux': <FaReact />,
  'Vuex': <FaVuejs />,
  'Tailwind CSS': <SiCss3 />,
  'Bootstrap': <SiCss3 />,
  'JQuery': <SiJquery />,
};


const FALLBACK_PROJECTS: Project[] = [
  {
    title: 'Karakoram',
    description: 'A contemplative short film about siblings racing sunrise in the mountains, captured in harsh light and gentle pastels.',
    techUsed: 'Writing, Direction, Cinematography',
    image: { url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80' }
  },
  {
    title: 'Pegh',
    description: 'Indie drama following a radio host drifting through Delhi winters, with moody handheld camerawork and whispered dialogue.',
    techUsed: 'Direction, Colour Grading, Sound Design',
    image: { url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80' }
  },
  {
    title: 'Ghalib Chai Bar',
    description: 'A comedic ensemble short capturing the rush of an Old Delhi tea room, blending theatrical blocking with observational humour.',
    techUsed: 'Screenwriting, Direction, Editing',
    image: { url: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80' }
  },
  {
    title: 'Anima',
    description: 'Feature-length thriller with bespoke LUTs and HDR deliveries that mirror a protagonist’s emotional descent.',
    techUsed: 'Colour Grading, Look Development, HDR Mastering',
    image: { url: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1000&q=80' }
  }
];

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(FALLBACK_PROJECTS)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error('Unable to fetch projects, displaying curated films instead.', error);
      }
    }

    fetchProjects()
  }, [])

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <img src={project.image.url} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.techUsed.split(', ').map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || "🔧"} {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
