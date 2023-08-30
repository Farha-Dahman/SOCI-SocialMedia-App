export const sleep = (ms: number) =>
  new Promise<number>((r) => setTimeout(r, ms));
