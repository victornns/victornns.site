import { OrganizationDisplayName } from "@/components/OrganizationDisplayName";
import { UICard } from "@/components/ui/UICard";
import { UISection } from "@/components/ui/UISection";
import { UISplitColumns } from "@/components/ui/UISplitColumns";
import { getContent } from "@/content";
import type { Experience } from "@/content/experiences";
import type { Locale } from "@/i18n/config";
import { formatPeriod, SEPARATORS } from "@/lib/format";

type ExperienceSectionProps = {
  locale: Locale;
};

function Period({
  period,
  present,
}: {
  period: Experience["period"];
  present: string;
}) {
  return (
    <>
      <UICard.Label>{formatPeriod(period, present)}</UICard.Label>
      <UICard.Label className="mt-1 italic text-muted">
        {period.total} _
      </UICard.Label>
    </>
  );
}

function Technologies({ items, label }: { items: string[]; label: string }) {
  return (
    <p className="mt-6 text-xs italic">
      <b>{label}:</b> {items.join(SEPARATORS.list)}
    </p>
  );
}

type ExperienceItemProps = {
  experience: Experience;
  present: string;
  technologiesLabel: string;
};

function ExperienceItem({
  experience,
  present,
  technologiesLabel,
}: ExperienceItemProps) {
  return (
    <UICard.Root>
      <UISplitColumns
        aside={<Period period={experience.period} present={present} />}
      >
        <UICard.Title>
          {experience.role} @{" "}
          <OrganizationDisplayName
            id={experience.organizationId}
            className="italic"
          />
        </UICard.Title>
        <UICard.Paragraphs data={experience.summary} />
        <Technologies
          items={experience.technologies}
          label={technologiesLabel}
        />
      </UISplitColumns>
    </UICard.Root>
  );
}

export function ExperienceSection({ locale }: ExperienceSectionProps) {
  const { experiences, common } = getContent(locale);

  return (
    <UISection
      id="experience"
      title={experiences.title}
      description={experiences.description}
    >
      <ul>
        {experiences.items.map((experience) => (
          <li key={experience.id}>
            <ExperienceItem
              experience={experience}
              present={common.present}
              technologiesLabel={experiences.technologiesLabel}
            />
          </li>
        ))}
      </ul>
    </UISection>
  );
}
