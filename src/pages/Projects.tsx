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
  title: 'The Guardian',
  description: 'After a catastrophic gas leak births a criminal ecosystem called Hydra, a remorse-ridden vigilante must confront the empire he once tried to destroy and the violence he carries within. Fifteen years after an industrial gas leak decimated Visakhapatnam, the city survives as a toxic scar ruled by Hydra. Once a believer in justice, the Guardian massacred Hydra’s factory — killing workers, guards, and his father’s idealism. Hydra mutates through flesh, powder, and guns while a mysterious Sniper rises as a precision killer. With his brother joining rebels and children disappearing, the Guardian must confront Hydra, the rebels, and his fractured morality. Can justice exist without becoming murder?',
  techUsed: 'Writing, Direction, Worldbuilding',
  image: { url: 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=1000&q=80' }
},
{
  title: 'Mirror',
  description: 'A young woman haunted by a forgotten childhood falls into a surreal relationship with a man who may be memory, ghost, or fractured reflection. Shanaya performs glamour for the world but hides grief and abandonment. A man slips in and out of her memories, blurring whether he is lover, ghost, or projection. A golden spiked mirror follows her like a portal to wounds she buried. Toxic relationships, lost ambition, and hallucination unravel identity as violence erupts and memory dissolves. In the end, past and present collide in a reckoning where she must face the truth the mirror held all along.',
  techUsed: 'Writing, Direction, Cinematic Design',
  image: { url: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1000&q=80' }
},
{
  title: 'Nolan Babu',
  description: 'When a Bengali father becomes convinced Christopher Nolan is Satyajit Ray’s stolen cinematic child, he launches a chaotic mission to reclaim him for India. Nikhil just wants to finish Oppenheimer, but his lungi-clad father declares Nolan is Ray’s secret offspring engineered by MI6. Embassy emails, conspiracy deep-dives, and fish curry diplomacy follow. As nationalism, film obsession, and generational pride collide, the father builds a movement to “bring Chintu Ray home.” A sharp satire on cinema worship, patriotism, and delusional Indian dads with unlimited Wi-Fi.',
  techUsed: 'Screenwriting, Direction, Comedy Structuring',
  image: { url: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1000&q=80' }
},
{
  title: 'Presence',
  description: 'In a future where grief is automated, an NRI father and his daughter rediscover mourning during a robotic funeral in his ancestral Indian home. Rituals once performed by trembling hands are now executed by machines. Memories of summers, scoldings, and warmth collide with sterilized modernity. His daughter learns tradition for the first time as the house becomes a time capsule of loss and touch. Visually inspired by The Starry Night, Presence is a melancholic meditation on memory, mourning, and the fragile humanity technology cannot replace.',
  techUsed: 'Writing, Direction, Visual Atmosphere Design',
  image: { url: 'https://images.unsplash.com/photo-1432839318976-b5c5785ce57b?auto=format&fit=crop&w=1000&q=80' }
},
{
  title: 'Mootri (Closeted Truth)',
  description: 'During Partition’s violence, a young woman hides in a public toilet where hatred seeps through the trembling walls. Muskan clings to survival as chants grow closer. Graffiti becomes a haunting commentary on division. When the door breaks, brutality is swift, stripping identity and dignity. In her final breath, she writes her truth: “Main Muskan hoon. Na Hindu, na Musalman. Sirf laash.” A brutal, lyrical short confronting how communal violence erases the people history forgets.',
  techUsed: 'Writing, Direction, Social Drama Construction',
  image: { url: 'https://images.unsplash.com/photo-1536063211352-0b94219f6216?auto=format&fit=crop&w=1000&q=80' }
},
{
  title: 'Within',
  description: 'A lonely mall security guard trapped in monotony awakens emotionally when a stray child and stray dog offer him moments of tenderness. He moves through life like a machine until a barefoot child shares paper boats, chocolate, and joy. Small acts soften him, breaking open years of numbness. When the child disappears one day, grief floods him. In a mall washroom, he imitates the child’s playful water flick — and laughter finally escapes him. A quiet, stirring short about human connection returning a man to himself.',
  techUsed: 'Writing, Direction, Observational Realism',
  image: { url: 'https://images.unsplash.com/photo-1471903551279-56c1af5c8c56?auto=format&fit=crop&w=1000&q=80' }
},
{
  title: 'Kalyug Ka Hero',
  description: 'Heaven is hiring a savior, but in a world ruled by algorithms and memes, Ram and Krishna must prove who is viral enough to save humanity. In a divine interview chamber, Ram argues discipline while Krishna pitches charm and strategy for short-attention-span Earth. Their debate spirals from exile and dharma to Tinder bios and WhatsApp forwards. Ironically, Earth is saved by a viral AI meme that sparks accidental enlightenment. A biting satire on faith, fame, and modern spirituality.',
  techUsed: 'Screenwriting, Satire Direction, Worldbuilding',
  image: { url: 'https://images.unsplash.com/photo-1508919801845-fc2ae1bc1d1d?auto=format&fit=crop&w=1000&q=80' }
},
{
  title: 'Formaldehyde',
  description: 'Two strangers on a dinner date slowly reveal through fractured memories that they are both killers shaped by childhood wounds. Aprajita fears abandonment; Abhijeet fears imperfection. Their flashbacks unravel into a sister’s suicide, obsessive love, and murders committed in the name of validation. Neither knows the other’s guilt. Their connection becomes a chilling revelation of how grief can shape monsters who still crave affection. An unsettling portrait of trauma mistaken for destiny.',
  techUsed: 'Writing, Direction, Psychological Thriller Construction',
  image: { url: 'https://images.unsplash.com/photo-1521185496955-15097b20c5fe?auto=format&fit=crop&w=1000&q=80' }
},
{
  title: 'Choices',
  description: 'A young woman returns to the sculptor of her childhood bracelet and confronts the tragic spirals consuming her closest friends — learning that destiny isn’t magic but carved through choices. Jasmine falls into transactional relationships and faces brutality when a private video leaks. Raghav, haunted by witnessing his parents’ murder, nears violent revenge. Vrinda blames the bracelet, believing it cursed them, but the sculptor reminds her life is shaped by choices, not wishes. As she races to save them both, the film becomes a meditation on how small decisions carve the fate we inhabit.',
  techUsed: 'Writing, Direction, Ensemble Drama Craft',
  image: { url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80' }
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
