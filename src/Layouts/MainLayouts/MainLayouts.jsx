import { Outlet } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import { Toaster } from "react-hot-toast";

const MainLayouts = () => {
    return (
        <div className="flex bg-[#212529] text-white relative">
            <div className="border border-l-2 border-white fixed">
                <NavBar></NavBar>
            </div>
            <div className="mt-10 ml-24 max-w-screen-lg min-h-screen relative left-52">
            <Toaster/>.
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayouts;