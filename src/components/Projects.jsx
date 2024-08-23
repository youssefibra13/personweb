import React from 'react';
import { mywork_data } from "../mywork-data";

const Projects = () => {
  return (
    <div className='mywork'>
        <div className="mywork-title"> 
            <h1> My Latest Work</h1>
        </div>
        <div className="mywork-container">
              {mywork_data.map((work, index) => {
                  return (
                      <a key={index} href={work.w_link} target="_blank" rel="noopener noreferrer">
                          <img src={work.w_img} alt={`${work.w_name} image`} />
                      </a>
                  );
              })}
          </div>
          <div className="mywork-showmore">
              <a href='https://github.com/youssefibra13?tab=repositories' className='showmore-btn'> Show More </a>
          </div>
    </div>
  )
}

export default Projects;
