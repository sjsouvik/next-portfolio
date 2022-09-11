import React, { useState } from "react";
import {
  getAllBlogPosts,
  getFilteredBlogsBasedOnTag,
  getTagsFromAllBlogs,
  pluralize,
} from "../../common/utils";
import { BlogCard, Layout, SectionHeading } from "../../components";

export async function getStaticProps() {
  const allBlogPosts = await getAllBlogPosts();
  return { props: { allBlogPosts } };
}

const Blogs = ({ allBlogPosts }) => {
  const [selectedTag, setSelectedTag] = useState("");

  const handleTagClick = (tagName: string) => {
    setSelectedTag((prevSelectedTag) =>
      prevSelectedTag === tagName ? "" : tagName
    );
  };

  const filteredBlogs = getFilteredBlogsBasedOnTag(allBlogPosts, selectedTag);

  const filteredLength = filteredBlogs.length;
  const blogText = pluralize(filteredLength, "Blog");
  const headingText = `${filteredLength} ${blogText} tagged with ${selectedTag}`;

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row mb-24">
        <div className="flex flex-col">
          {selectedTag && <SectionHeading heading={headingText} />}
          <ul className="flex flex-col gap-16 lg:min-w-[42rem] mr-4">
            {allBlogPosts.map((blogPost) => (
              <BlogCard key={blogPost.title} {...blogPost} />
            ))}
          </ul>
        </div>
        <div className="sticky top-0 self-start py-4 w-full lg:p-0">
          <h4>Tags</h4>
          <ul className="flex flex-wrap mt-2">
            {getTagsFromAllBlogs(allBlogPosts).map(([tagName, tagCount]) => {
              const isSelected = selectedTag === tagName;
              return (
                <li
                  key={tagName}
                  className={`m-1 text-sm px-3 py-1 border border-gray-500 rounded-full cursor-pointer hover:bg-blue-600 hover:text-white ${
                    isSelected ? "bg-blue-600 text-white" : ""
                  }`}
                  onClick={() => handleTagClick(tagName)}
                >
                  {tagName}, {tagCount}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;
