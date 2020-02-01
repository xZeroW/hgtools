import React, { useState, useEffect } from 'react';

function Tree() {
  const [pbar, setPbar] = useState(0);
  function handlePbar(){
    if(pbar < 55){
      setPbar(pbar + 1);
    }
  }
  return (
    <div class="container">
      <p>Work In Progress</p>
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <a class="nav-item nav-link active" id="crusader-tab" data-toggle="tab" href="#crusader" role="tab" aria-controls="crusader" aria-selected="true">Crusader</a>
          <a class="nav-item nav-link" id="hunter-tab" data-toggle="tab" href="#hunter" role="tab" aria-controls="hunter" aria-selected="false">Hunter</a>
          <a class="nav-item nav-link" id="exorcist-tab" data-toggle="tab" href="#exorcist" role="tab" aria-controls="exorcist" aria-selected="false">Exorcist</a>
          <a class="nav-item nav-link" id="magus-tab" data-toggle="tab" href="#magus" role="tab" aria-controls="magus" aria-selected="false">Magus</a>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="crusader" role="tabpanel" aria-labelledby="crusader-tab">
          <table>
            <tr>
              <td rowspan="5">
                <div className="progress progress-bar-vertical" onClick={handlePbar}>
                  <div className="progress-bar" id="pbar"  role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="55">{pbar}
                  </div>
                </div>
              </td>
              <td id="Aries"><img src="https://via.placeholder.com/42" alt="skill"></img></td>
              <td id="WildBlow"><img src="https://via.placeholder.com/42" alt="skill"></img></td>
              <td><img src="https://via.placeholder.com/42" alt="skill"></img></td>
              <td><img src="https://via.placeholder.com/42" alt="skill"></img></td>
              <td><img src="https://via.placeholder.com/42" alt="skill"></img></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Assault</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Bash</td>
              <td></td>
              <td>Elemental Strike</td>
              <td>Axe Mastery</td>
              <td>Mace Mastery</td>
              <td>Sword Mastery</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
        <div class="tab-pane fade" id="hunter" role="tabpanel" aria-labelledby="hunter-tab">
          hunter
        </div>
        <div class="tab-pane fade" id="exorcist" role="tabpanel" aria-labelledby="exorcist-tab">
          exorcist
        </div>
        <div class="tab-pane fade" id="magus" role="tabpanel" aria-labelledby="magus-tab">
          magus
        </div>
      </div>
    </div>
  );
}

export default Tree;