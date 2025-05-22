import React from 'react';
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import {
  faBrain,
  faLayerGroup,
  faServer,
  faRobot,
  faCogs,
  faCloud,
} from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsAI = [
  'LangChain',
  'LangGraph',
  'Hugging Face',
  'OpenAI',
  'Rasa',
  'Claude',
  'TensorFlow',
  'PyTorch',
  'Scikit-learn',
];

const labelsBackend = [
  'FastAPI',
  'Flask',
  'Django',
  'Node.js',
  'Express.js',
  'RESTful APIs',
  'GraphQL',
  'WebSocket',
];

const labelsCloud = [
  'AWS (S3, EC2, Lambda)',
  'Docker',
  'Kubernetes',
  'CI/CD',
  'Microservices',
  'Cloud Native',
];

const labelsFrontend = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'Radix UI',
  'Material UI',
];

const labelsDatabase = [
  'Supabase',
  'ChromaDB',
  'pgvector',
  'PostgreSQL',
  'MongoDB',
  'Vector Stores',
];

const labelsLLM = [
  'RAG',
  'LLMOps',
  'Vector Embeddings',
  'HyDE',
  'Multi-agent Systems',
  'Chatbots',
];

function Expertise() {
  return (
    <div className='container' id='expertise'>
      <div className='skills-container'>
        <h1>Expertise</h1>
        <div className='skills-grid'>
          <div className='skill'>
            <FontAwesomeIcon icon={faBrain} size='3x' />
            <h3>AI & Machine Learning</h3>
            <div className='flex-chips'>
              {labelsAI.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          <div className='skill'>
            <FontAwesomeIcon icon={faRobot} size='3x' />
            <h3>LLM & GenAI</h3>
            <div className='flex-chips'>
              {labelsLLM.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          <div className='skill'>
            <FontAwesomeIcon icon={faCloud} size='3x' />
            <h3>Cloud & DevOps</h3>
            <div className='flex-chips'>
              {labelsCloud.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          <div className='skill'>
            <FontAwesomeIcon icon={faLayerGroup} size='3x' />
            <h3>Backend Development</h3>
            <div className='flex-chips'>
              {labelsBackend.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          <div className='skill'>
            <FontAwesomeIcon icon={faReact} size='3x' />
            <h3>Frontend Development</h3>
            <div className='flex-chips'>
              {labelsFrontend.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          <div className='skill'>
            <FontAwesomeIcon icon={faServer} size='3x' />
            <h3>Database & Storage</h3>
            <div className='flex-chips'>
              {labelsDatabase.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
