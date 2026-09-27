import { project, shouldCommitSwipe } from './swipe';

describe('shouldCommitSwipe', () => {
  test('commits when the translation crosses the threshold', () => {
    expect(shouldCommitSwipe(-120, 0, 96)).toBe(true);
  });

  test('springs back when the swipe stays short and slow', () => {
    expect(shouldCommitSwipe(-20, 0, 96)).toBe(false);
  });

  test('commits a short flick with enough velocity', () => {
    expect(shouldCommitSwipe(-24, -1800, 96)).toBe(true);
  });

  test('projects velocity with Apple-style deceleration', () => {
    expect(project(-1000)).toBeLessThan(0);
  });
});
