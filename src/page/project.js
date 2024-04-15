// import React from 'react';
// import './project.css';

// import Coke from "../img/coke.png"
// // import CokePage from "../web/coke/index.html"
// import Harley from "../img/harley.png"

// const Project = () => {
//   return (
//     <div className="project-intro">
//       <h2>Project</h2>
//       <div className="project-item">
//         <img src={Coke} alt="coca cola" className="project-image" />
//         <div className="project-text">
//           <h3>Coca-Cola</h3>
//           <p>
//             코카콜라 웹 사이트
//           </p>
//           <a 
//             href="https://rhakdkrehd.github.io/Coca-Cola/index.html"
//             target="_blank" rel="noreferrer"
//           >
//             작업물 보러 가기
//           </a>
//         </div>
//       </div>
//       <div className="project-item">
//         <img src={Harley} alt="harley" className="project-image" />
//         <div className="project-text">
//           <h3>Harley</h3>
//           <p>
//             할리데이비슨 웹 사이트
//           </p>
//           <a 
//             href="https://rhakdkrehd.github.io/harley/index.html"
//             target="_blank" rel="noreferrer"
//           >
//             작업물 보러 가기
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Project;

import React from 'react';
import './project.css';
import ProjectData from './projectData'; // 동적 데이터

const Project = () => {
  return (
    <div className="project-intro">
      <h2>Project</h2>
      {ProjectData.map((project, index) => (
        <div className="project-item" key={index}>
          <img src={project.image} alt={project.alt} />
          <div className="project-text">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a 
              href={project.link}
              target="_blank" rel="noreferrer"
            >
              작업물 보러 가기
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
