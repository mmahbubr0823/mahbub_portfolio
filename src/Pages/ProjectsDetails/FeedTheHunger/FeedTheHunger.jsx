import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
const feedTheHunger = () => {
    return (
        <div className="my-10">
          <div className="">
             <div>
                 <img className="w-[80vw] h-[60vh] rounded-lg" src="./img-2.jpg" alt="" />
             </div>
             <div>
                 <div className="my-10">
                     <h1 className="text-xl font-bold mb-3">Objectives:</h1>
                     <p> This platform ensures that people in undeserved communities or facing financial hardships have access to food resources by facilitating the donation and distribution process through an online platform.</p>
                 </div>
                 <h1 className="text-xl font-bold">Features:</h1>
                 <div className="space-y-2 my-5">
                     <p className="flex gap-2 items-center"> <span><GoDotFill></GoDotFill></span>Admins oversee the system, managing users, instructors, also review and approve.</p>
                     <p className="flex gap-2 items-center"> <span><GoDotFill></GoDotFill></span> A role-based authorization system with three roles: user, donor, and admin</p>
                     <p className="flex gap-2 items-center"> <span><GoDotFill></GoDotFill></span> Users can get food and donor can add and modify any food item</p>
                 </div>
                 <div className="my-10">
                     <h1 className="text-xl font-bold mb-3">Technologies:</h1>
                     <p> HTML5 | CSS3 | Tailwind CSS | React.js | JavaScript | VS Code | Git | MongoDB | Express.Js</p>
                 </div>
                 <div className="space-x-3 flex justify-center mt-10">
                 <Link to='https://assignment-11-client-five.vercel.app/' className="hover:text-green-600">
                 <button className=" bg-[#3c393c] font-bold bg-opacity-80 border-[1px] border-[#20c997] rounded-xl px-4 py-2 hover:cursor-pointer hover:bg-[#20c997] hover:text-black" >Live Site</button>
                     </Link>
                 <Link to='https://github.com/mmahbubr0823/feed-the-hunger-client' className="hover:text-green-600">
                 <button className=" bg-[#3c393c] font-bold bg-opacity-80 border-[1px] border-[#20c997] rounded-xl px-4 py-2 hover:cursor-pointer hover:bg-[#20c997] hover:text-black" >GitHub Client</button>
                     </Link>
                 <Link to='https://github.com/mmahbubr0823/feed-the-hunger-server' className="hover:text-green-600">
                 <button className=" bg-[#3c393c] font-bold bg-opacity-80 border-[1px] border-[#20c997] rounded-xl px-4 py-2 hover:cursor-pointer hover:bg-[#20c997] hover:text-black" >GitHub Server</button>
                     </Link>
                 </div>
             </div>
         </div>
        </div>
     );
};

export default feedTheHunger;