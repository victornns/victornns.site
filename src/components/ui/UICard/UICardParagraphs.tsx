type UICardParagraphsProps = {
  data: string[];
};

export function UICardParagraphs({ data }: UICardParagraphsProps) {
  return (
    <div className="flex flex-col gap-2">
      {data.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}
