interface Props {
  date: Date;
}
export default function FormattedDate({date}: Props) {
  return (
    <time dateTime={date.toISOString()} className="font-medium text-base">
      {date.toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}
    </time>
  );
}
