
function Second() {
    return (
        <article className="four-slide slide-two">
            <div className="img-col">
                <img src={require('./logos/geq.png')} className='carousel-logos' alt="logo5" />
            </div>
            <div className="img-col">
                <img src={require('./logos/gem.png')} className='carousel-logos' alt="logo6" id="marques"/>
            </div>
            <div className="img-col">
                <img src={require('./logos/huimilpan.png')} className='carousel-logos' alt="logo7" id="huimilpan"/>
            </div>
            <div className="img-col">
                <img src={require('./logos/sjr.png')} className='carousel-logos' alt="logo8" id="sjr"/>
            </div>
        </article>
    );
}

export default Second;
