import React from 'react';

const Project = ({proj}) => {
    console.log("proj", proj)

    return (
        <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
            <div className="space-y-4">
                <div className="space-y-2">
                    <img src={proj} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    <div className="flex items-center text-xs">
                        <span>6 min ago</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;