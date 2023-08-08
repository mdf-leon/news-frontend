// generic utilities

export const matchType = <Type>(value: Type, conditions: Record<string, (par:Type)=>any>) => {
  const order = conditions[typeof value];
  return typeof order === "function" ? order(value) : order;
};

export const safeParse = (str: string): JSON | string | undefined => {
  try {
    return JSON.parse(str);
  } catch {
    return undefined;
  }
};