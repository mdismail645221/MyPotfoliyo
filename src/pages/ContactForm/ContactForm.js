import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    // const [name, setName] = useState(null)
    // const [email, setEmail]= useState(null)
    // const [subject, setSubject]= useState(null)
    // const [message, setMessage]= useState(null)
    const form = useRef();


    const handleSubmit = (event) => {
        event.preventDefault()

        console.log("form", form.current)
       
        emailjs.sendForm(`${process.env.REACT_APP_SERVICE_KEY}`, `${process.env.REACT_APP_TEMPLATE_KEY}`, form.current, `${process.env.REACT_APP_PUB_KEY}`)
            .then((result) => {
                console.log(result.text);
                console.log("meassage send")
            }, (error) => {
                console.log(error.text);
            });
    }


    return (
        <section className='container mx-auto py-16 mb-32 bg-[#222222] rounded-xl shadow-xl '  >
            <div className='contact-title text-center'>
                <h3 className='text-[#4868ff] text-4xl font-bold mb-12'>Contact Me</h3>
            </div>
            {/* contact form section start */}
            <form ref={form} onSubmit={handleSubmit} className="w-96 mx-auto">
                <div className='mb-3'>
                    <label className='text-white font-semibold'>Name:</label><br />
                    <input type="text" name="to_name"  placeholder="enter your Name" className='px-4 py-3 rounded-lg shadow-lg w-full' required/>
                </div>
                {/* email fild */}
                <div className='mb-3'>
                    <label className='text-white font-semibold'>Email:</label>
                    <input type="email" name="from_email" placeholder="enter your Name" className='px-4 py-3 rounded-lg shadow-lg w-full' required />
                </div>
                {/* email Subject */}
                {/* <div className='mb-3'>
                    <label className='text-white font-semibold'>Subject:</label>
                    <input onChange={(e) => setSubject(e.target.value)}   type="text" name='subject' placeholder="subject" className='px-4 py-3 rounded-lg shadow-lg w-full' required />
                </div> */}
                {/* email message */}
                <div className='mb-3'>
                    <label className='text-white font-semibold'>Message:</label>
                    <textarea type="text" name="message" placeholder="message" className='px-4 py-3 rounded-lg shadow-lg w-full'required />
                </div>
                <input type="submit" value="Send" className='common-btn'></input>
            </form>
        </section>
    );
};

export default ContactForm;