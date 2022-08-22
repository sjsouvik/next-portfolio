import Image from "next/image";
import { skillsData, timeLineData } from "../common/data";
import { Skills, Layout, SectionHeading, Timeline } from "../components";

const About = () => {
  return (
    <Layout>
      <div className="flex flex-col-reverse flex-1 items-center md:flex-row">
        <div className="w-full p-4 md:w-full md:p-0">
          <Image
            src="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt=""
            width="100%"
            height="75px"
            layout="responsive"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <header className="md:ml-8 flex flex-col p-4">
          <h1 className="text-3xl font-bold pb-4">Hello, I am Souvik</h1>
          <p>
            Currently, working as a frontend developer and have been working
            with ReactJS, JavaScript. I would love to explore backend
            stuff(Java, Spring boot, etc.) as well after having a decent
            expertise in frontend technologies. Also, like to share my learnings
            by writing articles, you can check them out in blogs section of my
            portfolio.
          </p>
        </header>
      </div>

      <section className="flex flex-col mt-8 mb-24">
        <SectionHeading
          heading="Skills"
          description="I am familiar with different technologies in the field of Web Development."
        />
        <Skills skillsData={skillsData} />
      </section>

      <section className="mb-24">
        <SectionHeading
          heading="Education"
          description="B.Tech is my highest qualification."
        />
        <Timeline timeline={timeLineData.education} />
      </section>
    </Layout>
  );
};

export default About;
