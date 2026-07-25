import { getContent } from "@/content";

import type { Locale } from "@/i18n/config";

import { UISection } from "@/components/ui/UISection";

type TechStackSectionProps = {
  locale: Locale;
};

export function TechStackSection({ locale }: TechStackSectionProps) {
  const { techStack } = getContent(locale);

  return (
    <UISection
      id="stack"
      title={techStack.title}
      description={techStack.description}
    >
      <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 border-t pt-10">
        {techStack.categories.map((category) => (
          <div key={category.id} className="space-y-4 sm:border-r last:border-r-0 pr-4">
            <h3 className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-neutral-500">
              <span aria-hidden="true" className="font-mono normal-case text-neutral-400">
                {"<>"}
              </span>
              {category.title}
            </h3>

            <ul className="space-y-3 text-sm">
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </UISection>
  );
}
