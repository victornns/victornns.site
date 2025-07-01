interface UIDateProps {
  date: string;
}

export function UIDate({ date }: UIDateProps) {
  return <p className="lowercase font-light text-xs">{date}</p>;
}
