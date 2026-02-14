import Link from "next/link";
import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
}

const Button = ({
  children,
  className = "",
  href = "",
  target = "",
}: ButtonProps) => {
  return (
    <Link href={href}>
      <a
        target={target}
        className={`inline-block text-md m-4 px-8 py-3 uppercase tracking-widest rounded-full border-2 text-gray-500 dark:text-gray-300 border-gray-400 dark:border-gray-600 button__transition ${className}`}
      >
        {children}
      </a>
    </Link>
  );
};

export default Button;
