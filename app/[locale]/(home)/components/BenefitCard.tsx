export function BenefitCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-5">
      <h3 className="mb-2 text-xl/tight font-medium xl:text-2xl">{title}</h3>
      <div className="text-gray-500">{description}</div>
    </div>
  );
}
