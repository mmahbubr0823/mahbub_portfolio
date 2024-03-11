import { useEffect, useRef } from "react";
import { FaDownload } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import WebTitle from "../../Shared/WebTitle/WebTitle";

const pdfUrl = 'https://mahbub23-portfolio.netlify.app/Mahbub-Resume.pdf';
const Home = () => {
  const reference = useRef(null);
  useEffect(() => {
    const typed = new Typed(reference.current, {
      strings: ['Front-End Developer', 'MERN-Stack Developer', 'React Developer'],
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 1000,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, [])

  // download function 

  const handleDownload = (url) => {
    fetch(url)
      .then(res => res.blob())
      .then(blob => {
        const blobUrl = window.URL.createObjectURL(new Blob([blob], {type: 'octet-stream'}));
        const aTag = document.createElement('a');
        aTag.href =blobUrl;
        aTag.setAttribute('download', 'Mahbub-Resume.pdf');
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      })
  }

  return (
    <div className="mt-24">
      <WebTitle title={'Home'}></WebTitle>
      <div className="flex justify-between items-center gap-10">
        <div>
          <h1 className="text-2xl">Hi! It&apos;s me, <span className="text-[#20c997] font-semibold">Md. Mahbubur Rahman</span></h1>
          <h1 className="my-6 text-3xl font-bold">I&apos;m a <span className="text-[#20c997] font-semibold" ref={reference}></span></h1>
          <p className="text-lg">I am a well-versed MERN Stack developer & designer<br />  with 1 years plus experience. I have led many<br /> projects from design to deployment which have impacted<br /> thousands  of people. I love to blend my skills  in the most<br /> creative way possible.</p>
          <div className="flex mt-16 px-4 space-x-16">
            <button onClick={() => handleDownload(pdfUrl)} className="flex items-center gap-2 border border-1 px-3 py-1 rounded-md border-[#20c997] hover:bg-[#20c997] hover:text-black">Resume<FaDownload></FaDownload></button>
            <Link to='/contact'>
              <button className="flex items-center gap-2 border border-1 px-3 py-1 rounded-md border-[#20c997] hover:bg-[#20c997] hover:text-black">Hire Me<FaArrowUpRightFromSquare></FaArrowUpRightFromSquare></button>
            </Link>
          </div>
        </div>
        <div className="author-img">
          <img className="w-[400px] h-[400px] rounded-full border-[2px] border-[#20c997]" src="https://i.ibb.co/kmXnpqR/IMG-20230905-100823.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;