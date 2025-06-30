interface UIDateProps {
  date: string;
}

export function UIDate({ date }: UIDateProps) {
  return <p className="lowercase text-sm font-light">{date}</p>;
}
