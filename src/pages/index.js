import PropTypes from "prop-types";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Section from "../components/section";
import Card from "../components/card";
import halfBody from "../images/half-body_contour.png";
import TMO from "../images/the_missing_one.png";
import TL from "../images/tomorrow_learning.png";
import Negi from "../images/negi-bot.jpg";
import Proxima from "../images/proxima.png";
import Taiko from "../images/taiko.png";

function IndexPage({location}) {

  return (
    <Layout location={location}>
      <SEO
        keywords={[`Aurélien`, `Toussaint`, `Aurélien Toussaint`, `Web`, `Developer`, `web developer`, `front-end`,
          `frontend`, `front end`, `back-end`, `backend`, `back end`, `full-stack`, `fullstack`, `full stack`, `french`,
          `개발자`, `웹`, `웹 개발자`, `웹개발자`, `프랑스`]}
        title={"Portfolio"}
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
              experience in game programming thanks to a few school projects. I lived in Korea for one year to study game programming at Keimyung University
              thanks to a partnership with my school, here I learned basics of Korean language and I took Korean history and culture classes.
              I am always curious and interested in learning new things.
            </p>

            <div className="text-right mt-4">
              <button
                className="bg-purple-700 rounded-full py-2 px-4 font-bold hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-105">
                View resume 📋
              </button>
            </div>

            <p className="leading-loose p-3 mt-12">
              저는 프랑스 개발자는 현재 프로그래밍을 공부하고있으며 Epitech에서 다니는 건 올해가 마지막이에요.
              저는 몇 인턴십하고 내 경험이 덕분에 웹 개발자에 경험이 있어요. 저는 또한 학교 프로젝트 덕분에 게임 프로그래밍 경험이 있어요.

            </p>

            <div className="text-right mt-4">
              <button
                className="bg-purple-700 rounded-full py-2 px-4 font-bold hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-105">
                이력서 보다 📋
              </button>
            </div>
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
  location: PropTypes.any.isRequired,
}

export default IndexPage;
