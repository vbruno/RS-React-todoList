import type React from "react";
import { Text } from "./text";
import type { VariantProps } from "class-variance-authority";
import { badgeVariants } from "../styles/components/badgeVariants";
import { badgeTextVariants } from "../styles/components/badgeTextVariants";

interface BadgeProps extends
  React.ComponentProps<"div">,
  VariantProps<typeof badgeVariants> {

}

export default function Badge({
  variant,
  size,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <div className={badgeVariants({ variant, size, className })} {...props}>
      <Text variant={"body-sm-bold"} className={badgeTextVariants({ variant })}>
        {children}
      </Text>
    </div>
  )
}
