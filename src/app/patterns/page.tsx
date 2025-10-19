import React from "react";

export default function PatternsPage() {
  const PATTERN_CATEGORIES = [
    { id: "all", label: "All Patterns" },
    { id: "gradients", label: "Gradients" },
    { id: "geometric", label: "Geometric" },
    { id: "decorative", label: "Decorative" },
    { id: "effects", label: "Effects" },
    { id: "favourites", label: "Favourites" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 p-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
        Explore New Patterns
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {PATTERN_CATEGORIES.map((category) => (
          <div
            key={category.id}
            className="p-4 bg-white/70 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 rounded-xl text-center shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              {category.label}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
