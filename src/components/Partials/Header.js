import React from "react";
import './Header.module.scss';

const Header = () => {
  return (

    <header>
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a 
          className="navbar-brand text-warning"
          href="/"
        >Frenchy Pizza
        </a><span className="text-white">04 78 89 97 87</span>
        <button 
          className="navbar-toggler"
          type="button" 
          data-toggle="collapse"
          data-target="#frenchyNavbar"
        > 
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="frenchyNavbar">
          
          <form className="form-inline my-2 my-lg-0 mr-auto ml-auto">
            <a
              href="https://www.ubereats.com/fr-FR/lyon/food-delivery/frenchy-pizzas/35w5EcVTRW6R30fFSMQecQ/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success btn-small my-2 my-sm-0 mx-2"
            >
              Commander avec 
              <img 
                src="./assets/images/logo/uber_eats_logo.svg.png"
                alt="logo uber eat"
              />
            </a>
          </form>
          
          <ul className="navbar-nav ml-auto">

            <li className="nav-item active">
              <a className="nav-link" href="#frenchyCarousel">
                <i className="fas fa-store-alt"></i> Accueil
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#menus">
                <i className="fas fa-utensils"></i> Menus
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link"href="#pizzas">
                <i className="fas fa-pizza-slice"></i> Pizzas
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#paninis">
                <i className="fas fa-hamburger"></i> Paninis
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#autres">
                <i className="fas fa-plus"></i> Et plus encore...
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                <i className="fas fa-handshake"></i> Contact
              </a>
            </li>

          </ul>

          
        </div>
      </nav>

    </header>

  )
}

export default Header;