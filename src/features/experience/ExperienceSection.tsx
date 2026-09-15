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

function OrganizationMeta({
  organizationId,
  contractType,
}: {
  organizationId: Experience["organizationId"];
  contractType?: string;
}) {
  return (
    <p className="-mt-2 mb-4 text-sm italic text-muted">
      <OrganizationDisplayName id={organizationId} />
      {contractType && `${SEPARATORS.bullet}${contractType}`}
    </p>
  );
}

function EngagementMeta({
  mainClient,
  mainClientLabel,
}: {
  mainClient?: string;
  mainClientLabel: string;
}) {
  if (!mainClient) {
    return null;
  }

  return (
    <UICard.Label className="mb-3 italic text-muted">
      <b>{mainClientLabel}:</b> {mainClient}
    </UICard.Label>
  );
}

function Technologies({ items, label }: { items: string[]; label: string }) {
  return (
    <p className="mt-8 text-xs italic text-muted">
      <b>{label}:</b> {items.join(SEPARATORS.list)}
    </p>
  );
}

type ExperienceItemProps = {
  experience: Experience;
  present: string;
  technologiesLabel: string;
  mainClientLabel: string;
};

function ExperienceItem({
  experience,
  present,
  technologiesLabel,
  mainClientLabel,
}: ExperienceItemProps) {
  return (
    <UICard.Root className="py-8 md:py-10">
      <UISplitColumns
        aside={<Period period={experience.period} present={present} />}
      >
        <div className="max-w-screen-lg md:border-l md:pl-8">
          <UICard.Title>{experience.role}</UICard.Title>
          <OrganizationMeta
            organizationId={experience.organizationId}
            contractType={experience.contractType}
          />
          <EngagementMeta
            mainClient={experience.mainClient}
            mainClientLabel={mainClientLabel}
          />
          <UICard.Paragraphs data={experience.summary} />
          {experience.highlights && (
            <UICard.Highlights items={experience.highlights} />
          )}
          <Technologies
            items={experience.technologies}
            label={technologiesLabel}
          />
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
            />
          </li>
        ))}
      </ul>
    </UISection>
  );
}
