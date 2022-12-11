import React, { useState } from 'react';

const ContactForm = () => {

    const [name, setName] = useState(null)
    const [email, setEmail]= useState(null)
    const [subject, setSubject]= useState(null)
    const [message, setMessage]= useState(null)


    const handleSubmit = (event) => {
        event.preventDefault()
        const userInfo = {
            name, 
            email,
            subject,
            message
        }
        console.log(userInfo)
    }


    return (
        <section className='container mx-auto py-16 mb-32 bg-[#222222]' >
            <div className='contact-title text-center'>
                <h3 className='text-[#4868ff] text-4xl font-bold mb-12'>Contact Me</h3>
            </div>
            {/* contact form section start */}
            <form onSubmit={handleSubmit} className="w-96 mx-auto">
                <div className='mb-3'>
                    <label className='text-white font-semibold'>Name:</label><br />
                    <input onChange={(e) => setName(e.target.value)} type="text" name='name' placeholder="enter your Name" className='px-4 py-3 rounded-lg shadow-lg w-full' required/>
                </div>
                {/* email fild */}
                <div className='mb-3'>
                    <label className='text-white font-semibold'>Email:</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name='email' placeholder="enter your Name" className='px-4 py-3 rounded-lg shadow-lg w-full' required />
                </div>
                {/* email Subject */}
                <div className='mb-3'>
                    <label className='text-white font-semibold'>Subject:</label>
                    <input onChange={(e) => setSubject(e.target.value)}   type="text" name='subject' placeholder="subject" className='px-4 py-3 rounded-lg shadow-lg w-full' required />
                </div>
                {/* email message */}
                <div className='mb-3'>
                    <label className='text-white font-semibold'>Message:</label>
                    <textarea onChange={(e) => setMessage(e.target.value)}  type="text" name='message' placeholder="message" className='px-4 py-3 rounded-lg shadow-lg w-full'required />
                </div>
                <button type='submit' value="submit" className='common-btn'>Submit</button>
            </form>
        </section>
    );
};

export default ContactForm;