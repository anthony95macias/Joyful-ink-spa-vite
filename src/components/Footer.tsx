import React from "react";
import SocialLinks from "./SocialLinks"; // Import SocialLinks component

const Footer: React.FC = () => {
  return (
    <footer
      className="footer footer-center text-primary-content py-4"
      style={{
        background:
          "linear-gradient(90deg, hsla(210, 91%, 39%, 1) 0%, hsla(321, 55%, 50%, 1) 100%)",
      }}
    >
      <aside>
        <h1 className="text-2xl font-bold text-white">Joyful Ink</h1>
        <p className="font-bold text-white">
          Inside The Beauty Exchange
          <br />
          311 Oak Ridge Dr Roseville, CA 95661 United States
          <br />
          ‭(916) 903-8022‬
        </p>
        <nav className="mt-1">
          {/* Apply class to override styles in the footer */}
          <div className="footer-social-links">
            <SocialLinks />
          </div>
        </nav>
        <p className="text-white mt-2">
          Copyright © {new Date().getFullYear()} - All rights reserved
        </p>
      </aside>

      {/* Footer specific CSS overrides */}
      <style jsx>{`
        .footer-social-links svg {
          color: white !important; /* Default color white */
          transition: color 0.3s ease;
        }

        .footer-social-links a:hover svg {
          color: black !important; /* Hover color black */
        }
      `}</style>
    </footer>
  );
};

export default Footer;
