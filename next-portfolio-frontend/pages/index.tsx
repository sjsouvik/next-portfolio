import { getFeaturedProjects } from "../common/utils";
import { Button, Card, Layout, Timeline } from "../components/index";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <Layout>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt rem nobis
        iusto nulla repudiandae ipsum! Nesciunt rerum ratione voluptatem, velit
        at aliquid nisi distinctio sapiente fugiat? Hic fugiat assumenda
        exercitationem!
      </div>

      <Timeline />

      <div className="flex flex-wrap">
        {featuredProjects.map((project) => (
          <Card key={project.title} {...project} />
        ))}
      </div>

      <Button>Visit Site</Button>
    </Layout>
  );
}
