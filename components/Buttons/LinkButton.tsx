import Link from "next/link";

const LinkButton = ({
  children,
  className = "",
  href = "",
  target = "_blank",
}) => {
  return (
    <Link href={href}>
      <a
        target={target}
        className={`underline lowercase text-gray-600 decoration-gray-500 hover:text-gray-900 hover:decoration-gray-900 ${className}`}
      >
        {children}
      </a>
    </Link>
  );
};

export default LinkButton;
