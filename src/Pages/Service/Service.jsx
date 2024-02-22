import { FaWindowRestore, FaCode } from "react-icons/fa6";
import { IoIosRocket } from "react-icons/io";
import PageHeading from "../../Shared/PageHeading/PageHeading";
import WebTitle from "../../Shared/WebTitle/WebTitle";



const Service = () => {
    return (
        <div className="mt-10">
            <WebTitle title={'Service'}></WebTitle>
            <PageHeading title={' WHAT DO I DO?'}></PageHeading>
            <div className='grid grid-cols-3 gap-5 mt-10'>
                <div className='bg-[#3c393c] bg-opacity-80 p-5 rounded-xl border-[1px] shadow-md'>
                    <h1 className='mx-[50%] text-5xl text-[#20c997]'><FaWindowRestore></FaWindowRestore></h1>
                    <h1 className='text-xl my-4'>Design</h1>
                    <p>I design beautiful and functional user interfaces that are easy to use and intuitive. Love the creative process of bringing something from idea to reality.</p>
                </div>
                <div className='bg-[#3c393c] bg-opacity-80 p-5 rounded-xl border-[1px] shadow-md'>
                    <h1 className='mx-[50%] text-5xl text-[#20c997]'><FaCode></FaCode></h1>
                    <h1 className='text-xl my-4'>Develop</h1>
                    <p>I develop applications that are fast, responsive and user-friendly. Love the process of bringing design to life by code and making it useful tool for user.</p>
                </div>
                <div className='bg-[#3c393c] bg-opacity-80 p-5 rounded-xl border-[1px] shadow-md'>
                    <h1 className='mx-[50%] text-5xl text-[#20c997]'><IoIosRocket></IoIosRocket></h1>
                    <h1 className='text-xl my-4'>Deliver</h1>
                    <p>As an entreprenuer, I deliver a product by combining my designing and development skills. From ideation to deployment to end users, I love every parts in between.</p>
                </div>

            </div>
        </div>
    );
};

export default Service;