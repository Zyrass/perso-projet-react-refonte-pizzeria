import React, { Component, Fragment } from 'react';
import './Pizzeria.css';

import { Header, Home, Menus, ListePizzas, Paninis, More, Footer } from './components';

class Pizzeria extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <main>

          <Home />
          <Menus />

          <section className="livraison bg-dark">
            <img
              className="imgLivraisonLeft"
              src="./assets/images/feuilles/autumn_2.png"
              alt="représentation de plusieurs feuilles d'automne."
            />
            <img 
              className="imgLivraisonRight"
              src="./assets/images/feuilles/autumn_2.png"
              alt="représentation de plusieurs feuilles d'automne."
            />
            <div className="container p-5">
              <h2 className="text-left text-warning">FRENCHY PIZZA vous livre 7J/7</h2>
              <hr />
              <h3>Nous livrons dans les plus brefs délais sur :</h3>
              <p className="lead display-4 text-secondary">Meyzieu / Décines / Chassieu / Genas</p>
              <div className="alert alert-danger" role="alert">
              <i className="fas fa-exclamation-triangle"></i> Attention, lors d'une quelconque livraison, les offres proposées en page d'accueil ne sont pas prise en compte.<br />Pour en bénéficier il vous faudra vous déplacer en magasin.
              </div>
              <p className="text-danger"></p>
            </div>            
          </section>

          <ListePizzas />
          <Paninis />
          <More />          
          


          {/* Contact */}
          <section className="contact_container my-5" id="contact">
          Gardons le contact
Nom
Email
Sujet
Votre message
Nous retrouver sur la carte 
<div>
  google map
</div>
          </section>

        </main>

        <Footer />
      </Fragment>
    )
  }
}

export default Pizzeria;
