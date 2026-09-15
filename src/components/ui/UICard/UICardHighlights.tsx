type UICardHighlightsProps = {
  items: string[];
};

export function UICardHighlights({ items }: UICardHighlightsProps) {
  return (
    <ul className="mt-6 flex list-disc flex-col gap-3 pl-4 text-sm md:pl-10">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
