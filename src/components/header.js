import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import avatar from '../images/avatar.jpg'

function Header({ location }) {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  // TODO: Add switch light/dark theme button

  return (
    <header className="bg-white dark:bg-gray-900 shadow fixed w-full">
      <div className="flex flex-wrap items-center justify-between max-w-6xl mx-auto p-4">
        <Link className="flex items-center no-underline text-purple-700 dark:text-white" to="/">
          <img
              alt="Aurélien Toussaint face picture"
              className="w-10 h-10 rounded-full mr-4"
              src={avatar}
          />
          <span className="font-bold text-xl tracking-tight">
            {site.siteMetadata.title}
          </span>
        </Link>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-gray-800 dark:text-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `#about`,
              title: `About me`
            },
            {
              route: `#projects`,
              title: `Projects`
            },
            {
              route: `#contact`,
              title: `Contact`
            }
          ].map(link => (
            <a
              className={`block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline text-purple-700 dark:text-white ${location.hash === link.route ? `font-bold`: `font-medium hover:text-purple-600`}`}
              href={link.route}
              key={link.title}
            >
              {link.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
