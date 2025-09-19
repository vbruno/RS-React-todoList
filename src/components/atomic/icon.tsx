import type { VariantProps } from "class-variance-authority";
import React from "react";
import { iconVariants } from "../../styles/components/iconVariants";

interface IconProps extends React.ComponentProps<"svg">, VariantProps<typeof iconVariants> {
  svg: React.FC<React.ComponentProps<"svg">>;
}

export default function Icon({ svg: SvgComponent, className, animate, ...props }: IconProps) {
  return <SvgComponent className={iconVariants({ className, animate })} {...props} />
}
