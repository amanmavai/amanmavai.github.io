import {twMerge} from "tailwind-merge";

interface Props {
  date: Date;
  className?: string;
}
export default function FormattedDate({date, className}: Props) {
  return (
    <time dateTime={date.toISOString()} className={twMerge("text-sm sm:text-base leading-6 mb-3", className)}>
      {date.toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}
    </time>
  );
}
