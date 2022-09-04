import React, { useState } from "react";
import {
  getFilteredProjectsBasedOnTag,
  getTagsFromAllProjects,
  pluralize,
} from "../common/utils";
import { Card, Layout, SectionHeading } from "../components";

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
        <div className="sticky top-0 self-start py-4 lg:p-0">
          <h4>Tags</h4>
          <ul className="flex flex-wrap mt-2">
            {getTagsFromAllProjects().map(([tagName, tagCount]) => (
              <li
                key={tagName}
                className={`m-1 text-sm px-3 py-1 border border-gray-500 rounded-full cursor-pointer hover:bg-blue-600 hover:text-white ${
                  selectedTag === tagName ? "bg-blue-600 text-white" : ""
                }`}
                onClick={() => handleTagClick(tagName)}
              >
                {tagName}, {tagCount}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
