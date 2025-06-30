interface UICompanyProps {
  company: string;
}

export function UICompany({ company }: UICompanyProps) {
  return <p>@ {company}</p>;
}
