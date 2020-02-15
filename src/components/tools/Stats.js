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
      setClevel(e.target.value)
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
      <table className="table table-borderless table-sm table-responsive">
        <tbody>
        <tr>
          <th scope="row">Strength:</th>
          <td>
            <input type="number" name="str" 
            onKeyDown={ e => ( e.keyCode === 69 || e.keyCode === 190 || e.keyCode === 188 ) && e.preventDefault() } 
            value={str} onChange={(e) => setStr(e.target.value)} /></td>
          <td>{parseInt(str) + 15}</td>
        </tr>
        <tr>
        <th scope="row">Dexterity:</th>
          <td>
            <input type="number" name="dex" 
            onKeyDown={ e => ( e.keyCode === 69 || e.keyCode === 190 || e.keyCode === 188 ) && e.preventDefault() } 
            value={dex} onChange={(e) => setDex(e.target.value)} /></td>
          <td>{parseInt(dex) + 15}</td>
        </tr>
        <tr>
        <th scope="row">Vitality:</th>
          <td>
            <input type="number" name="vit" 
            onKeyDown={ e => ( e.keyCode === 69 || e.keyCode === 190 || e.keyCode === 188 ) && e.preventDefault() } 
            value={vit} onChange={(e) => setVit(e.target.value)} /></td>
          <td>{parseInt(vit) + 15}</td>
        </tr>
        <tr>
        <th scope="row">Spirituality:</th>
          <td>
            <input type="number" name="spr" 
            onKeyDown={ e => ( e.keyCode === 69 || e.keyCode === 190 || e.keyCode === 188 ) && e.preventDefault() } 
            value={spr} onChange={(e) => setSpr(e.target.value)} /></td>
          <td>{parseInt(spr) + 15}</td>
        </tr>
        <tr>
        <th scope="row">Character Level:</th>
          <td>
            <input type="number" name="cLevel" 
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
    );
  }

export default Stats;