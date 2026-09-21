import { OrganizationDisplayName } from "@/components/OrganizationDisplayName";
import { UIParagraphs } from "@/components/ui/UIParagraphs";
import { getContent } from "@/content";
import type { ContractType, Experience } from "@/content/experiences";
import { ResumeSection } from "@/features/resume/ui/ResumeSection";
import type { Locale } from "@/i18n/config";
import { formatPeriod, SEPARATORS } from "@/lib/format";

type ResumeMetaProps = {
  label: string;
  items: string[];
};

function ResumeMeta({ label, items }: ResumeMetaProps) {
  return (
    <p className="text-xs text-muted">
      <b>{label}:</b> {items.join(SEPARATORS.list)}
    </p>
  );
}

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
    <li className="py-4 first:pt-0">
      <div className="break-inside-avoid-page break-after-avoid-page">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-4">
          <h3 className="text-base font-semibold">{role}</h3>
          <p className="whitespace-nowrap text-xs font-light">
            {formatPeriod(period, present)} · {period.total}
          </p>
        </div>

        <OrganizationDisplayName
          id={organizationId}
          as="p"
          className="text-sm italic text-muted"
        />
      </div>

      <UIParagraphs data={summary} className="mt-2 gap-2 text-sm" />

      {highlights && (
        <ul>
          {highlights.map((highlight, index) => (
            <li key={index} className="break-inside-avoid-page">
              {highlight}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-2 space-y-0.5">
        {mainClient && (
          <ResumeMeta label={mainClientLabel} items={[mainClient]} />
        )}
        <ResumeMeta
          label={contractTypeLabel}
          items={[contractTypeLabels[contractType]]}
        />
        <ResumeMeta label={technologiesLabel} items={technologies} />
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
