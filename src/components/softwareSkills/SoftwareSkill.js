import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => (


            <li key = {i} className = "software-skill-inline" name={skills.skillName}>
              {skills.fontAwesomeClassname ? (
                // Font icon case
                <i className={skills.fontAwesomeClassname}></i>
              ) : skills.iconComponent ? (
                // Custom React component case
                <span className="icon-component">{skills.iconComponent}</span>
              ) : null}
              <p>{skills.skillName}</p>
              </li>
          ))}
          </ul>
        </div>
      </div>
  );
}
