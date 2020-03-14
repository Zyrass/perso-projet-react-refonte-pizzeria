import React, { Component, Fragment } from "react";
import "./Pizzas.css";

import dataPizzasCream from "./data-pizzas-cream";
import dataIngredients from "../utils/data-ingredients";

class PizzasCream extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pizzas_cream: dataPizzasCream
    }
  }

  render() {
    return (
      <Fragment>
        <div className="row">
          {this.state.pizzas_cream.map( (currentPizza, index) => (
            <div className="card" key={ currentPizza.id * index}>
              <div className="card-header bg-dark text-white">
                <img 
                  src="./assets/images/ingredients/creme_fraiche.png"
                  alt="Ingrédient représentant de la crème fraîche"
                  width="80"
                />
                <h4 className="card-title m-0">
                  { currentPizza.name }
                </h4>
              </div>
              <img 
                className="card-img-top img-fluid"
                src={ currentPizza.image }
                alt={ 
                  `Représentation de la pizza : ${currentPizza.name}`
                }
              />
              <div className="card-body">
                <h5 className="card-title">
                  Base : <span className="text-primary">{ currentPizza.base }</span>
                </h5>

                <ul className="list-group">
                  { currentPizza.ingredients.map( (ingredient, index) => 
                    <li 
                      className="list-group-item"
                      key={ index * 69 }
                    >
                      { dataIngredients(ingredient) }
                    </li>

                  )}
                </ul>                
              </div>
              <div className="card-footer bg-dark">
                <table className="w-100 text-center">
                  <thead>
                    <tr className="text-secondary text-uppercase">
                      <th>Junior</th>
                      <th>Senior</th>
                      <th>Méga</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h4 className="price text-info">
                          { currentPizza.price_junior }€
                        </h4>
                      </td>
                      <td>
                        <h4 className="price text-white">
                          { currentPizza.price_senior }€
                        </h4>
                      </td>
                      <td>
                        <h4 className="price text-danger">
                          { currentPizza.price_mega }€
                        </h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
                
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    )
  }
}

export default PizzasCream;