import { type VariantProps } from "class-variance-authority";
import React from "react";
import { textVariants } from "../styles/components/textVariants";

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

export function Text({ as = "span", variant, className, children, ...props }: TextProps) {
  return React.createElement(
    as,
    {
      className: textVariants({ variant, className }),
      ...props
    },
    children
  )
}
