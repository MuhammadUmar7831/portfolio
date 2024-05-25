import React, { useEffect, useState } from 'react';

export default function MenuOverlay(props){
    const [isVisible, setIsVisible] = useState(false);

    const { onClose, handleProfileClick, handleTechnologiesClick, handleProjectsClick, handleContactClick } = props;

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className={`fixed top-0 left-0 w-full h-full dark-bg flex items-center justify-center z-10 transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-white text-4xl w-4/5 ">
                <nav className="flex flex-col space-y-4 text-center Montserrat">
                    <button onClick={handleProfileClick} className="hover:text-gray-300">Profile</button>
                    <button onClick={handleTechnologiesClick} className="hover:text-gray-300">Technologies</button>
                    <button onClick={handleProjectsClick} className="hover:text-gray-300">Projects</button>
                    <button onClick={handleContactClick} className="hover:text-gray-300">Contact</button>
                </nav>
            </div>
            <button onClick={onClose} className="absolute top-4 right-4 text-white focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
};