import { useRef, useEffect, useState } from 'react';

export function useSmoothChange(value: number) {
  const prev = useRef(value);
  const [color, setColor] = useState('');
  useEffect(() => {
    if (value > prev.current) setColor('bg-green-100');
    else if (value < prev.current) setColor('bg-red-100');
    prev.current = value;
    const timeout = setTimeout(() => setColor(''), 300);
    return () => clearTimeout(timeout);
  }, [value]);
  return color;
}
