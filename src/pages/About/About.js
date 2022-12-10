import React from 'react';
import user from '../../assets/images/user.png'
import backgroundImg from '../../assets/images/background.png'
import '../About/About.css'

const About = () => {
    return (
        <section className='container mx-auto'>
           <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
                {/* left */}
                <div>
                    <h1 className='text-5xl font-bold'>Hello !</h1>
                    <h1 className='text-4xl font-semibold'>I'm Mohammad Ismail Hossain</h1>
                    <p>I'M MERN STACK WEB DEVELOPER. l always try my best to provide the best experience.</p>
                    <button className='bg-blue-600 inline-block'>Download Resume</button>
                </div> 
                {/* right */}
                <div className='image-box'>
                    <img src={user} alt='box-img'/>
                    {/* <div className='pattern'>
                        <img className='w-[150px]' src={backgroundImg} alt='images'/>
                        <img className='w-[150px]' src={backgroundImg} alt='images'/>
                    </div> */}
                </div> 
           </div>
        </section>
    );
};

export default About;