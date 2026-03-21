"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export default function Counter({ value = 0, suffix = "", prefix = "", duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      const safeValue = value ?? 0;
      const step = safeValue / ((duration ?? 2000) / 16);
      let current = 0;
      const timer = setInterval(() => {
        current += step;
        if (current >= safeValue) {
          setCount(safeValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix ?? ''}{count ?? 0}{suffix ?? ''}
    </span>
  );
}
