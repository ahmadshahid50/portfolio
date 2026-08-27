type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.28em] text-emerald-300/90">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-[-0.05em] text-zinc-50 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
