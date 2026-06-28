"use client";

import * as React from "react";
import { Reveal } from "./Reveal";

interface Props {
  children: React.ReactNode;
  base?: number;
  step?: number;
}

export function StaggerReveal({ children, base = 0, step = 80 }: Props) {
  return (
    <>
      {React.Children.map(children, (child, i) => (
        <Reveal delay={base + i * step}>{child}</Reveal>
      ))}
    </>
  );
}
