import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import { GrLocation } from "react-icons/gr";

const OurTeam = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex items-center justify-center mt-20">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                    {/* <!-- 1 card --> */}
                    <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                        <div className=" text-white flex items-center absolute rounded-full py-2 px-2 shadow-xl bg-pink-500 left-4 -top-6">
                            <img className="w-14 h-14 object-cover rounded-full mx-auto shadow-lg" src="https://i.ibb.co/WF00mnw/jurica-koletic-7-YVZYZe-ITc8-unsplash.jpg" alt="" />
                        </div>
                        <div className="mt-8">
                            <p className="text-xl font-semibold my-2">Austin Powers</p>
                            <div className="flex items-center space-x-2 text-sm">
                                <p className=" text-lg"><GrLocation></GrLocation></p>
                                <p>CEO</p>
                            </div>
                            <div className="border-t-2"></div>

                            <div className="flex justify-between">
                                <div className="my-2">
                                    <p className="font-semibold text-base mb-2">Project Handled</p>
                                    <div className="flex space-x-2">
                                        <p className="text-gray-400 font-semibold">37</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- 2 card --> */}
                    <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                        <div className=" text-white flex items-center absolute rounded-full py-2 px-2 shadow-xl bg-pink-500 left-4 -top-6">
                            <img className="w-14 h-14 object-cover rounded-full mx-auto shadow-lg" src="https://i.ibb.co/g3FkDZ2/photo-1611342799915-5dd9f1665d04-ixid-MXwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hw-ixlib-rb.jpg" alt="" />
                        </div>
                        <div className="mt-8">
                            <p className="text-xl font-semibold my-2">Julia Dean</p>
                            <div className="flex items-center space-x-2 text-sm">
                                <p className=" text-lg"><GrLocation></GrLocation></p>
                                <p>Creative Manager</p>
                            </div>
                            <div className="border-t-2"></div>

                            <div className="flex justify-between">
                                <div className="my-2">
                                    <p className="font-semibold text-base mb-2">Project Handled</p>
                                    <div className="flex space-x-2">
                                        <p className="text-gray-400 font-semibold">37</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- 3 card --> */}
                    <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                        <div className=" text-white flex items-center absolute rounded-full py-2 px-2 shadow-xl bg-pink-500 left-4 -top-6">
                            <img className="w-14 h-14 object-cover rounded-full mx-auto shadow-lg" src="https://i.ibb.co/j86sxQV/albert-dera-ILip77-Sbm-OE-unsplash.jpg" alt="" />
                        </div>
                        <div className="mt-8">
                            <p className="text-xl font-semibold my-2">Harisson Ford</p>
                            <div className="flex items-center space-x-2 text-sm">
                                <p className=" text-lg"><GrLocation></GrLocation></p>
                                <p>Event Planning Expert</p>
                            </div>
                            <div className="border-t-2"></div>

                            <div className="flex justify-between">
                                <div className="my-2">
                                    <p className="font-semibold text-base mb-2">Project Handled</p>
                                    <div className="flex space-x-2">
                                        <p className="text-gray-400 font-semibold">33</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- 4 card --> */}
                    <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                        <div className=" text-white flex items-center absolute rounded-full py-2 px-2 shadow-xl bg-pink-500 left-4 -top-6">
                            <img className="w-14 h-14 object-cover rounded-full mx-auto shadow-lg" src="https://i.ibb.co/3y54fwQ/christopher-campbell-r-DEOVt-E7v-Os-unsplash.jpg" alt="" />
                        </div>
                        <div className="mt-8">
                            <p className="text-xl font-semibold my-2">Christene Johnson</p>
                            <div className="flex items-center space-x-2 text-sm">
                                <p className=" text-lg"><GrLocation></GrLocation></p>
                                <p>Tech Support Planner</p>
                            </div>
                            <div className="border-t-2"></div>

                            <div className="flex justify-between">
                                <div className="my-2">
                                    <p className="font-semibold text-base mb-2">Project Handled</p>
                                    <div className="flex space-x-2">
                                        <p className="text-gray-400 font-semibold">35</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default OurTeam;