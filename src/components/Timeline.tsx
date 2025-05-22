import React from 'react';
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id='history'>
      <div className='items-container'>
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date='October 2023 - Present'
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className='vertical-timeline-element-title'>
              Full-Stack Developer / AI Engineer
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
              HatchWorks
            </h4>
            <p>
              • Designed and deployed GenAI platforms integrating GPT-4 Turbo and Claude for real-time summarization and anomaly detection in logistics systems<br/>
              • Built predictive maintenance models with sensor-based data for proactive issue flagging<br/>
              • Collaborated closely with clients and key stakeholders to gather requirements and deliver solutions
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='April 2021 - September 2023'
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className='vertical-timeline-element-title'>
              AI Engineer
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
              Zoolatech
            </h4>
            <p>
              • Engineered SubGenie, a Flask-based LLMOps microservice for automatic subtitle generation<br/>
              • Developed AI agents and chatbots leveraging LLMs, vector embeddings, and RAG techniques<br/>
              • Built GrantMatch, a multi-agent GenAI recommendation engine using LangGraph and RAG with HyDE-based query rewriting
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='June 2019 - March 2021'
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className='vertical-timeline-element-title'>
              Junior Full Stack Developer
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
              Webdevium
            </h4>
            <p>
              • Rebuilt NowCandid's front-end using React, Next.js, TypeScript, and Storybook<br/>
              • Created Local RAG, a fully offline chatbot using Ollama, LangChain, and ChromaDB<br/>
              • Built 3D conveyor visualizations and backend APIs using FastAPI, React, TypeScript, and Three.js
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='2015 - 2019'
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className='vertical-timeline-element-title'>
              Bachelor's Degree
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
              Binghamton University
            </h4>
            <p>Computer Science</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
