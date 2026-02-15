interface SectionHeaderProps {
  heading: string;
  description?: string;
}

const SectionHeading = ({ heading, description }: SectionHeaderProps) => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4 dark:text-white">{heading}</h1>
      {description && (
        <p className="text-gray-500 dark:text-gray-400 mb-6">{description}</p>
      )}
    </>
  );
};

export default SectionHeading;
