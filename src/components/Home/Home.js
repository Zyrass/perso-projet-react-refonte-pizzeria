import React, { Fragment } from "react";
import './Home.css';

const Home = () => {
  return (
    <Fragment>
        
      <div id="frenchyCarousel" className="carousel slide" style={ { paddingTop: "56px" }} data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#frenchyCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#frenchyCarousel" data-slide-to="1"></li>
          <li data-target="#frenchyCarousel" data-slide-to="2"></li>
          <li data-target="#frenchyCarousel" data-slide-to="3"></li>
        </ol>

        <div className="carousel-inner">

          <div className="carousel-item active" data-interval="6000">
            <img 
              src="http://www.frenchypizzas-meyzieu.com/img/pictures/photo-11.jpg" 
              alt="..."
              className="d-block w-100 img-fluid "
            />

            <div className="carousel-caption d-none d-md-block bg-dark pt-5 pb-5 mb-5">
              <h2>1 Pizza 33cm + canette</h2>
              <h3 className="display-1 text-info">Offre du Midi : 8€</h3>
              <p className="lead">Offre valable <span className="text-warning">en magasin et en semaine uniquement</span></p>
            </div>
            
          </div>

          <div className="carousel-item">
            <img src="http://www.frenchypizzas-meyzieu.com/img/pictures/photo-44.jpg" className="d-block w-100 img-fluid" alt="..." />

            <div className="carousel-caption d-none d-md-block bg-dark pt-5 pb-5 mb-5">
              <h2>2 Pizzas 33cm</h2>
              <h3 className="display-1 text-info">Offre 7j/7j : 15€</h3>
              <p className="lead">Offre valable <span className="text-warning">exclusivement en magasin</span></p>
            </div>
          </div>
          
          <div className="carousel-item" >
            <img src="http://www.frenchypizzas-meyzieu.com/img/pictures/photo-22.jpg" className="d-block w-100 img-fluid" alt="..." />

            <div className="carousel-caption d-none d-md-block bg-dark pt-5 pb-5 mb-5">
              <h2>3 Pizzas 33cm</h2>
              <h3 className="display-1 text-info">Offre 7j/7j : 21€</h3>
              <p className="lead">Offre valable <span className="text-warning">exclusivement en magasin</span></p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="http://www.frenchypizzas-meyzieu.com/img/pictures/photo-33.jpg" className="d-block w-100 img-fluid" alt="..." />

            <div className="carousel-caption d-none d-md-block bg-dark pt-5 pb-5 mb-5">
              <h2>4 Pizzas 33cm - <span className="text-danger">1 Marguarita + 3 pizzas au choix</span></h2>
              <h3 className="display-1 text-info">Offre 7j/7j : 26€</h3>
              <p className="lead">Offre valable <span className="text-warning">exclusivement en magasin</span></p>
            </div>
          </div>

        </div>{ /* /carousel-inner */ }  
  
        <a 
          className="carousel-control-prev"
          href="#frenchyCarousel"
          role="button" 
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
  
        <a 
          className="carousel-control-next"
          href="#frenchyCarousel"
          role="button" 
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>

      </div>{ /* /carousel */ }
    </Fragment>
  )
}

export default Home;