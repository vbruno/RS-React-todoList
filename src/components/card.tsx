import { type VariantProps } from "class-variance-authority";
import React from "react";
import { cardVariants } from "../styles/components/cardVariants";

interface TextProps extends VariantProps<typeof cardVariants>,
  React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Card({ as = "div", size, className, children, ...props }: TextProps) {
  return React.createElement(
    as,
    {
      className: cardVariants({ size, className }),
      ...props
    },
    children
  )
}
