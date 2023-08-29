export const sleep = (ms: number) =>
  new Promise<number>((r) => setTimeout(r, ms));

export const encodeRole = (role: string): string => {
  return btoa(role);
};
