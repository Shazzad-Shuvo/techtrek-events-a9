import Marquee from "react-fast-marquee";








const Sponsor = () => {
    return (
        <div className="mt-10">
            <h2 className="text-4xl font-semibold text-center mb-4">Sponsors On Board</h2>
            <Marquee gradient={true} gradientWidth={300} autoFill={true} >
                <img className="w-40 mx-10" src={'https://i.ibb.co/167rP9Q/Huawei.png'} alt="" />
                <img className="w-40 mx-10" src={'https://i.ibb.co/9pLYjhw/ibm-logo-18920.png'} alt="" />
                <img className="w-40 mx-10" src={'https://i.ibb.co/1Lxw0R7/pngwing-com.png'} alt="" />
                <img className="w-40 mx-10" src={'https://i.ibb.co/C6X1NT0/ps.png'} alt="" />
                <img className="w-40 mx-10" src={'https://i.ibb.co/556FVGs/unity.png'} alt="" />
            </Marquee>

        </div>
    );
};

export default Sponsor;