import React, {useState} from "react";
import PropTypes from "prop-types";

function AnchorLink(props) {
  const [isSelected, useSelected] = useState(window.location.hash === props.anchor);

  function doAnchor() {
    const id = props.anchor;
    const elem = document.getElementById(id.replace('#', ''));
    const elemPos = elem.getBoundingClientRect().top

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
    useSelected(window.location.hash === props.anchor);
    console.log(window.location)
  }

  return (
    <button className={`block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline text-purple-700 dark:text-white ${isSelected ? `font-bold`: `font-medium hover:text-purple-600`}`}
    onClick={doAnchor}>
      {props.title}
    </button>
  )
}

AnchorLink.propTypes = {
  anchor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.node.isRequired,
}

export default AnchorLink;