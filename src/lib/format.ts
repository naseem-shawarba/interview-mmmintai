export const formatTimestamp = (timestamp: string): string => {
  // Assuming format like "2024-04-12 08:00"
  const date = new Date(timestamp.replace(' ', 'T')) // Make it ISO-friendly
  return date.toLocaleString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}
