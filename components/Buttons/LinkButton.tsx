import Link from "next/link";

const LinkButton = ({
  children,
  className = "",
  href = "",
  target = "_blank",
}) => {
  return (
    <Link
      href={href}
      target={target}
      className={`underline lowercase text-gray-600 dark:text-gray-400 decoration-gray-500 dark:decoration-gray-500 hover:text-gray-900 dark:hover:text-gray-200 hover:decoration-gray-900 dark:hover:decoration-gray-300 ${className}`}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
