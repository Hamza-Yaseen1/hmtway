"use client";

import { useEffect, useState } from "react";
import { animate } from "motion/react";

export default function Counter({ to = 1000, suffix = "+" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, to, {
      duration: 3,
      onUpdate: (v) => setCount(Math.round(v)),
    });

    return () => controls.stop();
  }, [to]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}