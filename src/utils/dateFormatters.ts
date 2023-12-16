export function formatDateToString(date: Date | null) {
  if (!date) return null;
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Add 1 to month and pad with zero if needed
  const day = date.getDate().toString().padStart(2, '0'); // Pad with zero if needed

  return `${year}-${month}-${day}`;
}
