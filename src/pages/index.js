import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import fullBody from "../images/full-body.png";
import halfBody from "../images/half-body.png";

function IndexPage({location}) {
    return (
        <Layout location={location}>
            <SEO
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
                title="Home"
            />

            <section>
                <div className="flex">
                    <div className="flex-1">
                        <h1 className="text-purple-700 text-4xl font-bold inline-block">
                            <a href={`#about`}>About me - 나에 대해서</a>
                        </h1>

                        <p className="leading-loose p-3">
                            Blablabla it's me
                        </p>
                    </div>
                    <div className="w-1/2 my-8 hidden sm:inline md:flex-shrink-0">
                        <img
                            alt="Aurélien Toussaint body picture"
                            className="max-w-sm max-h-3/4 m-auto"
                            src={halfBody}
                        />
                    </div>
                </div>
            </section>

            <section>
                <h1 className="text-purple-700 text-4xl font-bold inline-block">
                    <a href={`#projects`}>Projects - 프로젝트</a>
                </h1>
                <p className="leading-loose p-3">This section is in English only for the moment but will be updated with Korean translations as I progress in Korean language</p>
            </section>

            <section>
                <h1 className="text-purple-700 text-4xl font-bold inline-block">
                    <a href={`#projects`}>Contact - 연락처</a>
                </h1>
            </section>
        </Layout>
    );
}

export default IndexPage;
