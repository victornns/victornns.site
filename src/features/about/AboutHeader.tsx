import { LocationPinIcon } from "@/components/icons/LocationPinIcon";
import { UILink } from "@/components/ui/UILink";
import { UISplitColumns } from "@/components/ui/UISplitColumns";
import { PROFILE_NAME, type About } from "@/content/about";
import type { Contact } from "@/content/contacts";
import { tw } from "@/lib/tailwind";

function Headline({ role }: { role: About["role"] }) {
  return (
    <>
      <h1 className="text-3xl uppercase sm:text-6xl">
        <span className="block font-extrabold">{PROFILE_NAME.first}</span>
        <span>{PROFILE_NAME.last}</span>
      </h1>

      <div className="mt-4 flex items-start gap-5 sm:gap-6">
        <span
          aria-hidden="true"
          className="mt-4 h-1 w-12 shrink-0 bg-black sm:w-14"
        />

        <p>
          <span className="block text-lg font-medium leading-none sm:text-2xl">
            {role.title}
          </span>

          <span className="mt-1 block italic leading-none text-muted max-sm:text-xs">
            {role.subtitle}
          </span>
        </p>
      </div>
    </>
  );
}

function Contacts({ items, location }: { items: Contact[]; location: string }) {
  return (
    <div className="flex flex-col gap-6 md:justify-center md:border-l md:pl-8">
      <ul className="flex flex-col gap-4 md:gap-5">
        {items.map((contact) => (
          <li key={contact.id} className="flex flex-col">
            <span className="text-xs text-muted">{contact.label}</span>
            <UILink href={contact.link.href} className="break-words underline">
              {contact.link.display}
            </UILink>
          </li>
        ))}
      </ul>

      <p className="flex items-center gap-1.5 text-xs text-muted">
        <LocationPinIcon />
        {location}
      </p>
    </div>
  );
}

type AboutHeaderProps = {
  role: About["role"];
  contacts: Contact[];
  location: string;
};

export function AboutHeader({ role, contacts, location }: AboutHeaderProps) {
  return (
    <UISplitColumns
      asidePosition="right"
      asideWidth={tw`md:w-60 lg:w-96`}
      aside={<Contacts items={contacts} location={location} />}
      className="gap-12"
    >
      <Headline role={role} />
    </UISplitColumns>
  );
}
