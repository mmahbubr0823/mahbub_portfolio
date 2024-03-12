import PageHeading from "../../Shared/PageHeading/PageHeading";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import WebTitle from "../../Shared/WebTitle/WebTitle";
const Contact = () => {
    const [loading, setLoading] = useState(false);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        // email api 
        emailjs
            .sendForm('service_u70oxqb', 'template_36dyvoi', form.current, {
                publicKey: 'FradOTVgDnAR3uouq',
            })
            .then(
                (res) => {
                    if (res.status === 200) {
                        toast.success('Your message was successfully sent!');
                        setLoading(false);
                        e.target.reset();
                    }
                    (error) => {
                        console.log('FAILED...', error.text);
                    }
                }
            )
    }

    return (
        <div className="mt-10">
            <WebTitle title={'Contact'}></WebTitle>
            <PageHeading title={'  GET IN TOUCH'}></PageHeading>
            <div className="mt-10">
                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 mt-10">
                    <input type="text" name="user_name" className="w-[60vw] bg-[#3c393c] bg-opacity-80 border-[1px] rounded-full px-6 py-3 " required placeholder="Name" />
                    <input type="email" name="user_email" className="w-[60vw] bg-[#3c393c] bg-opacity-80 border-[1px] rounded-full px-6 py-3 " required placeholder="Email" />
                    <textarea name="message" className="w-[60vw] bg-[#3c393c] bg-opacity-80 border-[1px] rounded-3xl px-6 py-3 " cols="30" rows="8" required placeholder="Message" />
                {
                    loading === true ?
                    <input className="w-[10vw] bg-[#e1d6b2] font-bold bg-opacity-80 border-[1px] border-[#20c997] rounded-xl px-6 py-3 hover:cursor-pointer" type="submit" value="Send" disabled />
                    :
                    <input className="w-[10vw] bg-[#3c393c] font-bold bg-opacity-80 border-[1px] border-[#20c997] rounded-xl px-6 py-3 hover:cursor-pointer hover:bg-[#20c997] hover:text-black" type="submit" value="Send" disabled={loading === true} />
                }
                </form>
            </div>

        </div>
    );
};

export default Contact;