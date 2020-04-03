import React, { useState } from 'react';

export default function Exorcist() {

  var exopbar = React.createRef();

  const [skills, setSkills] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]);
  const [pbar, setPbar] = useState(0);

  function handlePbar() {
    if (pbar < 55){
      setPbar(pbar+1);
      exopbar.current.style.height = pbar * 1.85 + '%';
    }
  }

  const handleSkills = () => {
  };

  return(
    <table>
      <tbody>
        <tr>
          <td rowSpan="5">
            <div className="progress progress-bar-vertical" onClick={handlePbar}>
              <div className="progress-bar" style={{backgroundColor: '#800080'}} id="exopbar" ref={exopbar} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="55">{pbar}
              </div>
            </div>
          </td>
          <td id="Aries"><img src="https://via.placeholder.com/42" alt="skill"></img><div>{skills[17]}</div></td>
          <td id="WildBlow"><img src="https://via.placeholder.com/42" alt="skill"></img><div>{skills[18]}</div></td>
          <td></td>
          <td id="FountainOfYouth"><img src="https://via.placeholder.com/42" alt="skill"></img><div>{skills[19]}</div></td>
          <td id="IronMaiden"><img src="https://via.placeholder.com/42" alt="skill"></img><div>{skills[20]}</div></td>
          <td></td>
          <td id="Entrenche"><img src="https://via.placeholder.com/42" alt="skill"></img><div>{skills[21]}</div></td>
          <td id="BloodRush"><img src="https://via.placeholder.com/42" alt="skill"></img><div>{skills[22]}</div></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td><img src="https://via.placeholder.com/42" alt="skill"></img><div>{skills[14]}</div></td>
          <td></td>
          <td></td>
          <td><img src="https://via.placeholder.com/42" alt="skill"></img><div>{skills[15]}</div></td>
          <td></td>
          <td><img src="https://via.placeholder.com/42" alt="skill"></img><div>{skills[16]}</div></td>
        </tr>
        <tr>
          <td></td>
          <td><img src="https://via.placeholder.com/42" alt="skill"></img><div>{skills[10]}</div></td>
          <td><img src="https://via.placeholder.com/42" alt="skill"></img><div>{skills[11]}</div></td>
          <td></td>
          <td></td>
          <td><img src="https://via.placeholder.com/42" alt="skill"></img><div>{skills[12]}</div></td>
          <td><img src="https://via.placeholder.com/42" alt="skill"></img><div>{skills[13]}</div></td>
          <td></td>
        </tr>
        <tr>
          <td><img src="https://via.placeholder.com/42" alt="skill"></img><div>{skills[5]}</div></td>
          <td><img src="https://via.placeholder.com/42" alt="skill"></img><div>{skills[6]}</div></td>
          <td></td>
          <td><img src="https://via.placeholder.com/42" alt="skill"></img><div>{skills[7]}</div></td>
          <td><img src="https://via.placeholder.com/42" alt="skill"></img><div>{skills[8]}</div></td>
          <td></td>
          <td></td>
          <td><img src="https://via.placeholder.com/42" alt="skill"></img><div>{skills[9]}</div></td>
        </tr>
        <tr>
          <td onClick={() => setSkills({...skills, skills: 5})}><img src="https://via.placeholder.com/42" alt="skill"></img><div>{skills[0]}</div></td>
          <td></td>
          <td onClick={handleSkills}><img src="https://via.placeholder.com/42" alt="skill"></img><div>{skills[1]}</div></td>
          <td onClick={handleSkills}><img src="https://via.placeholder.com/42" alt="skill"></img><div>{skills[2]}</div></td>
          <td onClick={handleSkills}><img src="https://via.placeholder.com/42" alt="skill"></img><div>{skills[3]}</div></td>
          <td onClick={handleSkills}><img src="https://via.placeholder.com/42" alt="skill"></img><div>{skills[4]}</div></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}