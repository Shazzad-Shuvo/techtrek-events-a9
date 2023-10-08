import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../shared/Navbar";

const Event = () => {

    const event = useLoaderData();
    // const { id, name, details, image, price } = event;

    const { _id } = useParams();
    // console.log(typeof _id);
    const idInt = parseInt(_id);
    // console.log(typeof idInt);

    const anEvent = event.find(item => item.id === idInt);
    // console.log(anEvent);
    const { name, details, image, price } = anEvent;

    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-3xl mx-auto card bg-base-100 shadow-xl">
                <figure><img className="w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;