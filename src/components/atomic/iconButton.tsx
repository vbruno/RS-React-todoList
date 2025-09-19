import type React from "react";
import Icon from "./icon";
import type { VariantProps } from "class-variance-authority";
import { iconButtonVariants } from "../../styles/components/iconButtonVariants";
import { iconButtonIconVariants } from "../../styles/components/iconButtonIconVariants";
import Skeleton from "./skeleton";

interface IconButtonProps extends
  Omit<React.ComponentProps<"button">, "size" | "disabled">,
  VariantProps<typeof iconButtonVariants> {
  icon: React.ComponentProps<typeof Icon>["svg"]
  loading?: boolean
}

export default function IconButton({
  loading,
  variant,
  size,
  disabled,
  className,
  icon,
  ...props
}: IconButtonProps) {

  if (loading) {
    return <Skeleton
      rounded={"sm"}
      className={iconButtonVariants({
        variant: "none",
        size,
        className
      })}
    />
  }

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
