import React, { Component, Fragment } from "react";
import Styles from "./TexMex.module.scss";

class TexMex extends Component {

  /**
   * @param String Nom du tex-mex
   * @param String Description du tex-mex
   * @param String Prix du tex-mex - Ex : 9.99
   */
  texMex = ( name, description, price ) => {
    return (
      <li className={ "list-group-item" + Styles.texMex__li } >
        <span className="mr-5" >
          { name } : <span className="text-primary" >{ description }</span>
        </span><span className="price">{ `${ price }` }</span>

      </li>
    )
  }

  render() {
    return (
      <Fragment>
        <h3 className="text-center tex-mex">Nos Tex Mex</h3>
        <ul className={ "list-group" + Styles.texMex__ul }>

          { this.texMex( "Potatoes", "la barquette", "3.00" ) }
          { this.texMex( "Onion rings", "8 pièces", "3.00" ) }
          { this.texMex( "Nems", "6 pièces", "5.00" ) }
          { this.texMex( "Chicken Wings", "8 pièces", "6.00" ) }
          { this.texMex( "Nuggets", "10 pièces", "6.00" ) }

        </ul>
      </Fragment>
    )
  }
}

export default TexMex;