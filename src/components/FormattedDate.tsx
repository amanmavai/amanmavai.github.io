interface Props {
  date: Date;
}
export default function FormattedDate({date}: Props) {
  return (
    <time dateTime={date.toISOString()} className="text-sm sm:text-base leading-6 text-gray-500 mb-3">
      {date.toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}
    </time>
  );
}
