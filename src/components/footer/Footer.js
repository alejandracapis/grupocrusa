import './Footer.css';


function Footer() {
    return (
        <div className='footer-container'>
            <copyright className='copyright'>
                &copy;2024 Grupo Crusa. Todos los derechos reservados
            </ copyright>
            <a className="aviso" href = {require("./avisodeprivacidad.pdf")}>Aviso de Privacidad</a>
        </div>
    );
}

export default Footer