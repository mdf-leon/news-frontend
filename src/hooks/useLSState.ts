import React from "react";
import { matchType, safeParse } from "../util";

export default function useLSState<Type>(name: string, value?: Type): [Type | undefined, (newValue: Type) => void, (newValue: Type) => Type] {
  
  const savedItem =
    typeof window !== "undefined" ? localStorage.getItem(name) : null;
  
  const sanitizedItem = matchType(savedItem, {
    string: (rawValue) => rawValue ? safeParse(rawValue) : rawValue,
  });

  const [variable, set_variable] = React.useState<Type>();

  const softSet_variable = (newValue: Type): Type => {
    if (typeof window !== "undefined")
      localStorage.setItem(name, JSON.stringify(newValue));
    return newValue;
  };

  const setVariable = (interceptedValue: Type) => {
    set_variable(softSet_variable(interceptedValue));
  };

  React.useEffect(() => {
    setVariable(sanitizedItem || value);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [variable, setVariable, softSet_variable];

}
