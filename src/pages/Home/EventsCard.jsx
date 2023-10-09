import { Link } from "react-router-dom";

const EventsCard = ({ event }) => {
    const { id, image, name } = event;
    return (
        <div>
            <div className="card bg-base-100 shadow-lg h-[400px]">
                <figure><img className="w-full h-52" src={image} alt="Shoes" /></figure>
                <div className="card-body justify-between">
                    <h2 className="card-title">{name}</h2>
                    <div className="justify-between">
                        <Link to={`/event/${id}`}>
                            <button className="btn w-full">See Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventsCard;