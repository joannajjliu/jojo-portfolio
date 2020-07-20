import React from "react";
import "../App.css";
import data from "./projects.json";
import { v4 as uuidv4 } from "uuid";

export default function Projects() {
  return (
    <section id="projects" className="my-5 projects-section">
      <h1 className="mb-4">Projects</h1>
      <div className="mx-3 row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {data.Projects.map((project) => (
          <div key={uuidv4(project)} className="col mb-4">
            <div className="card h-100">
              {/* <img 
                    src={process.env.PUBLIC_URL + "/logo192.png"} 
                    className="card-img-top" 
                    alt="project preview image"/> */}
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
              {project.code && (
                <div className="text-right">
                  <div className="card-body">
                    <a
                      href={project.code}
                      className="project-button"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      &lt; &#47; &gt;
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
