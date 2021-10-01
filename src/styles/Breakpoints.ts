export const size = {
  sm: "500px",
  md: "800px",
  lg: "1100px",
  xl: "1200px",
};

export const device = (Object.keys(size) as Array<keyof typeof size>).reduce(
  (acc, key) => {
    acc[key] = (style: String) =>
      `@media (min-width: ${size[key]}) { ${style} }`;
    return acc;
  },
  {} as { [index: string]: Function }
);
