import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import '../assets/styles/Main.scss';
import { LinkedIn } from '@mui/icons-material';

function Main() {
  return (
    <div className='container'>
      <div className='about-section'>
        <div className='image-wrapper hidden'>
          <img
            src='https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/avatar_circle.jpeg'
            alt='Avatar'
          />
        </div>
        <div className='content'>
          <div className='social_icons'>
            <a
              href='https://github.com/niclsr'
              target='_blank'
              rel='noreferrer'
            >              
              <GitHubIcon />
            </a>
            <a
              href='mailto:nicholasserya@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              <EmailIcon />
            </a>
            <a href='tel:+18103739295' target='_blank' rel='noreferrer'>
              <PhoneAndroidIcon />
            </a>
            {/* <a href='https://www.linkedin.com/in/nicholas-sery' target='_blank' rel='noreferrer'>
              <LinkedIn/>
            </a> */}
          </div>
          <h1>Nicholas Sery</h1>
          <p>AI Engineer / Full Stack Developer</p>
          <p className="location">Woodbury, NY</p>

          <div className='mobile_social_icons'>
            <a
              href='https://github.com/niclsr'
              target='_blank'
              rel='noreferrer'
            >
              <GitHubIcon />
            </a>
            <a
              href='mailto:nicholasserya@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              <EmailIcon />
            </a>
            <a href='tel:+18103739295' target='_blank' rel='noreferrer'>
              <PhoneAndroidIcon />
            </a>
            <a href='https://www.linkedin.com/in/nicholas-sery' target='_blank' rel='noreferrer'>
              <LinkedIn/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
