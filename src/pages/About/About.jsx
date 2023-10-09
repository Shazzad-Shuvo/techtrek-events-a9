import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";


const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="pt-20">
                <div className="sm:flex items-center max-w-screen-xl p-10 sm:p-16 md:p-24">
                    <div className="sm:w-2/3 sm:mr-10">
                        <div className="backdrop-blur-3xl p-10 rounded-lg">
                            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">about us</span>
                            <h2 className="font-bold text-3xl my-4 sm:text-4xl">About <span className="text-indigo-600 font-bold">TechTrek</span></h2>
                            <p className="text-gray-700">TechTrek is where technology and gaming converge, offering top-notch event management services. Our mission is to unite tech and gaming enthusiasts, showcase advancements, and foster a vibrant community. We plan and coordinate events, manage expos, organize tournaments, and host insightful talks and workshops. With a passion for innovation and a focus on community engagement, TechTrek promises unforgettable experiences. Join us and explore the exciting worlds of tech and gaming!</p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;