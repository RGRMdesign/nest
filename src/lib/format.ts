const dateFormatter = new Intl.DateTimeFormat('nl-NL', {
  day: 'numeric',
  month: 'short',
});

export function formatShortDate(value: string | Date): string {
  return dateFormatter.format(typeof value === 'string' ? new Date(value) : value);
}

export function formatCount(value: number): string {
  return new Intl.NumberFormat('nl-NL').format(value);
}
