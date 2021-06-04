import { parseISO, format } from "date-fns";

export interface DateProps {
  dateString: string;
  locale: string;
}

export default function Date({
  dateString,
  locale,
}:DateProps) {
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
