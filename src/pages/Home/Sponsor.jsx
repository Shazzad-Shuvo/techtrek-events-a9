import Marquee from "react-fast-marquee";


const Sponsor = () => {
    return (
        <div className="mt-20">
            <h2 className="text-4xl font-semibold text-center">Sponsors On Board</h2>
            <Marquee gradient={true} gradientWidth={300} >
                <p>I can be a React component, multiple React components, or just some text.</p>
                <p>I can be a React component, multiple React components, or just some text.</p>
                <p>I can be a React component, multiple React components, or just some text.</p>
                <p>I can be a React component, multiple React components, or just some text.</p>
            </Marquee>

        </div>
    );
};

export default Sponsor;