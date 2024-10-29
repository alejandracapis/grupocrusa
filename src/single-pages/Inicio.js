import React from "react";
import "./Inicio.css"
import Slider from "./slider/Slider";

function Inicio() {
    function scrollDown() {
        document.getElementById("item-two").scrollIntoView({behavior: 'smooth'});
    }
    return (
        <div className="home-container">
            <section className="item-one">
                <video loop autoPlay muted className="one-video">
                    <source src={require('./assets/videos/bgvideo-cropped.mp4')} type="video/mp4" />
                </video>
                <span className="one-head">
                    líderes en calidad de construcción e infraestructura
                </span>
                <button id="scroll-down" className="scrollDwn" type="button" onClick={scrollDown}>&raquo;</button>
            </section>
            <section className="item-two" id="item-two">
                <h1 className="two-head" id="filosofia"> filosofía</h1>
                <article className="two-box">
                    <img src={require("./assets/images/mision-f.JPG")} alt="mision" className="box-img" />
                    <h2 className="box-h2"> Mision</h2>
                    <p className="box-txt">
                        Convertirnos en lideres de la construcción resolviendo las necesidades del cliente y a la par,
                        ser una fuente responsable generadora de empleos que lleve a mejoramiento social.
                    </p>
                </article>
                <article className="two-box">
                    <img src={require("./assets/images/vision.JPG")} alt="vision" className="box-img" />
                    <h2 className="box-h2"> Vision</h2>
                    <p className="box-txt">
                        Trabajar de la mano con nuestros clientes para entregarles obras de primer
                        nivel en cualquier lugar de la Republica Mexicana.
                    </p>
                </article>
                <article className="two-box">
                    <img src={require("./assets/images/vision-f.JPG")} alt="valores" className="box-img" />
                    <h2 className="box-h2"> Valores</h2>
                    <p className="box-txt">
                        Somos seres muy honestos
                    </p>
                </article>
            </section>
            <section className="item-three" id="three-bg">
                <article className="three-box">
                    <h1 className="three-head">Presencia Nacional</h1>
                    <p className="three-text">
                        CRUSA es una empresa 100% mexicana con más de 40 años de experiencia,
                        en los cuales ha ido evolucionando en la industria de la construcción,
                        participando principalmente en la modernización de la infraestructura de
                        vías terrestres y sistema carretero en los tres niveles de gobierno de la
                        Republica Mexicana, así como también en el desarrollo de proyectos de
                        construcción de inversión privada.
                    </p>
                </article>
                <img src={require('./assets/images/mapa1.jpg')} alt="mapa" className="three-img"></img>
            </section>
            <section className="item-four">
                <h1 className="four-header">Nuestros Clientes</h1>
                <Slider />
                {/* <article className="four-slide slide-one">
                    <div className="img-col">
                        <img src={require('./logos/scit.png')} className='carousel-logos' alt="logo1" />
                    </div>
                    <div className="img-col">
                        <img src={require('./logos/COMCAPUFE.png')} className='carousel-logos' alt="logo2" />
                    </div>
                    <div className="img-col">
                        <img src={require('./logos/cea.png')} className='carousel-logos' alt="logo3" />
                    </div>
                    <div className="img-col">
                        <img src={require('./logos/conagua.png')} className='carousel-logos' alt="logo4" />
                    </div>
                </article>
                <article className="four-slide slide-two">
                    <div className="img-col">
                        <img src={require('./logos/geq.png')} className='carousel-logos' alt="logo5" />
                    </div>
                    <div className="img-col">
                        <img src={require('./logos/gem.png')} className='carousel-logos' alt="logo6" />
                    </div>
                    <div className="img-col">
                        <img src={require('./logos/fertimex.png')} className='carousel-logos' alt="logo7" />
                    </div>
                    <div className="img-col">
                        <img src={require('./logos/sjr.png')} className='carousel-logos' alt="logo8" />
                    </div>
                </article>
                <article className="four-slide slide-three">
                    <div className="img-col">
                        <img src={require('./logos/pemex.png')} className='carousel-logos' alt="logo9" />
                    </div>
                    <div className="img-col">
                        <img src={require('./logos/gasnieto.png')} className='carousel-logos' alt="logo10" />
                    </div>
                    <div className="img-col">
                        <img src={require('./logos/premium.jpg')} className='carousel-logos' alt="logo11" />
                    </div>
                    <div className="img-col">
                        <img src={require('./logos/grupo_cn.png')} className='carousel-logos' alt="logo12" />
                    </div>
                </article>
                <article className="four-slide slide-four">
                    <div className="img-col">
                        <img src={require('./logos/condumex.png')} className='carousel-logos' alt="logo13" />
                    </div>
                    <div className="img-col">
                        <img src={require('./logos/nuevocontinente.png')} className='carousel-logos' alt="logo14" />
                    </div>
                    <div className="img-col">
                        <img src={require('./logos/portanova.jpg')} className='carousel-logos' alt="logo15" />
                    </div>
                </article>
                <article className="four-slide slide-five">
                    <div className="img-col">
                        <img src={require('./logos/freixenet.png')} className='carousel-logos' alt="logo16" />
                    </div>
                    <div className="img-col">
                        <img src={require('./logos/decote.png')} className='carousel-logos' alt="logo17" />
                    </div>
                </article> */}
            </section>
        </div>
    );
};

export default Inicio