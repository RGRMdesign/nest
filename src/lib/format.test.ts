import { formatCount, formatShortDate } from './format';

describe('formatShortDate', () => {
  test('formats an ISO date in Dutch', () => {
    expect(formatShortDate('2026-09-29')).toMatch(/29/);
  });
});

describe('formatCount', () => {
  test('formats integers with Dutch grouping', () => {
    expect(formatCount(18)).toBe('18');
    expect(formatCount(1200)).toBe('1.200');
  });
});
