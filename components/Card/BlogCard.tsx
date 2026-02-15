import Link from "next/link";
import { Tags } from "../index";
import dayjs from "dayjs";

export interface BlogPost {
  title: string;
  tags: Array<string>;
  readingTime: string;
  publishedAt: string;
  content?: string;
  excerpt?: string;
  id: string;
}

const BlogCard = ({
  title,
  tags,
  excerpt,
  publishedAt,
  readingTime,
  id,
}: BlogPost) => {
  return (
    <Link href={`/blogs/${id}`}>
      <article className="flex flex-col gap-4 p-4 w-full shadow-md border border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-md">
        <p className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
          <i className="bx bxs-calendar"></i>
          <span>{dayjs(publishedAt).format("DD MMM, YYYY")}</span>
          <i className="ml-3 bx bxs-time-five"></i>
          <span>{readingTime}</span>
        </p>
        <h1 className="text-2xl font-bold dark:text-white">{title}</h1>
        <p className="line__clamp dark:text-gray-300">{excerpt}</p>
        <Tags tags={tags} />
      </article>
    </Link>
  );
};

export default BlogCard;
