import { joinClassNames } from "@/lib/tailwind";

type UICardBulletListProps = {
  items: string[];
  className?: string;
};

export function UICardBulletList({ items, className }: UICardBulletListProps) {
  return (
    <ul
      className={joinClassNames(
        "flex list-outside list-disc flex-col gap-3 pl-5 text-sm md:pl-10",
        className,
      )}
    >
      {items.map((item, index) => (
        <li key={index} className="pl-2">
          {item}
        </li>
      ))}
    </ul>
  );
}
