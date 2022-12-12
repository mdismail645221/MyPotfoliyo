import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Project from '../../components/Project/Project';


const SingleMyProject = () => {
    const projects = useLoaderData();
    console.log("project", projects)
    const {projectName, live, github_server_link, github_client_link, title, } = projects;


    return (
        <section className='container mx-auto py-24'>
            {/* photo gallery area */}
            <div>
                <h3 className='text-2xl font-bold text-[#4868ff] text-center pb-6'>PHOTO</h3>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-4'>
                    {
                        projects.images.map((proj, i) => <Project key={i} proj={proj}></Project>)
                    }
                </div>
            </div>

            {/* projects info */}
            <div className='project-info-container mt-24'>
                <div className='project-title'>
                    <h3 className='text-2xl font-bold text-[#4868ff] text-center p-6'>ADD FREATURES</h3>
                </div>
                {/* project info */}
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    {/* left */}
                    <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <h3><span className='text-lg font-semibold mr-2'>Prject Name:</span>{projectName}</h3>
                                <p>{title}</p>
                                <div className='flex justify-between items-center'>
                                    <a href='' className='hover:underline common-btn'><button>Live</button></a>
                                    <a href='' className='hover:underline common-btn'><button>Github Link</button></a>
                                    <a href='' className='hover:underline common-btn'><button>Server Link</button></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right */}
                    <div>
                        <h3>Features</h3>
                        <ul>
                            
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default SingleMyProject;