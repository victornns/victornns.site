import { UIParagraphs } from "@/components/ui/UIParagraphs";
import { getContent } from "@/content";
import type { Experience, ExperiencesContent } from "@/content/experiences";
import { ResumeEntryHeader } from "@/features/resume/ui/ResumeEntryHeader";
import { ResumeMeta } from "@/features/resume/ui/ResumeMeta";
import { ResumeSection } from "@/features/resume/ui/ResumeSection";
import type { Locale } from "@/i18n/config";
import { formatPeriod } from "@/lib/format";

type ExperienceLabels = Pick<
  ExperiencesContent,
  | "technologiesLabel"
  | "mainClientLabel"
  | "contractTypeLabel"
  | "contractTypeLabels"
>;

type ExperienceEntryProps = {
  experience: Experience;
  present: string;
  labels: ExperienceLabels;
};

function ExperienceEntry({
  experience,
  present,
  labels,
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
    <li className="py-4 first:pt-0 last:pb-0">
      <article>
        <ResumeEntryHeader
          title={role}
          period={
            <>
              {formatPeriod(period, present)} · {period.total}
            </>
          }
          organizationId={organizationId}
        />

        <UIParagraphs data={summary} className="mt-2 gap-2" />

        {highlights && (
          <ul className="mt-2 list-disc space-y-1 pl-6">
            {highlights.map((highlight, index) => (
              <li key={index} className="break-inside-avoid-page">
                {highlight}
              </li>
            ))}
          </ul>
        )}

        <dl className="mt-2 space-y-0.5 text-xs text-muted">
          {mainClient && (
            <ResumeMeta label={labels.mainClientLabel} items={[mainClient]} />
          )}
          <ResumeMeta
            label={labels.contractTypeLabel}
            items={[labels.contractTypeLabels[contractType]]}
          />
          <ResumeMeta label={labels.technologiesLabel} items={technologies} />
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
            labels={experiences}
          />
        ))}
      </ol>
    </ResumeSection>
  );
}
