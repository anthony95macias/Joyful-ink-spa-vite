import React, { useState } from 'react';
import SocialLinks from './SocialLinks';

interface NavBarProps {
    refs: {
        mainSectionRef: React.RefObject<HTMLDivElement>;
        contactRef: React.RefObject<HTMLDivElement>;
        galleryRef: React.RefObject<HTMLDivElement>;
        servicesRef: React.RefObject<HTMLDivElement>;
    };
}

const NavBar: React.FC<NavBarProps> = ({ refs }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false); // Close the menu after clicking a link
    };

    return (
        <nav className="navbar bg-transparent px-10 py-3 w-full fixed top-0 z-50 text-black">
            <div className="navbar-start">
                <span className="text-xl normal-case font-bold">Goddess Ink</span>
            </div>
            <div className="navbar-center hidden md:flex space-x-4">
                <span onClick={() => handleMenuClick(refs.mainSectionRef)} className="text-lg cursor-pointer hover:text-white transition">Home</span>
                <span onClick={() => handleMenuClick(refs.servicesRef)} className="text-lg cursor-pointer hover:text-white transition">Services</span>
                <span onClick={() => handleMenuClick(refs.galleryRef)} className="text-lg cursor-pointer hover:text-white transition">Testimonial</span>
                <span onClick={() => handleMenuClick(refs.contactRef)} className="text-lg cursor-pointer hover:text-white transition">Contact</span>
            </div>
            <div className="navbar-end hidden md:flex">
                <SocialLinks />
            </div>
            <div className="navbar-end md:hidden relative">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="btn btn-ghost btn-circle"
                    tabIndex={0}
                >
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
                {isMenuOpen && (
                    <ul className="dropdown-menu menu-compact mt-3 p-2 shadow bg-white rounded-box w-80 text-black absolute top-full right-0 z-50">
                        <li className="text-center"><a onClick={() => handleMenuClick(refs.mainSectionRef)} className="cursor-pointer hover:text-white transition">Home</a></li>
                        <li className="text-center"><a onClick={() => handleMenuClick(refs.servicesRef)} className="cursor-pointer hover:text-white transition">Services</a></li>
                        <li className="text-center"><a onClick={() => handleMenuClick(refs.galleryRef)} className="cursor-pointer hover:text-white transition">Testimonial</a></li>
                        <li className="text-center"><a onClick={() => handleMenuClick(refs.contactRef)} className="cursor-pointer hover:text-white transition">Contact</a></li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
