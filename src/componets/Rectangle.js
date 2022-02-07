import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import AppContext from "../provider/AppContext";

const Rectangle = () => {
  const { submitRectangle, setBase, baseRetangulo, setAltura, alturaRetangulo,
    areaRetangulo } = useContext(AppContext)

  return (
    <>
      <form className='form' onSubmit={submitRectangle}>
        <header className="header-app">
          <h2 className="total-title">Cadastre o retângulo:</h2>      
          <div className='underline'></div>
        </header>
        <section>
          <div className='form-control'>
            <label htmlFor='baseRetangulo'>Base :</label>
            <input type="number" name='baseRetangulo' value={baseRetangulo} onChange={(e)=> setBase(e.target.value)}/>
            <label htmlFor='alturaRetangulo'>Altura :</label>
            <input type="number" name='alturaRetangulo' value={alturaRetangulo} onChange={(e)=> setAltura(e.target.value)}/>
            <button type='submit' className="">Post Area</button>
          </div>
            <h2 className="area">Área do retângulo : {areaRetangulo}</h2>
        </section>
        <footer className="footer-btns">
          <div className="btn-link-home">
            <Link to="/" className="btn">Início</Link>
          </div>
            <Link to="/total" className="btn">Total</Link>
        </footer>
      </form>
    </>
  )
}
export default Rectangle;