
function BannerSection() {
    const playMusic = () => {
        const audio = new Audio('');
        audio.play();
    };

    return (
        <div className="Banner">
            <h6 className="sub-title">We are getting married</h6>
            <h1 className="names">Jadon & Programming</h1>
            <img src="" alt="" />
            <button className="music-button" onClick={playMusic}>▶️</button>
        </div>
    );
}

export default BannerSection;