import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout( { location, children }) {

  return (
    <div className="flex flex-col font-sans min-h-screen bg-gray-900 text-white">
      <Header location={location} />

      <main className="flex flex-col flex-1 w-full pt-20 pb-10">
        {children}
      </main>

      <footer className="bg-purple-700">
        <nav className="flex justify-between container mx-auto px-10 py-4 md:p-8 text-sm">
          <p className="text-white">
            Created by{` `}
            <a
              className="font-bold no-underline text-white"
              href="https://aurelientoussaint.me"
            >
              Aurélien Toussaint
            </a>
          </p>

          <p>
              <a
                  className="font-bold no-underline text-white mr-2"
                  href="https://github.com/taylorbryant/gatsby-starter-tailwind"
              >
                  LinkedIn
              </a>
            <a
              className="font-bold no-underline text-white"
              href="https://github.com/taylorbryant/gatsby-starter-tailwind"
            >
              GitHub
            </a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  location: PropTypes.any.isRequired,
  children: PropTypes.node.isRequired
};

export default Layout;
