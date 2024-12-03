import React from "react";
import "./InicioStyles.css";
import Slider from "../slider/Slider";
import MainVideo from "./MainVideo"

const Inicio = () => {
    return (
        <div className="home-container">
            <MainVideo />
            <section className="item-two" id="item-two">
                <h1 className="two-head" id="filosofia"> filosofía</h1>
                <article className="two-box">
                    <img src={require("../assets/images/mision-f.JPG")} alt="mision" className="box-img" />
                    <h2 className="box-h2"> Mision</h2>
                    <p className="box-txt">
                        Convertirnos en lideres de la construcción resolviendo las necesidades del cliente y a la par,
                        ser una fuente responsable generadora de empleos que lleve a mejoramiento social.
                    </p>
                </article>
                <article className="two-box">
                    <img src={require("../assets/images/vision.JPG")} alt="vision" className="box-img" />
                    <h2 className="box-h2"> Vision</h2>
                    <p className="box-txt">
                        Trabajar de la mano con nuestros clientes para entregarles obras de primer
                        nivel en cualquier lugar de la Republica Mexicana.
                    </p>
                </article>
                <article className="two-box">
                    <img src={require("../assets/images/vision-f.JPG")} alt="valores" className="box-img" />
                    <h2 className="box-h2"> Valores</h2>
                    <p className="box-txt">
                        Somos una compañía responsable, honesta, comprometida con la calidad y la seguridad,
                        sentimos pasión por lo que hacemos y eso nos permite fomentar el trabajo en equipo.
                    </p>
                </article>
            </section>
            <section className="item-three" id="three-bg">
                <h1 className="three-head">Presencia Nacional</h1>
                <p className="three-text">
                    CRUSA es una empresa 100% mexicana con más de 40 años de experiencia,
                    en los cuales ha ido evolucionando en la industria de la construcción,
                    participando principalmente en la modernización de la infraestructura de
                    vías terrestres y sistema carretero en los tres niveles de gobierno de la
                    Republica Mexicana, así como también en el desarrollo de proyectos de
                    construcción de inversión privada.
                </p>
                <img src={require('../assets/images/mapa1.jpg')} alt="mapa" className="three-img" />
            </section>
            <section className="item-four">
                <h1 className="four-header">Nuestros Clientes</h1>
                    <Slider />
            </section>
        </div>
    );
};

export default Inicio