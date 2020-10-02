import React from 'react'
import Logo from './logo.png'

function Navbar() {
    return(
        <>
            <div className="form-group">
                <a href="/#/">
                    <img src={Logo} style={{ maxWidth: 100 }} alt="Logo" />
                </a>
                <label>Busca Filmes</label>
            </div>
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark list">
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/favorites">Favoritos</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;