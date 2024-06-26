import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

const FoodyWorld = () => {
    return (
        <div className="my-10">
          <div className="">
             <div>
                 <img className="w-[80vw] h-[60vh] rounded-lg" src="./img-3.jpg" alt="" />
             </div>
             <div>
                 <div className="my-10">
                     <h1 className="text-xl font-bold mb-3">Objectives:</h1>
                     <p> We ensure prompt and reliable food delivery services, with accurate estimated delivery times, to satisfy customer expectations and enhance their overall experience.</p>
                 </div>
                 <h1 className="text-xl font-bold">Features:</h1>
                 <div className="space-y-2 my-5">
                     <p className="flex gap-2 items-center"> <span><GoDotFill></GoDotFill></span> A food delivery platform with user authentication.</p>
                     <p className="flex gap-2 items-center"> <span><GoDotFill></GoDotFill></span> Users can add, delete, update any food item.</p>
                     <p className="flex gap-2 items-center"> <span><GoDotFill></GoDotFill></span> Only logged in user can see details, add, delete, and update any food</p>
                 </div>
                 <div className="my-10">
                      <h1 className="text-xl font-bold mb-3">Technologies:</h1>
                      <p> HTML5 | CSS3 | Tailwind CSS | MUI | React.js | JavaScript | VS Code | Git | MongoDB | Express.Js</p>
                  </div>
                 <div className="space-x-3 flex justify-center mt-10">
                 <Link to='https://brand-shop-1377c.web.app/' className="hover:text-green-600">
                 <button className=" bg-[#3c393c] font-bold bg-opacity-80 border-[1px] border-[#20c997] rounded-xl px-4 py-2 hover:cursor-pointer hover:bg-[#20c997] hover:text-black" >Live Site</button>
                     </Link>
                 <Link to='https://github.com/mmahbubr0823/brand-shop-client' className="hover:text-green-600">
                 <button className=" bg-[#3c393c] font-bold bg-opacity-80 border-[1px] border-[#20c997] rounded-xl px-4 py-2 hover:cursor-pointer hover:bg-[#20c997] hover:text-black" >GitHub Client</button>
                     </Link>
                 <Link to='https://github.com/mmahbubr0823/brand-shop-server' className="hover:text-green-600">
                 <button className=" bg-[#3c393c] font-bold bg-opacity-80 border-[1px] border-[#20c997] rounded-xl px-4 py-2 hover:cursor-pointer hover:bg-[#20c997] hover:text-black" >GitHub Server</button>
                     </Link>
                 </div>
             </div>
         </div>
        </div>
     );
};

export default FoodyWorld;