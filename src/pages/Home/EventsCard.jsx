import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const EventsCard = ({ event }) => {
    const { id, image, name } = event;

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div>
            <div className="card bg-base-100 shadow-lg h-[400px] mx-5" data-aos="fade-up">
                <figure><img className="w-full h-52" src={image} alt="" /></figure>
                <div className="card-body justify-between">
                    <h2 className="card-title">{name}</h2>
                    <div className="justify-between">
                        <Link to={`/event/${id}`}>
                            <button className="btn w-full bg-emerald-400 hover:bg-emerald-500">See Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventsCard;