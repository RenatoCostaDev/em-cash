import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import AppContext from "../provider/AppContext";

function Total() {
  const { total } = useContext(AppContext)
  
  return (
    <section>
      <header className="header-app">
        <h2 className="total-title">Soma das areas cadastradas</h2>      
        <div className='underline'></div>
      </header>
      <div className="total-area">
        <div>
          Total: {total}
        </div>
        <div className="btn-link-home">
          <Link to="/" className="btn">Início</Link>
        </div>
      </div>
      
    </section>
  );
}


export default Total;