const Fifth = () => {
    return (
        <article className="four-slide slide-five">
            <div className="img-col">
                <img src={require('./logos/freixenet.png')} className='carousel-logos' alt="logo16" id="freixenet"/>
            </div>
            <div className="img-col">
                <img src={require('./logos/decote.png')} className='carousel-logos' alt="logo17" />
            </div>
        </article>
    );
}

export default Fifth;