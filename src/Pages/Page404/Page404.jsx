import { Link } from "react-router-dom";
import WebTitle from "../../Shared/WebTitle/WebTitle";
import { FaArrowLeft } from "react-icons/fa";

const Page404 = () => {
    return (
        <div>
            <WebTitle title={'Page404'}></WebTitle>
            <Link to={'/'}>
                <button className="bg-[#20c997] flex items-center gap-3 px-4 py-2 rounded-lg text-white ml-5 mt-5"><FaArrowLeft></FaArrowLeft>Home</button>
            </Link>
            <div className="flex justify-center items-center my-16">
                <img className=" w-[600px] h-[600] rounded-2xl" src="https://i.ibb.co/9T8ykCT/222468-P1-PZG2-870.jpg" alt="" />
            </div>
        </div>
    );
};

export default Page404;