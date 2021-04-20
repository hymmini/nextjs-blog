import { parseISO, format } from "date-fns";

export default function Date({
  dateString,
  locale,
}: {
  dateString: string;
  locale: string;
}) {
  let formatString = "LLLL d, yyyy";
  switch (locale) {
    case "cn":
      formatString = "yyyy-MM-dd";
      break;

    default:
      break;
  }
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, formatString)}</time>;
}
