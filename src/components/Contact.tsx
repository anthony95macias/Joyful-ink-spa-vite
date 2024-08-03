import React from "react";
import { PopupButton } from "react-calendly";

const Contact: React.FC = () => {
  return (
    <section 
      id="contact-section" 
      className="flex flex-col items-center justify-center h-screen text-center"
      style={{
        background: 'linear-gradient(90deg, hsla(139, 72%, 83%, 1) 0%, hsla(229, 89%, 62%, 1) 100%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <div className="flex flex-col items-center">
        <h2 className="text-sm uppercase tracking-widest text-yellow-300">Get in Touch</h2>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
          Connect With Us:<br />Book Your Appointment<br />Today
        </h1>
        <PopupButton
          url="https://calendly.com/goddessink-myyahoo"
          rootElement={document.getElementById("root")!}
          text="Click here to schedule!"
          className="mt-4 sm:mt-6 md:mt-8 bg-yellow-400 text-black py-2 px-4 rounded-lg shadow-lg transform transition hover:scale-105"
        />
      </div>
    </section>
  );
};

export default Contact;