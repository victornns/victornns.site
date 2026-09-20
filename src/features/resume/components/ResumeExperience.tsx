import { OrganizationDisplayName } from "@/components/OrganizationDisplayName";
import { UIBulletList } from "@/components/ui/UIBulletList";
import { UICard } from "@/components/ui/UICard";
import { UIParagraphs } from "@/components/ui/UIParagraphs";
import { getContent } from "@/content";
import type { ContractType, Experience } from "@/content/experiences";
import { ResumeSection } from "@/features/resume/components/ResumeSection";
import type { Locale } from "@/i18n/config";
import { formatPeriod } from "@/lib/format";

type ExperienceEntryProps = {
  experience: Experience;
  present: string;
  technologiesLabel: string;
  mainClientLabel: string;
  contractTypeLabel: string;
  contractTypeLabels: Record<ContractType, string>;
};

function ExperienceEntry({
  experience,
  present,
  technologiesLabel,
  mainClientLabel,
  contractTypeLabel,
  contractTypeLabels,
}: ExperienceEntryProps) {
  const {
    role,
    organizationId,
    mainClient,
    contractType,
    period,
    summary,
    highlights,
    technologies,
  } = experience;

  return (
    <li className="break-inside-avoid-page py-4 first:pt-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <UICard.Title className="mb-0">{role}</UICard.Title>
        <UICard.Label className="whitespace-nowrap">
          {formatPeriod(period, present)} · {period.total}
        </UICard.Label>
      </div>

      <OrganizationDisplayName
        id={organizationId}
        as="p"
        className="text-sm italic text-muted"
      />

      <UIParagraphs data={summary} className="mt-2 gap-2 text-sm" />

      {highlights && (
        <UIBulletList
          items={highlights}
          className="mt-2 gap-1.5 pl-4 text-sm md:pl-4"
        />
      )}

      <div className="mt-2 space-y-0.5">
        {mainClient && (
          <UICard.Meta label={mainClientLabel} items={[mainClient]} />
        )}
        <UICard.Meta
          label={contractTypeLabel}
          items={[contractTypeLabels[contractType]]}
        />
        <UICard.Meta label={technologiesLabel} items={technologies} />
      </div>
    </li>
  );
}

type ResumeExperienceProps = {
  locale: Locale;
};

export function ResumeExperience({ locale }: ResumeExperienceProps) {
  const { experiences, common } = getContent(locale);

  return (
    <ResumeSection
      title={experiences.title}
      description={experiences.description}
    >
      <ol className="divide-y">
        {experiences.items.map((experience) => (
          <ExperienceEntry
            key={experience.id}
            experience={experience}
            present={common.present}
            technologiesLabel={experiences.technologiesLabel}
            mainClientLabel={experiences.mainClientLabel}
            contractTypeLabel={experiences.contractTypeLabel}
            contractTypeLabels={experiences.contractTypeLabels}
          />
        ))}
      </ol>
    </ResumeSection>
  );
}
