import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

const WeedyHub = () => {
    return (
       <div className="my-20">
         <div className="flex gap-5">
            <div>
                <img className="w-[350px] rounded-lg" src="./img-1.jpg" alt="" />
            </div>
            <div>
                <h1 className="text-xl font-bold">Features:</h1>
                <div className="space-y-2 my-5">
                    <p className="flex gap-2 items-center"> <span><GoDotFill></GoDotFill></span> A role-based authorization system with three roles: user, premium-user, and admin.</p>
                    <p className="flex gap-2 items-center"> <span><GoDotFill></GoDotFill></span> Admins oversee the system, managing users, premium-user, and biodata also approve.</p>
                    <p className="flex gap-2 items-center"> <span><GoDotFill></GoDotFill></span> Users can add biodata and get contact info after payments through the Stripe integration</p>
                </div>
                <div className="space-x-3 flex justify-center">
                <Link to='https://assignment-12-client-rho.vercel.app/' className="hover:text-green-600">
                <button className=" bg-[#3c393c] font-bold bg-opacity-80 border-[1px] border-[#20c997] rounded-xl px-4 py-2 hover:cursor-pointer hover:bg-[#20c997] hover:text-black" >Live Site</button>
                    </Link>
                <Link to='https://github.com/mmahbubr0823/weedy-hub' className="hover:text-green-600">
                <button className=" bg-[#3c393c] font-bold bg-opacity-80 border-[1px] border-[#20c997] rounded-xl px-4 py-2 hover:cursor-pointer hover:bg-[#20c997] hover:text-black" >GitHub Client</button>
                    </Link>
                <Link to='https://github.com/mmahbubr0823/weedy-hub-server' className="hover:text-green-600">
                <button className=" bg-[#3c393c] font-bold bg-opacity-80 border-[1px] border-[#20c997] rounded-xl px-4 py-2 hover:cursor-pointer hover:bg-[#20c997] hover:text-black" >GitHub Server</button>
                    </Link>
                </div>
            </div>
        </div>
       </div>
    );
};

export default WeedyHub;