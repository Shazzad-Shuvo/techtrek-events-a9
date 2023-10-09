




const Review = () => {
    return (
        <div className="mt-20">
            <h2 className="text-4xl font-semibold text-center">Client Reviews</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* card 1 */}
                <div className="mx-5 min-h-screen grid place-content-center">
                    <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl text-white p-8 text-center h-72 max-w-sm mx-auto">
                        <h1 className="text-2xl mb-3 underline">Satisfactory</h1>
                        <p className="text-sm">They played an importtant role in making my tech launch event a success.</p>
                    </div>
                    <div className="bg-white py-5 px-8 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto">

                        <img className="w-14 h-14 object-cover rounded-full mx-auto shadow-lg" src="https://i.ibb.co/g3FkDZ2/photo-1611342799915-5dd9f1665d04-ixid-MXwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hw-ixlib-rb.jpg" alt="" />
                        <p className="capitalize text-lg mt-1">essie walton</p>
                        
                    </div>
                </div>
                {/* card 2 */}
                <div className="mx-5 min-h-screen grid place-content-center">
                    <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl text-white p-8 text-center h-72 max-w-sm mx-auto">
                        <h1 className="text-2xl mb-3 underline">Excellent</h1>
                        <p className="text-sm">I would not have found a better planner for my gaming fest other than TechTrek.</p>
                    </div>
                    <div className="bg-white py-5 px-8 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto">

                        <img className="w-14 h-14 object-cover rounded-full mx-auto shadow-lg" src="https://i.ibb.co/WF00mnw/jurica-koletic-7-YVZYZe-ITc8-unsplash.jpg" alt="" />
                        <p className="capitalize text-lg mt-1">Alfred Wayne</p>
                        
                    </div>
                </div>
                {/* card 3 */}
                <div className="mx-5 min-h-screen grid place-content-center">
                    <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl text-white p-8 text-center h-72 max-w-sm mx-auto">
                        <h1 className="text-2xl mb-3 underline">Awesome</h1>
                        <p className="text-sm">They are really agile and energetic people that you can rely on to get the job done.</p>
                    </div>
                    <div className="bg-white py-5 px-8 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto">

                        <img className="w-14 h-14 object-cover rounded-full mx-auto shadow-lg" src="https://i.ibb.co/3y54fwQ/christopher-campbell-r-DEOVt-E7v-Os-unsplash.jpg" alt="" />
                        <p className="capitalize text-lg mt-1">Jenna White</p>
                        
                    </div>
                </div>
                {/* card 4 */}
                <div className="mx-5 min-h-screen grid place-content-center">
                    <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl text-white p-8 text-center h-72 max-w-sm mx-auto">
                        <h1 className="text-2xl mb-3 underline">Professional</h1>
                        <p className="text-sm">Their professionalism towards their work shows how experienced and adept they are at their work. </p>
                    </div>
                    <div className="bg-white py-5 px-8 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto">

                        <img className="w-14 h-14 object-cover rounded-full mx-auto shadow-lg" src="https://i.ibb.co/j86sxQV/albert-dera-ILip77-Sbm-OE-unsplash.jpg" alt="" />
                        <p className="capitalize text-lg mt-1">John Wick</p>
                        
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Review;