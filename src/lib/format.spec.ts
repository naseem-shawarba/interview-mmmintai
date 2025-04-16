import { expect, test } from 'vitest'
import { formatTimestamp } from './format'

test('formats a valid UTC timestamp correctly', () => {
  expect(formatTimestamp('2025-04-10T08:45:00Z')).toBe('10.04.2025, 10:45')
})

test('returns "Invalid Date" for malformed input', () => {
  expect(formatTimestamp('invalid')).toBe('Invalid Date')
})
