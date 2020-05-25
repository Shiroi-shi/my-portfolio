import {Link} from "gatsby";
import React, {useState, useEffect} from "react";

import avatar from '../images/avatar.jpg';
import PropTypes from "prop-types";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setSelected(window.location.hash || "#about")
    doAnchor(window.location.hash || "#about")
  }, [])

  function doAnchor(id) {
    const elem = document.getElementById(id.replace('#', ''));
    const elemPos = elem.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elemPos - 100,
      behavior: "smooth",
    })

    if(window.history.pushState) {
      window.history.pushState(null, null, id);
    }
    else {
      window.location.hash = id;
    }
    setSelected(id);
  }

  return (
    <header className="bg-purple-700 dark:bg-gray-900 shadow-md fixed w-full z-50">
      <div className="flex flex-wrap items-center justify-between container mx-auto px-10 py-4">
        <Link className="flex items-center no-underline text-white" to="/">
          <img
            alt="Aurélien Toussaint face picture"
            className="w-10 h-10 rounded-full mr-4"
            src={avatar}
          />
          <h1 className="font-bold text-xl tracking-tight">
            Aurélien Toussaint
          </h1>
        </Link>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
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
            <button className={`block focus:outline-none md:inline-block mt-4 md:mt-0 md:ml-6 no-underline text-white px-4 py-2 rounded-full ${selected === link.route ? `font-bold bg-gray-900`: `font-medium hover:bg-gray-900`} transition ease-in-out duration-300`}
                    onClick={() => doAnchor(link.route)} key={link.route}>
              {link.title}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

Header.propTypes = {
  location: PropTypes.any.isRequired,
}

export default Header;
