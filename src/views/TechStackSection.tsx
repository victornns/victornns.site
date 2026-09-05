import { getContent } from "@/content";

import type { Locale } from "@/i18n/config";
import type { TechStackCategory } from "@/content/techStack";

import { UISection } from "@/components/ui/UISection";

type TechStackSectionProps = {
  locale: Locale;
};

type CategoryBlockProps = {
  category: TechStackCategory;
};

function CategoryBlock({ category }: CategoryBlockProps) {
  const { title, items } = category;

  return (
    <li className="py-6 last:pb-0">
      <h3 className="text-wide-tracking mb-1 font-bold">{title}</h3>
      <p className="text-sm text-muted">{items.join(", ")}</p>
    </li>
  );
}

type TechStackColumnProps = {
  categories: TechStackCategory[];
  isFirstColumn: boolean;
};

function TechStackColumn({ categories, isFirstColumn }: TechStackColumnProps) {
  return (
    <ul
      className={isFirstColumn ? "divide-y" : "divide-y border-t sm:border-t-0"}
    >
      {categories.map((category) => (
        <CategoryBlock key={category.id} category={category} />
      ))}
    </ul>
  );
}

export function TechStackSection({ locale }: TechStackSectionProps) {
  const { techStack } = getContent(locale);
  const { title, description, columns } = techStack;

  return (
    <UISection id="stack" title={title} description={description}>
      <div className="grid grid-cols-1 gap-x-12 gap-y-6 border-t pt-10 sm:grid-cols-2 sm:gap-y-0">
        {columns.map((categories, columnIndex) => (
          <TechStackColumn
            key={columnIndex}
            categories={categories}
            isFirstColumn={columnIndex === 0}
          />
        ))}
      </div>
    </UISection>
  );
}
