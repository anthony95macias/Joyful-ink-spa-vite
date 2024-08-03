import React from 'react';

const MainSection: React.FC = () => {
    const handleScrollToContact = () => {
        document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <main className="relative h-screen w-full overflow-hidden">
            {/* Background gradient */}
            <div 
                className="absolute inset-0 w-full h-full" 
                style={{ 
                    backgroundImage: 'linear-gradient(-225deg, #D4FFEC 0%, #57F2CC 48%, #4596FB 100%)' 
                }}
            ></div>

            {/* Main content centered */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-sm uppercase tracking-widest text-yellow-300">We know your story</h2>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-none sm:leading-tight">
                    Ink with Purpose:<br />Empowering Your Journey<br />to Recovery
                </h1>
                <button
                    onClick={handleScrollToContact}
                    className="mt-4 sm:mt-6 md:mt-8 bg-yellow-400 text-black py-2 px-4 rounded-lg shadow-lg transform transition hover:scale-105"
                >
                    BOOK NOW
                </button>
            </div>
        </main>
    );
};

export default MainSection;
