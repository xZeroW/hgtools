import React, { useState } from 'react';

function Tree() {
  const [pbar, setPbar] = useState(0);
  const [pAvailable, setPAvailable] = useState(177);
  const [skills, setSkills] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]);
  function handlePbar() {
    if (pbar < 55){
      setPbar(pbar+1);
      setPAvailable(pAvailable-1);
      document.getElementById('crupbar').style.height = pbar * 1.85 + '%';
    }
  }

  const handleSkills = (index) => {
    // setSkills(skills[index] + 1)
    console.log(skills[index]);
  };

  return (
    <div className="container">
      <div className="tree">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="card bg-secondary shadow border">
              <div className="card-body px-lg-4 py-lg-4 bg-white">
                <p>Skill Tree Builder - <span className="badge badge-warning">WIP</span></p>
                <p>Points Available: {pAvailable}</p>
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="crusader-tab" data-toggle="tab" href="#crusader" role="tab" aria-controls="crusader" aria-selected="true">Crusader</a>
                    <a className="nav-item nav-link" id="hunter-tab" data-toggle="tab" href="#hunter" role="tab" aria-controls="hunter" aria-selected="false">Hunter</a>
                    <a className="nav-item nav-link" id="exorcist-tab" data-toggle="tab" href="#exorcist" role="tab" aria-controls="exorcist" aria-selected="false">Exorcist</a>
                    <a className="nav-item nav-link" id="magus-tab" data-toggle="tab" href="#magus" role="tab" aria-controls="magus" aria-selected="false">Magus</a>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="crusader" role="tabpanel" aria-labelledby="crusader-tab">
                    <table>
                      <tbody>
                        <tr>
                          <td rowSpan="5">
                            <div className="progress progress-bar-vertical" onClick={handlePbar}>
                              <div className="progress-bar" id="crupbar"  role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="55">{pbar}
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
                          <td onClick={(e) => setSkills({...skills, skills: 5})}><img src="https://via.placeholder.com/42" alt="skill"></img><div>{skills[0]}</div></td>
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
                  </div>
                  <div className="tab-pane fade" id="hunter" role="tabpanel" aria-labelledby="hunter-tab">
                hunter
                  </div>
                  <div className="tab-pane fade" id="exorcist" role="tabpanel" aria-labelledby="exorcist-tab">
                exorcist
                  </div>
                  <div className="tab-pane fade" id="magus" role="tabpanel" aria-labelledby="magus-tab">
                magus
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tree;