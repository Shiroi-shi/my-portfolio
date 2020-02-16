import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function checkDarkMode() {
    if (window.matchMedia && window.matchMedia(`(prefers-color-scheme: dark)`).matches) {
        return true;
    }
    return false;
}

function Layout( { location, children }) {
    
    /*if (checkDarkMode()) {
        document.documentElement.classList.add(`mode-dark`);
    } else {
        document.documentElement.classList.remove(`mode-dark`);
    }*/

  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-900 dark:bg-gray-900">
      <Header location={location} />

      <main className="flex flex-col flex-1 max-w-6xl mx-auto px-4 py-8 md:p-8 w-full mt-20">
        {children}
      </main>

      <footer className="bg-purple-700">
        <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm">
          <p className="text-white">
            Created by{` `}
            <a
              className="font-bold no-underline text-white"
              href="https://bryant.io"
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
  children: PropTypes.node.isRequired
};

export default Layout;
