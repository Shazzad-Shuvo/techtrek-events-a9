
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { BsCurrencyDollar } from "react-icons/bs";

const Event = () => {

    const event = useLoaderData();

    const { _id } = useParams();
    const idInt = parseInt(_id);

    const anEvent = event.find(item => item.id === idInt);
    // console.log(anEvent);
    const { name, details, image, price } = anEvent;

    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-3xl mx-5 md:mx-auto mt-24 card bg-base-100 shadow-xl">
                <figure><img className="w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <div className="card-actions mt-5">
                        <h4 className="font-semibold">Price:</h4>
                        <p className="flex items-center"><BsCurrencyDollar></BsCurrencyDollar><span className="text-pink-900 font-semibold">{price}</span></p>
                        <button className="btn  bg-emerald-400 hover:bg-emerald-500">Book Now</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Event;