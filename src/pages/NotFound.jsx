import React from "react";
import '../styles/notFound.scss';
import  kitty  from "../assets/notFound/kityldpi.png";
import  background  from "../assets/notFound/circle.png";
import lapto from "../assets/notFound/laptoldpi.png";
import shadow from "../assets/notFound/sombra.png"

const NotFoundPage = () => {
  return (
    <main>
      <div className="not-Found">
        <h1>OOOPS!</h1>
        <p>¡Parece que la paguina que buscas no la encontramos!</p>
      </div>
      <section className="content-placeCenter">
        <div className="background__noFound">
          <img className="background__noFound-kitty" src={kitty}/>
          <img className="background__noFound-circle" src={background} />
          <img className="background__noFound-lapto" src={lapto} />
          <img className="background__noFound-shadow" src={shadow} />
          <div className="background__noFound-textWrapper">
            <div className="background__noFound-textWrapper-box">
              <h2>404</h2>
              <p>error</p>
            </div>
          </div>
        </div>
      <div className="primary-button">
        <a href="/">go home</a>
      </div>
      </section>
    </main>
  );
}

export default () => {
  return(
    <NotFoundPage />
  )
}