type TMods = Record<string, string | boolean>;

export const classNames = (
  cls: string,
  mods: TMods,
  additional: string[]
): string => {
  const modsArray: string[] = Object.entries(mods).reduce(
    (acc, [key, value]) => {
      Boolean(value) && acc.push(key);
      return acc;
    },
    []
  );

  return [cls, ...modsArray, ...additional].join(" ");
};
