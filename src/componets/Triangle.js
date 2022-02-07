import React, {  useContext } from "react";
import { Link } from 'react-router-dom'
import AppContext from "../provider/AppContext";

const Triangle = () => {
  const { submitTriangle, aSide, setASide, bSide, setBSide,
    cSide, setCSide, areaTriangulo } = useContext(AppContext)

  return (
    <>
      <form className='form' onSubmit={submitTriangle}>
        <header className="header-app">
          <h2 className="total-title">Cadastre o Triângulo:</h2>      
          <div className='underline'></div>
        </header>
        <section>
        <div className='form-control'>
            <label htmlFor='aSide'>Lado A :</label>
            <input type="text" id='aSide' name='aSide' value={aSide} onChange={(e)=> setASide(e.target.value)}/>
          </div>
          <div className='form-control'>
            <label htmlFor='bSide'>Lado B :</label>
            <input type="text" id='bSide' name='bSide' value={bSide} onChange={(e)=> setBSide(e.target.value)}/>
          </div>
          <div className='form-control'>
            <label htmlFor='cSide'>Lado C :</label>
            <input type="text" id='cSide' name='cSide' value={cSide} onChange={(e)=> setCSide(e.target.value)}/>
          </div>
          <button type='submit'>Post Area</button>
          <h2>Área do triângulo : {areaTriangulo}</h2>
          </section>
        </form>
        <footer className="footer-btns">
          <div className="btn-link-home">
            <Link to="/" className="btn">Início</Link>
          </div>
            <Link to="/total" className="btn">Total</Link>
        </footer>
    </>
  )
}
export default Triangle;