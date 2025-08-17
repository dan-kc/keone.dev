const COLOR = {
  violet: "violet",
  green: "green",
  orange: "orange",
  sky: "sky",
  slate: "slate",
  sage: "sage",
} as const;
type ObjectValue<T> = T[keyof T];
export type Color = ObjectValue<typeof COLOR>;
