import React, { Component, Fragment } from "react";
import Styles from "./TexMex.module.scss";

class TexMex extends Component {

  /**
   * @param String Nom du Tex-Mex
   * @param String Description du Tex-Mex
   * @param String Prix du Tex-Mex ( Exemple : 9.99 )
   */
  item = ( name, description, price ) => {
    return (
      <li className={ "list-group-item " + Styles.texMex__li }>
        <span className="mr-5">
          { name } : <span className="text-primary">{ description }</span>
        </span><span className="price">{ `${ price }€` }</span>
      </li>
    )
  }

  render() {
    return (
      <Fragment>
      <h3 className="text-center my-5 tex-mex">Nos Tex-Mex</h3>

      <ul className={ "list-group " + Styles.texMex__ul  }>

        { this.item( "Potatoes", "la barquette", "3.00" ) }
        { this.item( "Onion rings", "8 pièces", "3.00" ) }
        { this.item( "Nems", "6 pièces", "5.00" ) }
        { this.item( "Chicken Wings", "8 pièces", "6.00" ) }
        { this.item( "Nuggets", "10 pièces", "6.00" ) }

      </ul>
      </Fragment>
    )
  }
}

export default TexMex;