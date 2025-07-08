import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

// React Icons for all technologies
import {
  SiHtml5,
  SiCss3,
  // SiSass,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  // SiSwift,
  SiNpm,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiPython,
  SiDocker,
  SiDjango,
  SiKotlin,
  SiNumpy,
  SiPandas,
  SiLinux
  // SiAws
} from "react-icons/si";

const iconMap = {
  html5: <SiHtml5 size={40} />,
  css3: <SiCss3 size={40} />,
  // sass: <SiSass size={40} />,
  javascript: <SiJavascript size={40} />,
  reactjs: <SiReact size={40} />,
  nodejs: <SiNodedotjs size={40} />,
  // swift: <SiSwift size={40} />,
  npm: <SiNpm size={40} />,
  postgresql: <SiPostgresql size={40} />,
  mysql: <SiMysql size={40} />,
  firebase: <SiFirebase size={40} />,
  python: <SiPython size={40} />,
  docker: <SiDocker size={40} />,
  django: <SiDjango size={40} />,
  kotlin: <SiKotlin size={40} />,
  numpy: <SiNumpy size={40} />,
  pandas: <SiPandas size={40} />,
  linux: <SiLinux size={40} />
  // aws: <SiAws size={40} />
};

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skill, i) => (
            <li
              key={i}
              className="software-skill-inline"
              title={skill.skillName}
            >
              {/* Get icon from map or fallback */}
              {iconMap[skill.skillName.toLowerCase()] || (
                <span style={{fontSize: 40}}>⚙️</span>
              )}
              <p>{skill.skillName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
