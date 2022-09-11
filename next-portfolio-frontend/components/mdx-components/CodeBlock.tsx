import { ReactNode } from "react";

interface CodeBlockProps {
  children: ReactNode;
}

const CodeBlock = ({ children }: CodeBlockProps) => {
  return <div className="my-4 rounded">{children}</div>;
};

export default CodeBlock;
