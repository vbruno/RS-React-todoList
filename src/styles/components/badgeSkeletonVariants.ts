import { cva } from "class-variance-authority";

export const badgeSkeletonVariants = cva("", {
  variants: {
   size: {
      sm: "size-6"
    }
  },
  defaultVariants: {
    size: "sm"
  }
})
