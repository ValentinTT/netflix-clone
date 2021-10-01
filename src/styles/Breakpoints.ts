export const sizeInNumber = {
  sm: 500,
  md: 800,
  lg: 1100,
  xl: 1200,
};

export const size = {
  sm: `${sizeInNumber.sm}px`,
  md: `${sizeInNumber.md}px`,
  lg: `${sizeInNumber.lg}px`,
  xl: `${sizeInNumber.xl}px`,
};

export const device = (Object.keys(size) as Array<keyof typeof size>).reduce(
  (acc, key) => {
    acc[key] = (style: String) =>
      `@media (min-width: ${size[key]}) { ${style} }`;
    return acc;
  },
  {} as { [index: string]: Function }
);
