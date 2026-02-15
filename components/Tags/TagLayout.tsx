interface TagLayoutProps {
  data: Array<[string, number]>;
  handleTagClick: (val: string) => void;
  selectedTag: string;
}

const TagLayout = ({ data, handleTagClick, selectedTag }: TagLayoutProps) => {
  return (
    <div className="sticky top-0 self-start py-4 lg:p-0">
      <h4>Tags</h4>
      <ul className="flex flex-wrap mt-2">
        {data.map(([tagName, tagCount]) => {
          const isSelected = selectedTag === tagName;
          return (
            <li
              key={tagName}
              className={`m-1 text-sm px-3 py-1 border rounded-full cursor-pointer transition-colors
                border-gray-400 dark:border-slate-500 dark:text-gray-300
                hover:bg-blue-600 hover:text-white hover:border-blue-600 dark:hover:bg-indigo-500 dark:hover:border-indigo-500 ${
                  isSelected
                    ? "bg-blue-600 text-white border-blue-600 dark:bg-indigo-500 dark:border-indigo-500"
                    : ""
                }`}
              onClick={() => handleTagClick(tagName)}
            >
              {tagName}, {tagCount}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TagLayout;
