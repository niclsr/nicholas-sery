import React from 'react';
import subgenie from '../assets/images/subgenie.png';
import dcs from '../assets/images/dcs.png';
import localrag from '../assets/images/localrag.png';
import nowcandid from '../assets/images/nowcandid.png';
import '../assets/styles/Project.scss';

function Project() {
  return (
    <div className='projects-container' id='projects'>
      <h1>Projects</h1>
      <div className='projects-grid'>
        <div className='project'>
          <a href='https://github.com/niclsr/sub-genie' target='_blank' rel='noreferrer'>
            <img src={subgenie} className='zoom' alt='thumbnail' width='100%' />
          </a>
          <a href='https://github.com/niclsr/sub-genie' target='_blank' rel='noreferrer'>
            <h2>Sub Genie</h2>
          </a>
          <p>
          A microservices-based api that allows users to upload and generate subtitles for video and audio.
          </p>
        </div>
        <div className='project'>
          <a href='https://github.com/niclsr/local-rag' target='_blank' rel='noreferrer'>
            <img src={localrag} className='zoom' alt='thumbnail' width='100%' />
          </a>
          <a href='https://github.com/niclsr/local-rag' target='_blank' rel='noreferrer'>
            <h2>Local RAG</h2>
          </a>
          <p>
          Local RAG is a project that uses Ollama, Langchain, and Chroma to create a locally run chatbot similar to chatPDF.
          </p>
        </div>
        <div className='project'>
          <a
            href='#'
            rel='noreferrer'
          >
            <img src={dcs} className='zoom' alt='thumbnail' width='100%' />
          </a>
          <a
            href='#'
            rel='noreferrer'
          >
            <h2>DCS</h2>
          </a>
          <p>
          GenAI platforms integrating GPT-4 Turbo and Claude for real-time summarization and anomaly detection in logistics systems.
          </p>
        </div>
        <div className='project'>
          <a
            href='https://www.nowcandid.com/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={nowcandid} className='zoom' alt='thumbnail' width='100%' />
          </a>
          <a
            href='https://www.nowcandid.com/'
            target='_blank'
            rel='noreferrer'
          >
            <h2>Hilton Hyland Website</h2>
          </a>
          <p>
          Simple software suite for photographers:
          Social, Sports, Graduations, Portraits, & Special Events.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
