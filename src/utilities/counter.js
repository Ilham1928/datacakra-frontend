import { useState, useEffect } from 'react'

export const useCounter = (target, active, ms = 1600) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let cur = 0;
    const inc = target / (ms / 16);
    const id = setInterval(() => {
      cur += inc;
      if (cur >= target) {
        setVal(target);
        clearInterval(id);
        return;
      }
      setVal(Math.round(cur));
    }, 16);
    return () => clearInterval(id);
  }, [target, active, ms]);
  return val;
}