import React, { useEffect, useState } from "react";
export const useMount = (cd: Function) => {
  useEffect(() => {
    cd();
  }, []);
};
export const useDebounce = <T>(value: T, delay: number) => {
  const [debouncevalue, setDebouncevalue] = useState(value);

  useEffect(() => {
    let timer = setTimeout(() => setDebouncevalue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncevalue;
};
