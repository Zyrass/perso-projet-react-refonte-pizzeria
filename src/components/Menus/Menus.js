  import React from "react";
import "./Menus.css";

const Menus = () => {
  return (

    <section className="menus_container" id="menus">
    
      <img src="./assets/images/feuilles/autumn_3.png" alt="images feuilles d'automne" />
      <h2>Nos menus</h2>

      <div className="container">
        <div className="row">

          { /* Menu panini */ }
          <div className="card">
            <img 
              className="card-img-top img-fluid"
              src="./assets/images/menus/menu-panini.jpg"
              alt="Représentation du menu panini"
            />
            <div className="card-body">
              <span className="text-secondary price display-4">8€</span>
              <h5 className="card-title">Menu Panini</h5>
              <hr />
              <p className="card-text text-muted">Composition du menu :</p>
              <ul>
                <li><i class="fas fa-plus mr-2"></i> 1 panini</li>
                <li><i class="fas fa-plus mr-2"></i> 1 potatoes</li>
                <li><i class="fas fa-plus mr-2"></i> 1 canette</li>
              </ul>
            </div>
          </div>{ /* /.card ( menu panini ) */ }

          { /* Menu wings */ }
          <div className="card">
            <img 
              className="card-img-top img-fluid"
              src="./assets/images/menus/menu-wings.jpg"
              alt="Représentation du menu wings" 
            />
            <div className="card-body">
              <span className="text-secondary price display-4">8€</span>
              <h5 className="card-title">Menu Wings</h5>
              <hr />
              <p className="card-text text-muted">Composition du menu :</p>
              <ul>
                <li><i class="fas fa-plus mr-2"></i> 8 wings</li>
                <li><i class="fas fa-plus mr-2"></i> 1 potatoes</li>
                <li><i class="fas fa-plus mr-2"></i> 1 canette</li>
              </ul>
            </div>
          </div>{ /* /.card ( menu wings ) */ }
        
        </div>{ /* /.row ( Menu panini - wings ) */}

        <div className="row">

          { /* Menu solo */ }
          <div className="card">
            <img 
              className="card-img-top img-fluid"
              src="./assets/images/menus/menu-solo.jpg"
              alt="Représentation du menu solo" 
            />
            <div className="card-body">
              <span className="text-secondary price display-4">12€</span>
              <h5 className="card-title">Menu Solo</h5>
              <hr />
              <p className="card-text text-muted">Composition du menu :</p>
              <ul>
                <li><i class="fas fa-plus mr-2"></i> 1 pizza junior ( <span className="text-info">26 cm</span> )</li>
                <li><i class="fas fa-plus mr-2"></i> 1 salade mixte</li>
                <li><i class="fas fa-plus mr-2"></i> 1 canette 33cl</li>
                <li><i class="fas fa-plus mr-2"></i> 1 tarte</li>
              </ul>
            </div>
          </div>{ /* /.card (menu-solo) */ }

          { /* Menu duo */ }
          <div className="card">
            <img 
              className="card-img-top img-fluid"
              src="./assets/images/menus/menu-duo.jpg"
              alt="Représentation du menu duo" 
            />
            <div className="card-body">
              <span className="text-secondary price display-4">22€</span>
              <h5 className="card-title">Menu Duo</h5>
              <hr />
              <p className="card-text text-muted">Composition du menu :</p>
              <ul>
                <li><i class="fas fa-plus mr-2"></i> 1 pizza senior ( <span className="text-info">33 cm</span> )</li>
                <li><i class="fas fa-plus mr-2"></i> 10 nuggets</li>
                <li><i class="fas fa-plus mr-2"></i> 2 canette 33cl</li>
                <li><i class="fas fa-plus mr-2"></i> 2 glaces 100ml</li>
              </ul>
            </div>
          </div>{ /* /.card (menu duo) */ }

          { /* Menu Frenchy */ }
          <div className="card">
            <img 
              className="card-img-top img-fluid"
              src="./assets/images/menus/menu-frenchy.jpg"
              alt="Représentation du menu frenchy" 
            />
            <div className="card-body">
              <span className="text-secondary price display-4">23€</span>
              <h5 className="card-title">Menu Frenchy</h5>
              <hr />
              <p className="card-text text-muted">Composition du menu :</p>
              <ul>
                <li><i class="fas fa-plus mr-2"></i> 1 pizza méga ( <span className="text-info">40 cm</span> )</li>
                <li><i class="fas fa-plus mr-2"></i> 1 potatoes</li>
                <li><i class="fas fa-plus mr-2"></i> 1 bouteille 1,5L</li>
                <li><i class="fas fa-plus mr-2"></i> 1 glace 500ml</li>
              </ul>
            </div>
          </div>{ /* /.card (menu frenchy) */ }

        </div>{ /* /.row (Menu solo - duo - frenchy ) */ }
      </div>{ /* /.container */ }
    </section>

  )
}

export default Menus;