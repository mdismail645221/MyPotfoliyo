 import React from 'react';
 
 const AboutMe = () => {

    const data = [
        "24, JULY, 1999",
        "23 Years",
        "Gazipur, Dhaka, Bangladesh",
        "+8801612147103",
        "mdismail645221@gmail.com",
        "National University, Social Work, 2022 to Present",
    ]

    return (
        <section className='container mx-auto mb-32'>
            <div className='abouteMe-title text-center text-4xl font-bold text-[#4868ff]'>
                <h3>About Me</h3>
            </div>
            {/* --------about me hero start ---------- */}
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2'>
                <div>
                    <a href='#'><img src="" alt="me" /></a>
                </div>
                {/* right */}
                <div className='right'>
                    <div className='ab-right-title'>
                        <h4>MERN STACK WEB DEVELOPER</h4>
                        <p>this is paragraph.this is paragraph.this is paragraph.this is paragraph.this is paragraph.this is paragraph.this is paragraph.</p>
                    </div>
                    <ul>
                        <li><span>Date of birth:</span>24, JULY, 1999</li>
                        <li><span>Age:</span>23</li>
                        <li><span>State:</span>Gazipur, Dhaka, Bangladesh</li>
                        <li><span>Phone:</span>+8801612147103</li>
                        <li><span>email:</span><a href="mailto">mdismail645221@gmail.com</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
 };
 
 export default AboutMe;