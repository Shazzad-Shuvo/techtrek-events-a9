import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div style={{ backgroundImage: 'url(https://i.ibb.co/9tmg1rC/subtle-prism.png)', backgroundSize:'cover' }}>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;