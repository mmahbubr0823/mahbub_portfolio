import { FaHtml5, FaReact, FaGitAlt } from "react-icons/fa6";
import { FaCss3Alt, FaNodeJs, FaBootstrap, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import PageHeading from "../../Shared/PageHeading/PageHeading";
import WebTitle from "../../Shared/WebTitle/WebTitle";
const Skills = () => {
    return (
        <div className="mt-10">
            <WebTitle title={'Skills'}></WebTitle>
            <div>
                <div className="skill-title">
                    <h1 className=' text-4xl uppercase font-bold'>
                        Professional Skill Set
                    </h1>
                    <div className="progress-line">
                        <span></span>
                    </div>
                </div>
                <div className="my-10 grid grid-cols-4 text-center gap-x-32 gap-y-10">
                    <div className=" border-[1px] border-[#368312] rounded-lg p-3 hover:border-[#20c997]">
                        <div>
                            <span className="text-8xl"><FaHtml5></FaHtml5></span>
                        </div>
                        <h1 className="mt-2">HTML5</h1>
                    </div>
                    <div className=" border-[1px] border-[#368312] rounded-lg p-3 hover:border-[#20c997]">
                        <div>
                            <span className="text-8xl"><FaCss3Alt></FaCss3Alt></span>
                        </div>
                        <h1 className="mt-2">CSS3</h1>
                    </div>
                    <div className=" border-[1px] border-[#368312] rounded-lg p-3 hover:border-[#20c997]">
                        <div>
                            <span className="text-8xl"><SiTailwindcss></SiTailwindcss></span>
                        </div>
                        <h1 className="mt-2">Tailwindcss</h1>
                    </div>
                    <div className=" border-[1px] border-[#368312] rounded-lg p-3 hover:border-[#20c997]">
                        <div>
                            <span className="text-8xl"><FaBootstrap></FaBootstrap></span>
                        </div>
                        <h1 className="mt-2">Bootstrap</h1>
                    </div>
                    <div className=" border-[1px] border-[#368312] rounded-lg p-3 hover:border-[#20c997]">
                        <div>
                            <span className="text-8xl"><IoLogoJavascript></IoLogoJavascript></span>
                        </div>
                        <h1 className="mt-2">Javascript</h1>
                    </div>
                    <div className=" border-[1px] border-[#368312] rounded-lg p-3 hover:border-[#20c997]">
                        <div>
                            <span className="text-8xl"><FaReact></FaReact></span>
                        </div>
                        <h1 className="mt-2">React</h1>
                    </div>
                    <div className=" border-[1px] border-[#368312] rounded-lg p-3 hover:border-[#20c997]">
                        <div>
                            <span className="text-8xl"><FaNodeJs></FaNodeJs></span>
                        </div>
                        <h1 className="mt-2">NodeJs</h1>
                    </div>
                    <div className=" border-[1px] border-[#368312] rounded-lg p-3 hover:border-[#20c997]">
                        <div>
                            <span className="text-8xl"><DiMongodb></DiMongodb></span>
                        </div>
                        <h1 className="mt-2">Mongodb</h1>
                    </div>
                </div>
            </div>
            <div>
                <PageHeading title={'Tools I use'}></PageHeading>
                <div className="my-10 grid grid-cols-3 text-center gap-x-32 gap-y-10">
                    <div className=" border-[1px] border-[#368312] rounded-lg p-3 hover:border-[#20c997]">
                        <div>
                            <span className="text-8xl"><IoLogoFirebase></IoLogoFirebase></span>
                        </div>
                        <h1 className="mt-2">Firebase</h1>
                    </div>
                    <div className=" border-[1px] border-[#368312] rounded-lg p-3 hover:border-[#20c997]">
                        <div>
                            <span className="text-8xl"><FaGitAlt></FaGitAlt></span>
                        </div>
                        <h1 className="mt-2">Git</h1>
                    </div>
                    <div className=" border-[1px] border-[#368312] rounded-lg p-3 hover:border-[#20c997]">
                        <div>
                            <span className="text-8xl"><FaFigma></FaFigma></span>
                        </div>
                        <h1 className="mt-2">Figma</h1>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skills;