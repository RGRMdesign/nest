export function project(velocity: number, decelerationRate = 0.998): number {
  return ((velocity / 1000) * decelerationRate) / (1 - decelerationRate);
}

export function shouldCommitSwipe(
  translation: number,
  velocity: number,
  threshold: number
): boolean {
  return translation + project(velocity) <= -threshold;
}
