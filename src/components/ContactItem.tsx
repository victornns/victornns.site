import { Contact } from "@/types/contact";
import { UILink } from "./ui/UILink";

interface ContactItemProps {
  data: Contact;
}

export function ContactItem({ data }: ContactItemProps) {
  return (
    <p>
      <span className="text-sm">{data.name}:</span> <UILink displayName={data.displayName} link={data.url} />
    </p>
  );
}
