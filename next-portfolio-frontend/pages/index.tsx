import { getFeaturedProjects } from "../common/utils";
import { timeLineData } from "../common/data";
import {
  Card,
  Layout,
  Timeline,
  HeroHeader,
  SectionHeading,
} from "../components";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <Layout>
      <HeroHeader />

      <SectionHeading
        heading="Featured Projects"
        description="I enjoy to continue learning to improve my knowledge and to gain a completely new experience. You'll see some of the frontend & backend projects I've accomplished."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-24">
        {featuredProjects.map((project) => (
          <Card key={project.title} {...project} />
        ))}
      </div>

      <SectionHeading
        heading="Work Experience"
        description="Work experience so far."
      />
      <Timeline timeline={timeLineData.experience} />
    </Layout>
  );
}
