import { UILink } from "@/components/ui/UILink";
import { PROFILE_NAME } from "@/content/about";
import { footerContent } from "@/content/footer";
import { BackToTopButton } from "@/features/portfolio/footer/BackToTopButton";
import { ArrowRightIcon } from "@/features/portfolio/ui/icons/ArrowRightIcon";
import type { Locale } from "@/i18n/config";
import { tw } from "@/lib/tailwind";

const CONTACT_LINK_CLASSNAME = tw`text-5xl font-thin leading-none sm:text-6xl lg:text-7xl xl:text-8xl`;

const CONTACT_ARROW_CLASSNAME = tw`ml-[0.15em] inline-block h-[0.6em] w-[0.6em] -rotate-45 align-top`;

const BOTTOM_BAR_CLASSNAME = tw`text-wide-tracking flex justify-between gap-4 border-t border-black py-6 text-xs text-muted`;

type PortfolioFooterProps = {
  locale: Locale;
};

export function PortfolioFooter({ locale }: PortfolioFooterProps) {
  const { contact, backToTop } = footerContent[locale];

  return (
    <footer className="mx-auto max-w-screen-3xl px-6 lg:px-12">
      <div className="flex flex-wrap items-end justify-between gap-8 pb-12 pt-8 sm:pt-16 lg:pb-16">
        <UILink
          href={contact.href}
          underline={false}
          className={CONTACT_LINK_CLASSNAME}
        >
          {contact.label}
          <ArrowRightIcon strokeWidth={1} className={CONTACT_ARROW_CLASSNAME} />
        </UILink>

        <p className="max-w-xs leading-relaxed text-neutral-700">
          {contact.description}
        </p>
      </div>

      <div className={BOTTOM_BAR_CLASSNAME}>
        <p>
          © {new Date().getFullYear()} {PROFILE_NAME.full}
        </p>
        <BackToTopButton label={backToTop} />
      </div>
    </footer>
  );
}
