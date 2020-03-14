import React, { Component, Fragment } from "react";
import PizzasTomatoes from "./PizzasTomatoes";
import PizzasCream from "./PizzasCream";

import "./Pizzas.css";

class Pizzas extends Component {


  render() {
    return (
      <Fragment>

        {/* Pizzas */}
        <section className="pizzas_container" id="pizzas">
          <img 
            src="./assets/images/bgPizzas.png"
            alt="Représentation d'une pizza don ces parts sont représentative de plusieurs types de pizzas"
          />
          <img 
            src="./assets/images/bgPizzas.png"
            alt="Représentation d'une pizza don ces parts sont représentative de plusieurs types de pizzas"
          />

          <div className="container">
            
            <h3 className="text-center">Tailles des pizzas proposées</h3>
            <p className="lead text-center">
              Junior : 26 cm / Sénior : 33cm / Méga : 40cm
            </p>

            <nav>
              <div 
                className="nav nav-tabs"
                id="nav-tab"
                role="tablist"
              >
                <a 
                  className="nav-item nav-link active"
                  id="nav-home-tab" 
                  data-toggle="tab"
                  href="#nav-home"
                >Voir toutes les pizzas</a>

                <a 
                  className="nav-item nav-link"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="#nav-profile"
                >Pizzas base sauce tomate</a>

                <a 
                  className="nav-item nav-link"
                  id="nav-contact-tab"
                  data-toggle="tab"
                  href="#nav-contact"
                >Pizzas base crème fraîche</a>
              </div>
            </nav>

            <div className="tab-content" id="nav-tabContent">

              <div 
                className="tab-pane fade show active"
                id="nav-home"
              >
                <h2 className="text-center all">Toutes nos pizzas</h2>
                <h3 className="display-4 text-center text-uppercase text-danger my-5">Pizzas base sauce tomate</h3>
                <div className="alert alert-info text-center" role="alert">
                  <i className="fas fa-info-circle pr-3"></i> Si vous n'aimez pas un aliment dans une quelconque pizza, lors de votre commande, vous pouvez l'enlever où en choisir un autre à la place.
                </div>
                <PizzasTomatoes />

                <h3 className="display-4 text-center text-uppercase text-primary my-5">Pizzas base crème fraîche</h3>
                <PizzasCream />
              </div>

              <div 
                className="tab-pane fade"
                id="nav-profile"
              >
                <h2 className="text-center tomatoe">Toutes nos pizzas base sauce tomate</h2>
                <h3 className="display-4 text-center text-uppercase text-danger my-5">Pizzas base sauce tomate</h3>
                <PizzasTomatoes />
              </div>

              <div 
                className="tab-pane fade" 
                id="nav-contact"
              >
                <h2 className="text-center cream">Toutes nos pizzas base crème fraîche</h2>
                <h3 className="display-4 text-center text-uppercase text-primary my-5">Pizzas base crème fraîche</h3>
                <PizzasCream />
              </div>

            </div>

          </div>

        </section>

      </Fragment>
    )
  }
}


export default Pizzas;