import React, { useState } from "react";
import {
  getFilteredProjectsBasedOnTag,
  getTagsFromAllProjects,
  pluralize,
} from "../common/utils";
import { Card, Layout, SectionHeading, TagLayout } from "../components";

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState("");

  const handleTagClick = (tagName: string) => {
    setSelectedTag((prevSelectedTag) =>
      prevSelectedTag === tagName ? "" : tagName
    );
  };

  const filteredProjects = getFilteredProjectsBasedOnTag(selectedTag);

  const filteredProjectsLength = filteredProjects.length;
  const projectText = pluralize(filteredProjectsLength, "project");
  const headingText = `${filteredProjectsLength} ${projectText} tagged with "${selectedTag}"`;

  return (
    <Layout>
      <div className="flex flex-col justify-between lg:flex-row mb-24">
        <div className="flex flex-col">
          {selectedTag && <SectionHeading heading={headingText} />}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 lg:min-w-[42rem] lg:mr-4">
            {filteredProjects.map((project) => (
              <Card key={project.title} {...project} />
            ))}
          </ul>
        </div>
        <TagLayout
          data={getTagsFromAllProjects()}
          handleTagClick={handleTagClick}
          selectedTag={selectedTag}
        />
      </div>
    </Layout>
  );
};

export default Projects;
