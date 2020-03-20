import React, { Component, Fragment } from "react";

class Salades extends Component {
  render() {
    return (
      <Fragment>
      <h3 className="text-center my-5 salades">Nos salades</h3>
      <ul className="list-group d-flex justify-content-center w-50 ml-auto mr-auto">
        <li className="list-group-item d-flex justify-content-between  align-items-start">
          <span className="mr-5">Salade Mixte :<span className="text-primary">"salade, tomate, olives"</span></span>
          <span className="price">4.00€</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <span className="mr-5">Salade Thon : <span className="text-primary">"salade, tomate, thon, olives"</span></span>
          <span className="price">4.50€</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <span className="mr-5">Salade Chicken : <span className="text-primary">"salade, tomate, dinde fumée, olives"</span></span>
          <span className="price">4.50€</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">Salade Paysanne : <span className="text-primary">"salade, tomate, pomme de terre, jambon"</span>
          <span className="price">4.50€</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">Salade Family : <span className="text-primary">"salade, tomate, saumon crevettes, olives"</span>
          <span className="price">5.50€</span>
        </li>
      </ul>
      </Fragment>
    )
  }
}

export default Salades;