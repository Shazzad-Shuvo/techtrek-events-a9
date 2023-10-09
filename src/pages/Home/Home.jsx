import { useLoaderData } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Banner from "./Banner";
import EventsCard from "./EventsCard";
import Footer from "../shared/Footer";
import Sponsor from "./Sponsor";


const Home = () => {

    const events = useLoaderData();
    console.log(events);

    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="mt-20">
                <h2 className="text-4xl font-semibold text-center">Our Services</h2>
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {
                        events.map(event => <EventsCard key={event.id} event={event}></EventsCard>)
                    }
                </div>
            </div>
            <Sponsor></Sponsor>
            <Footer></Footer>
        </div>
    );
};

export default Home;