export function getFormattedDate(date: Date): string {
  const month: string = (date.getMonth() + 1).toString().padStart(2, "0");
  const day: string = date.getDate().toString().padStart(2, "0");

  return `${date.getFullYear()}-${month}-${day}`;
}
