import PropTypes from "prop-types";
import React from "react";

function Section(props) {
  return (
    <section className="py-2 md:py-5 px-10 container mx-auto">
        {props.children}
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired
};

export default Section;