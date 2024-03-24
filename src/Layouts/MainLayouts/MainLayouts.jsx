import { Outlet } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import { Toaster } from "react-hot-toast";

const MainLayouts = () => {
    return (
        <div className="lg:flex bg-[#212529] text-white lg:relative">
            <div className="border border-l-2 border-white lg:fixed">
                <NavBar></NavBar>
            </div>
            <div className="mt-10 pl-16 max-w-screen-lg min-h-screen relative lg:left-52">
            <Toaster/>.
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayouts;