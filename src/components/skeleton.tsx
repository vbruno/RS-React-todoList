import { type VariantProps } from "class-variance-authority";
import React from "react";
import { skeletonVariants } from "../styles/components/skeletonVariants";

interface SkeletonProps extends VariantProps<typeof skeletonVariants>,
  React.ComponentProps<"div"> {

}

export default function Skeleton({ rounded, className, ...props }: SkeletonProps) {
  return <div className={skeletonVariants({ rounded, className })} {...props} />
}
