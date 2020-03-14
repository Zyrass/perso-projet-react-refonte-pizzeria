import React from "react";
import "./Paninis.css";

import dataIngredients from "../utils/data-ingredients";

const Paninis = () => {
  return (
    <section 
      className="container-fluid section_panini bg-dark" 
      id="paninis"
    >

      <img 
        src="./assets/images/feuilles/autumn_6.png"
        alt="Représentation de plusieurs feuilles d'automne" 
      />
      <h2>Nos paninis</h2>
      <div class="alert alert-info w-50 text-center my-5 mr-auto ml-auto" role="alert">
        <i class="fas fa-info-circle pr-3"></i>
        Nos paninis ne sont en aucun cas cuit avec une machine mais dans le four à pizza.<br />
        <strong>Attention, un panini cuit au four durci très très vite.<br />Ainsi pour les savourer ils sont à consommer dans les minutes qui suivent leurs sorties du four.</strong>
      </div>

      <div className="row">

        { /* Panini Classic */ }
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Panini Classic</h5>
          </div>
          <div className="card-body">
            <img 
              className="card-img-top img-fluid"
              src="./assets/images/paninis/panini_classic.png"
              alt="Représentation du menu panini"
            />
            <span className="text-secondary price display-4">4€</span>
            <p className="card-text text-muted">Composition du panini :</p>
            <ul>
              <li> { dataIngredients("crème fraiche") } crème fraiche</li>
              <li> { dataIngredients("mozzarella") } mozzarella</li>
              <li> { dataIngredients("emmental") } emmental</li>
              <li className="text-danger"> { dataIngredients("tomates fraiches") } tomate</li>
            </ul>
          </div>
        </div>{ /* /.card ( panini classic ) */ }

        { /* Panini 3 Fromages */ }
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Panini 3 fromages</h5>
          </div>
          <div className="card-body">
            <img 
              className="card-img-top img-fluid"
              src="./assets/images/paninis/panini_3_fromages.png"
              alt="Représentation du menu wings" 
            />
            <span className="text-secondary price display-4">5€</span>
            <p className="card-text text-muted">Composition du panini :</p>
            <ul>
              <li> { dataIngredients("crème fraiche") } crème fraiche</li>
              <li> { dataIngredients("mozzarella") } mozzarella</li>
              <li> { dataIngredients("emmental") } emmental</li>
              <li className="text-danger"> { dataIngredients("chèvre") } chèvre</li>
            </ul>
          </div>
        </div>{ /* /.card ( Panini 3 fromages ) */ }

        { /* Panini Norvegien */ }
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Panini Norvegien</h5>
          </div>
          <div className="card-body">
            <img 
              className="card-img-top img-fluid"
              src="./assets/images/paninis/panini_norvegien.png"
              alt="Représentation du menu solo" 
            />
            <span className="text-secondary price display-4">5€</span>
            <p className="card-text text-muted">Composition du panini :</p>
            <ul>
              <li> { dataIngredients("crème fraiche") } crème fraiche</li>
              <li> { dataIngredients("mozzarella") } mozzarella</li>
              <li> { dataIngredients("emmental") } emmental</li>
              <li className="text-danger"> { dataIngredients("saumon") } saumon</li>
            </ul>
          </div>
        </div>{ /* /.card ( Panini Norvegien ) */ }

        { /* Panini Thon */ }
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Panini Thon</h5>
          </div>
          <div className="card-body">
            <img 
              className="card-img-top img-fluid"
              src="./assets/images/paninis/panini_thon.png"
              alt="Représentation du menu duo" 
            />
            <span className="text-secondary price display-4">5€</span>
            <p className="card-text text-muted">Composition du panini :</p>
            <ul>
              <li> { dataIngredients("crème fraiche") } crème fraiche</li>
              <li> { dataIngredients("mozzarella") } mozzarella</li>
              <li> { dataIngredients("emmental") } emmental</li>
              <li className="text-danger"> { dataIngredients("thon") } thon</li>
            </ul>
          </div>
        </div>{ /* /.card ( Panini Thon ) */ }

        { /* Panini Chicken */ }
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Panini Chicken</h5>
          </div>
          <div className="card-body">
            <img 
              className="card-img-top img-fluid"
              src="./assets/images/paninis/panini_chicken.png"
              alt="Représentation du menu frenchy" 
            />
            <span className="text-secondary price display-4">5€</span>
            <p className="card-text text-muted">Composition du panini :</p>
            <ul>
              <li> { dataIngredients("crème fraiche") } crème fraiche</li>
              <li> { dataIngredients("mozzarella") } mozzarella</li>
              <li> { dataIngredients("emmental") } emmental</li>
              <li className="text-danger"> { dataIngredients("dinde fumée") } dinde fumée</li>
            </ul>
          </div>
        </div>{ /* /.card ( Panini Chicken ) */ }

      </div>{ /* /.row */ }

      <div class="alert alert-warning w-50 ml-auto" role="alert">
        <i class="fas fa-exclamation-triangle pr-3"></i>
        Nos paninis ne sont pas forcément représentatif des illustrations proposées. 
      </div>
      { /* /.container */ }
    </section>
  )
}

export default Paninis;