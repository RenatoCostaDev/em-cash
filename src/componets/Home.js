import React from "react";
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <section>
            <header className="header-app">
                <h2>Descubra a área</h2>      
                <div className='underline'></div>
                <p>Click no botão e cadastre a figura ou saiba a total geral das áreas já cadastradas.</p>
            </header>
            <div className="figures">
                <div>
                   <Link to="/rectangle" className="btn">Retângulo</Link>
                </div>
                <div>
                   <Link to="/triangle" className="btn">Triângulo</Link>
                </div>
            </div>
            <footer>
                <Link to="/total" className="btn">Total</Link>
            </footer>
        </section>
    )
}
export default Home;