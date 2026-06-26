import * as React from "react";
import { cn } from "../../lib/cn";

const MAX: Record<string, string> = {
  md: "var(--container-md)",
  lg: "var(--container-lg)",
  xl: "var(--container-xl)",
  prose: "var(--container-xs)",
};

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "md" | "lg" | "xl" | "prose";
}

/** Constrained, centred content column with a fluid gutter. */
export function Container({
  size = "lg",
  className = "",
  style,
  children,
  ...rest
}: ContainerProps) {
  return (
    <div
      className={cn(className)}
      style={{
        width: "100%",
        maxWidth: MAX[size],
        marginInline: "auto",
        paddingInline: "var(--gutter)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
