import React from "react";
import Carousel from "react-bootstrap/Carousel";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light navbar-light container">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Main
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Listado">
                  Listado
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Buscar">
                  Buscar
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Carousel variant="light" className="container mt-3">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/N32L2H4A3ZG3TFMA355H2Z7GDM.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Metallica</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/2/2/1/f/221f3b38d1c5040074416e61ba2f7b55.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Lacuna Coil</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://summainferno.com/wp-content/uploads/2019/11/Stratovarius-1.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Stratovarius</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Header;
