type PageIntroProps = {
  index: string;
  label: string;
  title: string;
  note: string;
};

export function PageIntro({ index, label, title, note }: PageIntroProps) {
  return (
    <section className="page-intro">
      <div className="page-intro-meta">
        <span>{index}</span>
        <span>{label}</span>
      </div>
      <h1>{title}</h1>
      <p>{note}</p>
    </section>
  );
}
