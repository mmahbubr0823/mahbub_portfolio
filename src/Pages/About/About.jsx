import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import './about.css'
import PageHeading from "../../Shared/PageHeading/PageHeading";
import WebTitle from "../../Shared/WebTitle/WebTitle";
const About = () => {
    return (
        <div className='mt-10'>
            <WebTitle title={'About'}></WebTitle>
            <PageHeading title={' KNOW ME MORE'}></PageHeading>
            <div className='flex items-center gap-6 my-10'>
            <div className='flex flex-col gap-6'>
                <a href="https://github.com/mmahbubr0823"><FaGithub className="social"></FaGithub></a>
                <a href="www.linkedin.com/in/md-mahbubur-rahman-62a6302b5"><FaLinkedin className="social"></FaLinkedin></a>
                <a href="https://www.facebook.com/profile.php?id=100046483116387"><FaFacebook className="social"></FaFacebook></a>
            </div>
            <div>
                <h1 className='text-2xl'>I'm Md. Mahbubur Rahman, a <span className='text-[#20c997]'>MERN Stack Web Developer.</span></h1>
                <p className='my-5'>Dedicated web developer , Strong creative and analytical skills.Motivated designer and developer with experience creating custom websites.Strong collaboration skills and proven history of application development.</p>
            </div>
            </div>
           
            <div className='grid grid-cols-2 gap-4 mt-16 '>
                <p>Birthday:  3  April, 2000 <hr className='opacity-30' /></p>
                <p>Email : mahbubfdtc@gmail.com <hr className='opacity-30' /></p>
                <p>Age : 20 <hr className='opacity-30' /></p>
                <p>Religion : Islam <hr className='opacity-30' /></p>
                <p>City : Dhaka<hr className='opacity-30' /></p>
                <p>Country : Bangladesh<hr className='opacity-30' /></p>
                <p>Phone : +880 1722947823<hr className='opacity-30' /></p>
                <p>Freelance : Available<hr className='opacity-30' /></p>
            </div>
        </div>
    );
};

export default About;