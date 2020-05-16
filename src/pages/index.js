import PropTypes from "prop-types";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Section from "../components/section";
import Card from "../components/card";
import halfBody from "../images/half-body.png";
import TMO from "../images/the_missing_one.png";
import TL from "../images/tomorrow_learning.png";
import Negi from "../images/negi-bot.jpg";
import Proxima from "../images/proxima.png";
import Taiko from "../images/taiko.png";

function setTitle(title) {
  const newTitle = title.replace('#', '');
  return newTitle.charAt(0).toUpperCase() + newTitle.slice(1);
}

function IndexPage({location}) {

  return (
    <Layout location={location}>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title={location.hash.includes('#') ? setTitle(location.hash) : `About me`}
      />

      <Section>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <h1 className="text-purple-700 text-4xl font-bold inline-block" id="about">
              About me - 나에 대해서
            </h1>

            <p className="leading-loose p-3">
              I am a french developer currently studying programming and in my fifth and last year at Epitech. I have
              experience as a fullstack web developer through several internship and personal experience, I also have
              experience in game programming thanks to a few school projects.
            </p>
          </div>
          <div className="w-full md:w-1/2 my-8">
            <img
              alt="Aurélien Toussaint body picture"
              className="md:max-w-sm md:max-h-3/4 mx-auto md:ml-auto md:mr-0"
              src={halfBody}
            />
          </div>
        </div>
      </Section>

      <Section>
        <h1 className="text-purple-700 text-4xl font-bold" id="projects">
          Projects - 프로젝트
        </h1>
        <p className="leading-loose p-3">This section is in English only for the moment but will be updated with Korean
          translations as I progress in Korean language</p>

        <h2 className="text-purple-700 text-3xl font-bold ml-10">
          Websites
        </h2>
        <div className="flex flex-wrap">
          <Card img={TMO} title={"The Missing One"} website="https://www.themissingone.io/"
                desc={"Web platform helping developers and local companies to be in contact with each others."}
                stack={["React", "Express", "MongoDB"]}/>
          <Card img={TL} title={"Tomorrow Learning"} website="https://tomorrowlearning.fr/"
                desc={"Tomorrow Learning is an online training organization which trains companies in Growth Hacking and Human Resources."}
                stack={["React", "Gatsby", "TailwindCSS"]}/>
          <Card title={"My portfolio"} github="https://github.com/Shiroi-shi/my-portfolio"
                website="https://aurelientoussaint.me"
                desc={"This is the website you are currently visiting. I made it to make it easier to present myself and show my work."}
                stack={["React", "Gatsby", "TailwindCSS"]}/>
        </div>

        <h2 className="text-purple-700 text-3xl font-bold ml-10">
          Games
        </h2>
        <div className="flex flex-wrap">
          <Card img={Taiko} title={"TaikoVR"}
                desc={`A VR rhythm game based on the famous game "Taiko no tatsujin" and using maps from the game "Osu!".It was made with a team of 3 as a school project during my stay at 계명대학교.`}
                stack={["Unity3D", "SteamVR"]}/>
          <Card img={Proxima} title={"Proxima Cities"}
                desc={"A city building game for mobile using AR made with a team of 6 people for our end of school project. I mainly worked on the UI and 2D gameplay."}
                stack={["Unity3D"]}/>
        </div>

        <h2 className="text-purple-700 text-3xl font-bold ml-10">
          Others
        </h2>
        <div className="flex flex-wrap">
          <Card img={Negi} title={"Negi bot"} github="https://github.com/Shiroi-shi/Negi-bot"
                desc={"A simple discord bot."}
                stack={["DiscordJS", "NodeJS"]}/>
        </div>
      </Section>

      <Section>
        <h1 className="text-purple-700 text-4xl font-bold" id="contact">
          Contact - 연락처
        </h1>
      </Section>
    </Layout>
  );
}

IndexPage.propTypes = {
  location: PropTypes.node.isRequired,
}

export default IndexPage;
