import React from "react";
import Links from "./Links"

function About(props) {

  function bioExists(bio) {
    if (bio == "" || bio == null){
      return null
    } else {
      return <p>{bio}</p>
    }

  }

  return (
    <div id="about">
      <h2>About Me</h2>
      {bioExists(props.bio)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github = "https://github.com/liza" linkedin = "https://www.linkedin.com/in/liza/"/>
    </div>
  );
}

export default About;
