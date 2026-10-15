import { OrganizationDisplayName } from "@/components/OrganizationDisplayName";
import { UIParagraphs } from "@/components/ui/UIParagraphs";
import { getContent } from "@/content";
import type { ContractType, Experience } from "@/content/experiences";
import { ResumeMeta } from "@/features/resume/ui/ResumeMeta";
import { ResumeSection } from "@/features/resume/ui/ResumeSection";
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
    <li className="py-4 first:pt-0">
      <article>
        <header className="break-inside-avoid-page break-after-avoid-page">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-4">
            <h3 className="text-base font-semibold">{role}</h3>
            <time className="whitespace-nowrap text-xs font-light">
              {formatPeriod(period, present)} · {period.total}
            </time>
          </div>

          <OrganizationDisplayName
            id={organizationId}
            as="p"
            className="text-sm italic text-muted"
          />
        </header>

        <UIParagraphs data={summary} className="mt-2 gap-2 text-sm" />

        {highlights && (
          <ul className="mt-2">
            {highlights.map((highlight, index) => (
              <li key={index} className="break-inside-avoid-page">
                {highlight}
              </li>
            ))}
          </ul>
        )}

        <dl className="mt-2 space-y-0.5 text-xs text-muted">
          {mainClient && (
            <ResumeMeta label={mainClientLabel} items={[mainClient]} />
          )}
          <ResumeMeta
            label={contractTypeLabel}
            items={[contractTypeLabels[contractType]]}
          />
          <ResumeMeta label={technologiesLabel} items={technologies} />
        </dl>
      </article>
    </li>
  );
}

type ResumeExperienceProps = {
  locale: Locale;
};

export function ResumeExperience({ locale }: ResumeExperienceProps) {
  const { experiences, common } = getContent(locale);

  return (
    <ResumeSection title={experiences.title}>
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
