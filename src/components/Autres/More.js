import React, { Component, Fragment } from "react";

import TexMex from "./TexMex/TexMex";
import Salades from "./Salades/Salades";
import Deserts from "./Deserts/Deserts";

import "./More.css";

class More extends Component {

  render() {
    return (
      <Fragment>

        {/* Pizzas */}
        <section className="section_autres my-5" id="autres">
        <img 
            src="./assets/images/feuilles/autumn_4.png"
            alt="Représentation des chickens"
            className="img-fluid"
          />
        <img 
            src="./assets/images/autres/chicken.png"
            alt="Représentation des chickens"
            className="img-fluid"
          />
          <img 
            src="./assets/images/autres/salades.png"
            alt="Représentation d'une salade"
            className="img-fluid"
          />
          <img 
            src="./assets/images/autres/tarte.png"
            alt="Représentation d'une tarte"
            className="img-fluid"
            />

          <div className="container">
            <h2 className="text-center">Nos autres produits</h2>
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a 
                  className="nav-item nav-link active"
                  id="nav-tex-mex-tab" 
                  data-toggle="tab"
                  href="#nav-tex-mex"
                >Découvrez nos 5 Tex Mex différents</a>
                <a 
                  className="nav-item nav-link"
                  id="nav-salades-tab"
                  data-toggle="tab"
                  href="#nav-salades"
                >5 Salades différentes pour une petite faim</a>
                <a 
                  className="nav-item nav-link"
                  id="nav-desserts-tab"
                  data-toggle="tab"
                  href="#nav-desserts"
                >Nos desserts pour petit et grand gourmand</a>
              </div>
            </nav>

            <div className="tab-content" id="nav-tabContent">

              {/* Tex Mex */}
              <div 
                className="tab-pane fade show active"
                id="nav-tex-mex"
              >
                <TexMex />
              </div>

              {/* Salades */}
              <div 
                className="tab-pane fade"
                id="nav-salades"
              >
                <Salades />
              </div>

              {/* Desserts */}
              <div 
                className="tab-pane fade" 
                id="nav-desserts"
              >
                <Deserts />
              </div>

            </div>

          </div>

        </section>

      </Fragment>
    )
  }
}

export default More;