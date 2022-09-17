import React, { useState } from "react";
import {
  getAllBlogPosts,
  getFilteredBlogsBasedOnTag,
  getTagsFromAllBlogs,
  pluralize,
} from "../../common/utils";
import { BlogCard, Layout, SectionHeading, TagLayout } from "../../components";

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
            {filteredBlogs.map((blogPost) => (
              <BlogCard key={blogPost.title} {...blogPost} />
            ))}
          </ul>
        </div>
        <TagLayout
          data={getTagsFromAllBlogs(allBlogPosts)}
          handleTagClick={handleTagClick}
          selectedTag={selectedTag}
        />
      </div>
    </Layout>
  );
};

export default Blogs;
