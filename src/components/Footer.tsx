import React from "react";

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
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              className="text-white hover:text-black transition-colors duration-300"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/joyfulinklm"
              className="text-white hover:text-black transition-colors duration-300"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <path d="M17.5 6.5h.01" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              className="text-white hover:text-black transition-colors duration-300"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.665L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z"
                />
              </svg>
            </a>
          </div>
        </nav>
        <p className="text-white mt-2">
          Copyright © {new Date().getFullYear()} - All rights reserved
        </p>
      </aside>
    </footer>
  );
};

export default Footer;