

const Banner = () => {
    return (
        <div className="">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/ncB8TQJ/preview.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content mt-28">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Tech & Gaming Events Redefined!</h1>
                        <p className="mb-5">We prioritize on delivering successful event and client satisfaction.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;