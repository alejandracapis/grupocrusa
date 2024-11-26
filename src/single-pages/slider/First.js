const First = () => {
    return (
        <article className="four-slide slide-one">
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
    );
}

export default First;