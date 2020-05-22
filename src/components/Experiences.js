import React from 'react';
import './Experiences.css';
import timeline from './timeline.json';

import { v4 as uuidv4 } from 'uuid';

export default function Experiences() {
    return (
        <section id="experience" className="timeline experiences-section">
            <h1 className="section-title">Experience</h1>
            <ul>
                {timeline.Timeline.map((timeline) => (
                    <li key={uuidv4(timeline)}>
                        <span className={`timeline-icon ${timeline.icon}`} aria-hidden="true"></span>
                        <div className="content">
                            <h5>{timeline.title}</h5>
                            <p>{timeline.location}</p>
                        </div>
                        <div className="time">
                            <h4>{timeline.time}</h4>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}