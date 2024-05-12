import React, { useState, useContext } from 'react';
import { GiCandleFlame } from "react-icons/gi";
import MenuOverlay from './MenuOverlay';
import { RefContext } from '../context/RefContext';

export default function Navbar(props){
    const [isOpen, setIsOpen] = useState(false);
    const{profileRef, technologiesRef, contactRef} = useContext(RefContext);

    const handleProfileClick = () => {
        profileRef.current.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
    };

    const handleTechnologiesClick = () => {
        technologiesRef.current.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
    };

    const handleContactClick = () => {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
    };

    return (
        <div className="py-6">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
                <div className="flex items-center">
                    <span className="txt-color text-3xl"><GiCandleFlame /></span>
                    <h1 className="font-bold text-2xl ml-2 Montserrat">Muhammad Umar</h1>
                </div>
                <div className="hidden md:flex">
                    <nav className="space-x-4 Montserrat">
                        <button onClick={handleProfileClick} className="hover:text-gray-300">Profile</button>
                        <button onClick={handleTechnologiesClick} className="hover:text-gray-300">Technologies</button>
                        <button onClick={handleContactClick} className="hover:text-gray-300">Contact</button>
                    </nav>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && <MenuOverlay onClose={() => setIsOpen(false)} handleProfileClick={handleProfileClick} handleTechnologiesClick={handleTechnologiesClick} handleContactClick={handleContactClick}/>}
            <div ref={profileRef}></div>
        </div>
    );
};