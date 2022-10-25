import Link from "next/link";
import { Tags } from "../index";

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
      <a>
        <article className="flex flex-col gap-4 p-4 w-full shadow-md border border-gray-200 rounded-md">
          <p className="flex items-center gap-1">
            <i className="bx bxs-calendar"></i>
            <span>{publishedAt}</span>
            <i className="ml-3 bx bxs-time-five"></i>
            <span>{readingTime}</span>
          </p>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="line__clamp">{excerpt}</p>
          <Tags tags={tags} />
        </article>
      </a>
    </Link>
  );
};

export default BlogCard;
