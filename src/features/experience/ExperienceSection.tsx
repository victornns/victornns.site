import { OrganizationDisplayName } from "@/components/OrganizationDisplayName";
import { UIBulletList } from "@/components/ui/UIBulletList";
import { UICard } from "@/components/ui/UICard";
import { UIParagraphs } from "@/components/ui/UIParagraphs";
import { UISection } from "@/components/ui/UISection";
import { UISplitColumns } from "@/components/ui/UISplitColumns";
import { getContent } from "@/content";
import type { Experience } from "@/content/experiences";
import type { Locale } from "@/i18n/config";
import { formatPeriod } from "@/lib/format";

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

type ExperienceItemProps = {
  experience: Experience;
  present: string;
  technologiesLabel: string;
  mainClientLabel: string;
  contractTypeLabel: string;
};

function ExperienceItem({
  experience,
  present,
  technologiesLabel,
  mainClientLabel,
  contractTypeLabel,
}: ExperienceItemProps) {
  return (
    <UICard.Root className="py-8 md:py-10">
      <UISplitColumns
        aside={<Period period={experience.period} present={present} />}
      >
        <div className="flex max-w-screen-lg flex-col gap-5 md:border-l md:pl-8">
          <div>
            <UICard.Title className="mb-0 font-bold">{experience.role}</UICard.Title>
            <OrganizationDisplayName
              id={experience.organizationId}
              as="p"
              className="text-sm italic text-muted"
            />
          </div>

          <UIParagraphs data={experience.summary} />
          {experience.highlights && (
            <UIBulletList items={experience.highlights} />
          )}

          <div className="mt-2">
            {experience.mainClient && (
              <UICard.Meta
                label={mainClientLabel}
                items={[experience.mainClient]}
              />
            )}
            <UICard.Meta
              label={contractTypeLabel}
              items={[experience.contractType]}
            />
            <UICard.Meta
              label={technologiesLabel}
              items={experience.technologies}
            />
          </div>
        </div>
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
              mainClientLabel={experiences.mainClientLabel}
              contractTypeLabel={experiences.contractTypeLabel}
            />
          </li>
        ))}
      </ul>
    </UISection>
  );
}
