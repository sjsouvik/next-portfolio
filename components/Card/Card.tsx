import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import LinkButton from "../Buttons/LinkButton";
import Tags from "../Tags/Tags";

export interface Project {
  imageLink: string | StaticImageData;
  title: string;
  content: string;
  tags: Array<string>;
  sourceLink?: string;
  demoLink?: string;
}

const Card = (props: Project) => {
  const { imageLink, title, content, tags, demoLink, sourceLink } = props;

  return (
    <div className="w-full">
      <div className="flex flex-col h-full shadow-md border border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-md">
        <div className="relative h-48 overflow-hidden">
          <Link href={demoLink} target="_blank">
            <Image
              src={imageLink}
              alt=""
              fill
              style={{ objectFit: "cover" }}
              className="rounded-t-md cursor-pointer scale-125 opacity-80 transition-opacity transition-transform duration-500 hover:opacity-100 hover:scale-110"
            />
          </Link>
        </div>
        <div className="flex flex-col p-4 space-y-3">
          <div className="text-2xl font-bold dark:text-white">{title}</div>
          <div style={{ minHeight: "55px" }}>
            <Tags tags={tags} />
          </div>
          <div
            className="text-gray-500 dark:text-gray-400 line__clamp flex-1"
            style={{
              minHeight: "70px",
            }}
          >
            {content}
          </div>
          <div className="flex space-x-4 flex-1">
            <LinkButton href={demoLink}>Visit Site</LinkButton>
            <LinkButton href={sourceLink}>Source Code</LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
