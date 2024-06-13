export default function Categories() {
  const categoryItems = [
    "All",
    "Music",
    "Gamming",
    "Code",
    "Programming",
    "life Style",
    "Sports",
  ];
  return (
    <div className="flex flex-row gap-4">
      {categoryItems.map((category) => {
        return (
          <span
            key={`category-${category}`}
            className="p-[0.5rem_1rem] rounded-[20px] bg-[#282828]"
          >
            {category}
          </span>
        );
      })}
    </div>
  );
}
