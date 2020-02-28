import React, { useState, useEffect } from 'react';

function Stats() {
  const [str, setStr] = useState(0);
  const [dex, setDex] = useState(0);
  const [vit, setVit] = useState(0);
  const [spr, setSpr] = useState(0);
  const [cLevel, setClevel] = useState(60);
  const [pAvailable, setPavailable] = useState(295);
  const [cpAv, setCpav] = useState(295);
  useEffect(() => {
    setCpav(pAvailable-(parseInt(str)+parseInt(dex)+parseInt(vit)+parseInt(spr)));
    // eslint-disable-next-line
  }, [str, dex, vit, spr]);
  
  function handleCLevel(e) {
    setStr(0);
    setDex(0);
    setVit(0);
    setSpr(0);
    setClevel(e.target.value);
    if(e.target.value <= 0) {
      setPavailable(0);
      setCpav(0);
    } else {
      setPavailable((e.target.value - 1) * 5);
      setCpav((e.target.value - 1) * 5);
    }
  }

  return (
    <div className="container">
      <div className="stats">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="card bg-secondary shadow border">
              <div className="card-body px-lg-4 py-lg-4 bg-white">
                <p>Passive Tree Builder</p>
                <table className="table table-borderless table-sm table-responsive">
                  <tbody>
                    <tr>
                      <th scope="row">Strength:</th>
                      <td>
                        <input type="number" name="str" min="0" max="295"
                          onKeyDown={ e => ( e.keyCode === 69 || e.keyCode === 190 || e.keyCode === 188 ) && e.preventDefault() } 
                          value={str} onChange={(e) => (pAvailable >= 1 && cpAv >= 1) ? setStr(e.target.value) : ''} /></td>
                      <td>{parseInt(str) + 15}</td>
                    </tr>
                    <tr>
                      <th scope="row">Dexterity:</th>
                      <td>
                        <input type="number" name="dex" min="0" max="295"
                          onKeyDown={ e => ( e.keyCode === 69 || e.keyCode === 190 || e.keyCode === 188 ) && e.preventDefault() } 
                          value={dex} onChange={(e) => (pAvailable >= 1 && cpAv >= 1) ? setDex(e.target.value) : ''} /></td>
                      <td>{parseInt(dex) + 15}</td>
                    </tr>
                    <tr>
                      <th scope="row">Vitality:</th>
                      <td>
                        <input type="number" name="vit" min="0" max="295"
                          onKeyDown={ e => ( e.keyCode === 69 || e.keyCode === 190 || e.keyCode === 188 ) && e.preventDefault() } 
                          value={vit} onChange={(e) => (pAvailable >= 1 && cpAv >= 1) ? setVit(e.target.value) : ''} /></td>
                      <td>{parseInt(vit) + 15}</td>
                    </tr>
                    <tr>
                      <th scope="row">Spirituality:</th>
                      <td>
                        <input type="number" name="spr" min="0" max="295"
                          onKeyDown={ e => ( e.keyCode === 69 || e.keyCode === 190 || e.keyCode === 188 ) && e.preventDefault() } 
                          value={spr} onChange={(e) => (pAvailable >= 1 && cpAv >= 1) ? setSpr(e.target.value) : ''} /></td>
                      <td>{parseInt(spr) + 15}</td>
                    </tr>
                    <tr>
                      <th scope="row">Character Level:</th>
                      <td>
                        <input type="number" name="cLevel" min="1" max="60"
                          onKeyDown={ e => ( e.keyCode === 69 || e.keyCode === 190 || e.keyCode === 188 ) && e.preventDefault() } 
                          value={cLevel} onChange={handleCLevel} /></td>
                    </tr>
                    <tr>
                      <th scope="row">Points Available:</th>
                      <td>{cpAv}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;