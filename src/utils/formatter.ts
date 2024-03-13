import moment from "moment";

export function parseAndFormatDate(
  dateString: string,
  options?: {
    fromPattern?: string;
    toPattern?: string;
    default?: string;
  }
) {
  try {
    return moment(dateString, options?.fromPattern || "YYYY-MM-DD").format(
      options?.toPattern || "DD/MM/YYYY"
    );
  } catch (error) {
    return options?.default !== undefined ? options.default : "--";
  }
}
