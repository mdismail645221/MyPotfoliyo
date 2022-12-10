import React from 'react';
import rajuportfoliyo from '../../assets/images/rajuportfoliyo.png'
import backgroundImg from '../../assets/images/background.png'
import '../About/About.css'
import downloadResume from '../../assets/images/resume.pdf'


const About = () => {
    return (
        <section className='about-container text-white '>
            <div className=' container mx-auto grid grid-cols-1 md:grid-cols-2 items-center'>
                {/* left */}
                <div className='flex flex-col text-center  space-y-4'>
                    <h1 className='text-5xl font-bold'>Hello !</h1>
                    <h1 className='text-4xl font-semibold'>I'm Mohammad Ismail Hossain</h1>
                    <p>I'M MERN STACK WEB DEVELOPER. l always try my best to provide the best experience.</p>
                    <a href={downloadResume} target="_blank" rel="noopener noreferrer" download className='mx-auto'> <button className='common-btn'>Download Resume</button></a>
                </div> 
                {/* right */}
                <div className='image-box flex justify-center relative'>
                    <img  className='h-[600px] hidden md:block z-10' src={rajuportfoliyo} alt='box-img'/>
                    <div className='pattern absolute -z-1'>
                        <img className='w-[180px]' src={backgroundImg} alt='images'/>
                        <img className='w-[150px]' src={backgroundImg} alt='images'/>
                    </div>
                </div> 
           </div>
        </section>
    );
};

export default About;