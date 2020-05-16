import PropTypes from "prop-types";
import React from "react";
import {FaGlobe, FaGithub} from "react-icons/fa";

import defaultImg from "../images/default.png";

function Card(props) {
  return (
    <div
      className="w-full md:w-20rem rounded-md overflow-hidden shadow-md hover:shadow-lg my-8 mx-0 md:mx-8 transition duration-300 ease-in-out transform hover:scale-105">
      <img className="w-full" src={props.img} alt={`${props.title} logo`}/>
      <div className="px-6 py-4">
        <div className="font-bold text-center text-xl">{props.title}</div>
        <div className="flex justify-center mt-2 mb-4 text-2xl">
          {props.github ? <a href={props.github} rel="noopener noreferrer" target="_blank"
                             className="mx-2 hover:text-purple-700"><FaGithub/></a> : null}
          {props.website ? <a href={props.website} rel="noopener noreferrer" target="_blank"
                              className="mx-2 hover:text-purple-700"><FaGlobe/></a> : null}
        </div>
        <p className="text-gray-700 text-base">
          {props.desc}
        </p>
      </div>
      <div className="px-6 py-4">
        {props.stack.map(tech => (
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1"
                key={tech}>{tech}</span>
        ))}
      </div>
    </div>
  )
}

Card.defaultProps = {
  img: defaultImg,
  stack: [],
}

Card.propTypes = {
  img: PropTypes.string,
  title: PropTypes.node.isRequired,
  github: PropTypes.string,
  website: PropTypes.string,
  desc: PropTypes.node.isRequired,
  stack: PropTypes.array,
}

export default Card;