import React from "react";
import Icon from "./icon";
import { Text } from "./text";
import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "../styles/components/buttonVariants";
import { buttonIconVariants } from "../styles/components/buttonIconVariants";
import { buttonTextVariants } from "../styles/components/buttonTextVariants";
import Skeleton from "./skeleton";

interface ButtonProps extends
  Omit<React.ComponentProps<"button">, "size" | "disabled">,
  VariantProps<typeof buttonVariants> {
  icon?: React.ComponentProps<typeof Icon>["svg"]
  loading?: boolean
}

export default function Button({
  loading,
  variant,
  size,
  disabled,
  icon: IconComponent,
  className,
  children,
  ...props
}: ButtonProps) {

  if (loading) {
    return <Skeleton />
  }

  return (
    <button {...props} className={buttonVariants({ variant, size, disabled, className })}>
      {IconComponent && <Icon svg={IconComponent} className={buttonIconVariants({ variant, size })} />}
      <Text variant={"body-md-bold"} className={buttonTextVariants({ variant })}>
        {children}
      </Text>
    </button>
  )
}
