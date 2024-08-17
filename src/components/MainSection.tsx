import React from "react";

const MainSection: React.FC = () => {
  const handleScrollToContact = () => {
    document
      .getElementById("contact-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative h-screen w-full overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage:
            "linear-gradient(90deg, hsla(210, 91%, 39%, 1) 0%, hsla(321, 55%, 50%, 1) 100%)",
        }}
      ></div>

      {/* Main content centered */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-sm uppercase tracking-widest text-yellow-300">
          Elevate Your Confidence
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-none sm:leading-tight">
          Get the Perfect Hairline
          <br />
          with SMP Treatment
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
