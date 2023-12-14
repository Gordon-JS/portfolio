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
              ) : skills.iconPath ? (
                // PNG image case
                <img
                  src={skills.iconPath} // Make sure to add the appropriate property in your data
                  alt={skills.skillName}
                  className="software-skill-image"
                  />
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

//           </p>
//               )
//               )}
//             </li>{
//             return (
//               <li
//                 key={i}
//                 className="software-skill-inline"
//                 name={skills.skillName}
//               >
//                 <i className={skills.fontAwesomeClassname}></i>
//                 <p>{skills.skillName}</p>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// }
