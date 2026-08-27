import { getContent } from "@/content";
import { TOKENS } from "@/lib/constants";

import type { Locale } from "@/i18n/config";

type AboutSectionProps = {
  locale: Locale;
  children?: React.ReactNode;
};

function separador() {
  return <span className="bg-slate-100 inline-block w-1 h-1 rounded-full" />;
}

export function AboutSection({ locale }: AboutSectionProps) {
  const { about } = getContent(locale);
  const details = about.description.join(TOKENS.separator.bullet);

  return (
    <>
      <section>
        <h1 className="text-6xl uppercase">
          <span className="font-bold">Victor</span>
          <br />
          Nascimento N. S.
        </h1>
        <p className="flex items-center gap-4 uppercase mt-3">
          <span className="w-16 bg-black h-1 inline-block"></span>
          <span>
            Front-End Engineer
            <span className="text-xs"> & Full-Stack Developer</span>
          </span>
        </p>
        <p className="my-14 border-t border-b py-3 flex gap-10 text-sm items-center text-neutral-500">
          <span>Atibaia - SP, Brasil</span> {separador()}{" "}
          <span>10+ anos em Web</span> {separador()}{" "}
          <span>TypeScript & Node.js</span> {separador()}{" "}
          <span>React & Next.js</span> {separador()}{" "}
          <span>Arquitetura & Performance</span> {separador()}{" "}
          <span>Remoto</span>
        </p>
        <div className="flex">
          <h1 className="mr-40 tracking-widest">SOBRE</h1>
          <div className="max-w-screen-sm">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
