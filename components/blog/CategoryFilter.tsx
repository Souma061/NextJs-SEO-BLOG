import { Filter } from "lucide-react";

interface CategoryFilterProps {
  categories: string[];
  selected: string | null;
  onSelect: (category: string | null) => void;
}

export default function CategoryFilter({ categories, selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
      <div className="flex items-center gap-2 text-gray-600 min-w-max mr-2">
        <Filter className="w-4 h-4" />
        <span className="text-xs font-semibold uppercase tracking-wider">Filter</span>
      </div>
      <div className="flex gap-2 min-w-max">
        <button
          onClick={() => onSelect(null)}
          aria-pressed={selected === null}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selected === null
            ? "bg-gray-900 text-white shadow-md shadow-gray-200"
            : "bg-white border border-gray-100 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
            }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelect(category)}
            aria-pressed={selected === category}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selected === category
              ? "bg-blue-600 text-white shadow-md shadow-blue-100"
              : "bg-white border border-gray-100 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
