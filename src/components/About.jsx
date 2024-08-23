import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faChalkboardTeacher, faCloud, faCode } from '@fortawesome/free-solid-svg-icons';

import './About.css'; // Ensure you have your custom styles here

const About = () => {
  return (
    <div className="about-section" id="about">
      <h2>Path To Expertise</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Jan 2022 - May 2024"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faUniversity} />}
        >
          <h3 className="vertical-timeline-element-title">Master of Science, Computer Science</h3>
          <h4 className="vertical-timeline-element-subtitle">University of Colorado Denver</h4>
          
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="May 2014 - Dec 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faUniversity} />}
        >
          <h3 className="vertical-timeline-element-title">Bachelor of Science, Computer Science</h3>
          <h4 className="vertical-timeline-element-subtitle">Noakhali Science and Technology University</h4>
          
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2024 - May 2024"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faChalkboardTeacher} />}
        >
          <h3 className="vertical-timeline-element-title">Teaching Assistant</h3>
          <h4 className="vertical-timeline-element-subtitle">University of Colorado Denver</h4>
          <p>Assisted in teaching, clarified concepts, graded assignments, and provided feedback to students.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2023 - Dec 2023"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faCloud} />}
        >
          <h3 className="vertical-timeline-element-title">Cloud Engineer Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Cerebrone.ai, USA</h4>
          <p>Enhanced CI/CD processes, orchestrated containerized applications using Docker and Kubernetes, and scripted automated tasks.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2019 - Dec 2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faCode} />}
        >
          <h3 className="vertical-timeline-element-title">Junior Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Symphony Softech LTD, Bangladesh</h4>
          <p>Developed comprehensive solutions for business budgeting, UI & database design, and collaborated across teams to ensure user requirements were met.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default About;