import PropTypes from "prop-types";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Section from "../components/section";
import Card from "../components/card";
import halfBody from "../images/half-body_contour.png";
import TMO from "../images/the_missing_one.png";
import TL from "../images/tomorrow_learning.png";
import Portfolio from "../images/preview_portfolio.png"
import Negi from "../images/negi-bot.jpg";
import Proxima from "../images/proxima.png";
import Taiko from "../images/taiko.png";
import Resume from "../images/resume_aurelien_toussaint.pdf";

function IndexPage({location}) {

  return (
    <Layout location={location}>
      <SEO
        keywords={[`Aurélien`, `Toussaint`, `Aurélien Toussaint`, `aurelien`, `Web`, `Developer`, `web developer`, `front-end`,
          `frontend`, `front end`, `back-end`, `backend`, `back end`, `full-stack`, `fullstack`, `full stack`, `french`,
          `개발자`, `웹`, `웹 개발자`, `웹개발자`, `프랑스`]}
        title={"Portfolio"}
      />

      <Section>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <h2 className="text-purple-700 text-4xl font-bold inline-block" id="about">
              About me
            </h2>

            <p className="leading-loose p-3">
              I am a french developer currently studying programming and in my fifth and last year at Epitech. I have
              experience as a fullstack web developer through several internship and personal experience, I also have
              experience in game programming thanks to a few school projects. I lived in Korea for one year to study
              game programming at Keimyung University thanks to a partnership with my school, here I learned basics
              of Korean language and I took Korean history and culture classes.
              I am always curious and interested in learning new things.
            </p>

            <div className="text-center md:text-right mt-2">
              <a href={Resume} target="_blank" rel="noreferrer">
                <button
                  className="bg-purple-700 rounded-full py-2 px-4 font-bold hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-105 m-2">
                  View resume 📋
                </button>
              </a>
              <a href="https://www.linkedin.com/in/aurelien-toussaint/" target="_blank" rel="noreferrer">
                <button
                  className="bg-purple-700 rounded-full py-2 px-4 font-bold hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-105 m-2">
                  LinkedIn profile 💼
                </button>
              </a>
            </div>

            <p className="leading-loose p-3 mt-12">
              안녕하세요. 저는 프랑스의 개발자입니다! 현재 프로그래밍을 공부하고 있으며 Epitech에서의 마지막 학기를 다니고 있습니다. 저는 인턴십과 여러 경험을 통해 웹 개발에 대한 전반적인 지식을
              갖추고 있습니다. 또한 학교 프로젝트 덕분에 게임 프로그래밍 경험도 풍부합니다. 저는 대구 계명대학교에서 1년 동안 게임 프로그래밍을 수학했습니다. 한국에서 대학교 생활을 하며 프로그래밍
              지식뿐만 아니라 한국어, 한국사 및 한국 문화에 대한 지식까지 갖추었어요. 저는 항상 호기심이 충만하며 새로운 것들을 배우는 데에 관심이 많습니다.
            </p>

            <div className="text-center md:text-right mt-2">
              <a href={Resume} target="_blank" rel="noreferrer">
                <button
                  className="bg-purple-700 rounded-full py-2 px-4 font-bold hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-105 m-2">
                  이력서 보기 📋
                </button>
              </a>
              <a href="https://www.linkedin.com/in/aurelien-toussaint/" target="_blank" rel="noreferrer">
                <button
                  className="bg-purple-700 rounded-full py-2 px-4 font-bold hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-105 m-2">
                  LinkedIn 프로필 💼
                </button>
              </a>
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
        <h2 className="text-purple-700 text-4xl font-bold" id="projects">
          Projects
        </h2>
        <p className="leading-loose p-3">This is a list of the major projects I worked on by myself or with a team</p>

        <h3 className="text-purple-700 text-3xl font-bold ml-10">
          Websites
        </h3>
        <div className="flex flex-wrap">
          <Card img={TMO} title={"The Missing One"} website="https://www.themissingone.io/"
                desc={"Web platform helping developers and local companies to be in contact with each others."}
                stack={["React", "Express", "MongoDB"]}/>
          <Card img={TL} title={"Tomorrow Learning"} website="https://tomorrowlearning.fr/"
                desc={"Tomorrow Learning is an online training organization which trains companies in Growth Hacking and Human Resources. I made the first version of the website, it is now running on wordpress."}
                stack={["React", "Gatsby", "TailwindCSS"]}/>
          <Card img={Portfolio} title={"My portfolio"} github="https://github.com/Shiroi-shi/my-portfolio"
                website="https://aurelientoussaint.me"
                desc={"This is the website you are currently visiting. I made it to make it easier to present myself and show my work."}
                stack={["React", "Gatsby", "TailwindCSS"]}/>
        </div>

        <h3 className="text-purple-700 text-3xl font-bold ml-10">
          Games
        </h3>
        <div className="flex flex-wrap">
          <Card img={Taiko} title={"TaikoVR"}
                desc={`A VR rhythm game based on the famous game "Taiko no tatsujin" and using maps from the game "Osu!".It was made with a team of 3 as a school project during my stay at 계명대학교.`}
                stack={["Unity3D", "SteamVR"]}/>
          <Card img={Proxima} title={"Proxima Cities"}
                desc={"A city building game for mobile using AR made with a team of 6 people for our end of school project. I mainly worked on the UI and 2D gameplay."}
                stack={["Unity3D"]}/>
        </div>

        <h3 className="text-purple-700 text-3xl font-bold ml-10">
          Others
        </h3>
        <div className="flex flex-wrap">
          <Card img={Negi} title={"Negi bot"} github="https://github.com/Shiroi-shi/Negi-bot"
                desc={"A simple discord bot."}
                stack={["DiscordJS", "NodeJS"]}/>
        </div>
      </Section>

      <Section>
        <h2 className="text-purple-700 text-4xl font-bold" id="contact">
          Contact
        </h2>
        <p className="leading-loose p-3">You can contact me by sending me an email at
          <strong className="font-bold"> neginoyami@gmail.com</strong> or by messaging me on my LinkedIn account</p>
        <a href="mailto:neginoyami@gmail.com">
          <button
            className="bg-purple-700 rounded-full py-2 px-4 font-bold hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-105 m-2">
            Send email 📧
          </button>
        </a>
        <a href="https://www.linkedin.com/in/aurelien-toussaint/" target="_blank" rel="noreferrer">
          <button
            className="bg-purple-700 rounded-full py-2 px-4 font-bold hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-105 m-2">
            LinkedIn profile 💼
          </button>
        </a>
      </Section>
    </Layout>
  );
}

IndexPage.propTypes = {
  location: PropTypes.any.isRequired,
}

export default IndexPage;
