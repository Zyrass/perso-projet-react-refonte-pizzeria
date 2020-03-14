import React, { Component, Fragment } from "react";

class Deserts extends Component {
  render() {
    return (
      <Fragment>
        <h3 className="text-center my-5 desserts">Nos desserts</h3>
        <ul className="list-group d-flex justify-content-center w-50 ml-auto mr-auto">
          <li className="list-group-item d-flex justify-content-between  align-items-start">
            <span className="mr-5">Tarte <span className="text-primary">"la part"</span></span>
            <span className="price">2.50€</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <span className="mr-5">Häagen-dazs <span className="text-primary">"100 ml"</span></span>
            <span className="price">3.00€</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <span className="mr-5">Häagen-dazs <span className="text-primary">"500 ml"</span></span>
            <span className="price">6.50€</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <span className="mr-5">Pot de glace <span className="text-primary">"pot de 500 ml"</span></span>
            <span className="price">6.50€</span>
          </li>
        </ul>
      </Fragment>
    )
  }
}

export default Deserts;