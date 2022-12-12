import { useQuery } from '@tanstack/react-query';
// import React, { useEffect, useState } from 'react';
import SingleProjects from './SingleProjects';

const MyProjects = () => {

    
    const {data:myProjects=[]} = useQuery({
        queryKey: ["projects"],
        queryFn: async()=> {
            const res = await fetch(`https://myportfolio-server.vercel.app/projects`);
            const data = await res.json();
            return data;
        }
    })

    console.log("myProjects", myProjects)

    
    
    // const [projects, setProjects] = useState([]);
    // useEffect(()=> {
    //     fetch('/projects.json')
    //     .then(res=> res.json())
    //         .then(data => setProjects(data))
    // },[])


    return (
        <section className='container mx-auto py-32'>
            <div className='flex justify-center'>
                <h1 className='text-[#4868ff] text-4xl font-bold mb-12'>My Projects</h1>
            </div>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    myProjects.map(project=> <SingleProjects
                        key={project._id}
                        project={project}
                    ></SingleProjects>)
                }
                
            </div>
        </section>
    );
};

export default MyProjects;