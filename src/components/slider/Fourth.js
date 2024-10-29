function Fourth() {
    return (
        <article className="four-slide slide-four">
            <div className="img-col">
                <img src={require('./logos/condumex.png')} className='carousel-logos' alt="logo13" id="condumex" />
            </div>
            <div className="img-col">
                <img src={require('./logos/nuevocontinente.png')} className='carousel-logos' alt="logo14" />
            </div>
            <div className="img-col">
                <img src={require('./logos/kfc.png')} className='carousel-logos' alt="logo15" id="kfc"/>
            </div>
        </article>
    );
}

export default Fourth;
