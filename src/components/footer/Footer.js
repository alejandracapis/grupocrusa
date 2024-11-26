import './Footer.css';


const Footer = () => {
    return (
        <div className='footer-container'>
            <h3 className='copyright'>
                &copy;2024 Grupo Crusa. Todos los derechos reservados
            </ h3>
            <a className="aviso" href = {require("./avisodeprivacidad.pdf")}>Aviso de Privacidad</a>
        </div>
    );
}

export default Footer