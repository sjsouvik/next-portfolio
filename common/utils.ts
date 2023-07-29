import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

import { Project, BlogPost, TagsProps } from "../components";
import { cardsData } from "./data";

export const getFeaturedProjects = () => {
  const featured = cardsData.projects.featured;
  return Object.values(featured);
};

export const getAllProjects = () => {
  const all = cardsData.projects.all;
  return Object.values(all);
};

export const getFilteredEntitiesBasedOnTag = <T extends Project | BlogPost>(
  data: Array<T>,
  searchTag: string
) => {
  if (!searchTag) {
    return data;
  }

  return data.filter((project) => {
    return project.tags.some((tag: string) => tag === searchTag);
  });
};

export const getFilteredProjectsBasedOnTag = (searchTag: string) => {
  const allProjects = getAllProjects();

  return getFilteredEntitiesBasedOnTag(allProjects, searchTag);
};

const tagsReducer = (tagsObj: Record<string, number>, { tags }: TagsProps) => {
  tags?.forEach((tag: string) => {
    if (tagsObj[tag]) {
      tagsObj[tag] += 1;
    } else {
      tagsObj[tag] = 1;
    }
  });

  return tagsObj;
};

export const getTagsFromAllProjects = () => {
  const allProjects = cardsData.projects.all;

  const result = Object.values(allProjects).reduce(tagsReducer, {});

  return Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));
};

export const getTagsFromAllBlogs = (allBlogPosts: Array<BlogPost>) => {
  const result = allBlogPosts.reduce(tagsReducer, {});

  return Object.entries(result);
};

export const getFilteredBlogsBasedOnTag = (
  allBlogs: Array<BlogPost>,
  searchTag: string
) => getFilteredEntitiesBasedOnTag(allBlogs, searchTag);

export const pluralize = (count: number, query: string) => {
  return count > 1 ? `${query}s are` : `${query} is`;
};

const blogPostsDirectory = path.join(process.cwd(), "articles");

export const getAllBlogPostIds = () => {
  const blogPosts = fs.readdirSync(blogPostsDirectory);

  return blogPosts.map((blogPost) => {
    return { params: { id: blogPost.replace(/\.mdx$/, "") } };
  });
};

export const getAllBlogPosts = () => {
  const blogPosts = fs.readdirSync(blogPostsDirectory);

  const allBlogPosts = blogPosts.reduce((articles, blogPost) => {
    const fullPath = path.join(blogPostsDirectory, blogPost);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return [
      ...articles,
      {
        ...data,
        id: blogPost.replace(".mdx", ""),
        readingTime: readingTime(fileContents).text,
      },
    ];
  }, []);

  return allBlogPosts.sort((a, b) => {
    if (a.publishedAt < b.publishedAt) return 1;
    if (a.publishedAt > b.publishedAt) return -1;

    return 0;
  });
};

export const getBlogPostData = (id: string) => {
  const fullPath = path.join(blogPostsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const { content, data } = matter(fileContents);

  return {
    content,
    frontmatter: {
      id,
      title: data.title,
      publishedAt: data.publishedAt,
      readingTime: readingTime(fileContents).text,
      ...data,
    },
  };
};
