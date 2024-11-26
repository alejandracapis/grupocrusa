const Third = () => {
    return (
        <article className="four-slide slide-three">
            <div className="img-col">
                <img src={require('./logos/pemex.png')} className='carousel-logos' alt="logo9" />
            </div>
            <div className="img-col">
                <img src={require('./logos/gasnieto.png')} className='carousel-logos' alt="logo10" id="gasnieto"/>
            </div>
            <div className="img-col">
                <img src={require('./logos/fertimex.png')} className='carousel-logos' alt="logo11" id="fertimex"/>
            </div>
            <div className="img-col">
                <img src={require('./logos/grupo_cn.png')} className='carousel-logos' alt="logo12" id="grupocn" />
            </div>
        </article>
    );
}

export default Third;