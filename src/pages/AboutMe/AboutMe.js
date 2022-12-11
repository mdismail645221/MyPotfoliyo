import React from 'react';
import '../AboutMe/AboutMe.css'

<script>
  AOS.init();
</script>

const AboutMe = () => {
   

    // const data = [
    //     "24, JULY, 1999",
    //     "23 Years",
    //     "Gazipur, Dhaka, Bangladesh",
    //     "+8801612147103",
    //     "mdismail645221@gmail.com",
    //     "National University, Social Work, 2022 to Present",
    // ]


    return (
        <section data-aos="fade-left" data-aos-duration="4000" className='container mx-auto mb-32 bg-white py-16 border border-spacing-6 border-gray-200 rounded-xl shadow-xl '>
            <div className='abouteMe-title'>
                <h3 className='text-center text-4xl font-bold text-[#4868ff] mb-12'>About Me</h3>
            </div>
            {/* --------about me hero start ---------- */}
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 px-3'>
                <div>
                    <a href='#'><img src="" alt="me" /></a>
                </div>
                {/* right */}
                <div className='ab-right'>
                    <div className='ab-right-title'>
                        <h4 className='text-2xl font-semibold'>MERN STACK WEB DEVELOPER</h4>
                        <p className='text-justify'>I am strategic and goal-oriented, and I always work with an end goal in mind. I like to take challenges in everything. I believe I am a good candidate for this position.</p>
                    </div>
                    <ul>
                        <li><strong className='mr-2'>Date of birth:</strong>24, JULY, 1999</li>
                        <li><strong className='mr-2'>Age:</strong>23</li>
                        <li><strong className='mr-2'>State:</strong>Gazipur, Dhaka, Bangladesh</li>
                        <li><strong className='mr-2'>Education:</strong>National University, Social Work, 2022 to Present</li>
                        <li><strong className='mr-2'>Phone:</strong>+8801612147103</li>
                        <li><strong className='mr-2'>email:</strong> <a href="mailto:mdismail645221@gmail.com" className='text-blue-600 hover:underline'>mdismail645221@gmail.com</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;