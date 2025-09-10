import type React from "react";
import Icon from "./icon";
import type { VariantProps } from "class-variance-authority";
import { iconButtonVariants } from "../styles/components/iconButtonVariants";
import { iconButtonIconVariants } from "../styles/components/iconButtonIconVariants";

interface IconButtonProps extends
  Omit<React.ComponentProps<"button">, "size" | "disabled">,
  VariantProps<typeof iconButtonVariants> {
  icon: React.ComponentProps<typeof Icon>["svg"]
}

export default function IconButton({
  variant,
  size,
  disabled,
  className,
  icon,
  ...props
}: IconButtonProps) {
  return <button className={iconButtonVariants({
    variant,
    size,
    disabled,
    className
  })}
    {...props}
  >
    <Icon svg={icon} className={iconButtonIconVariants({ variant, size })} />
  </button>
}
