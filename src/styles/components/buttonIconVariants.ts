import { cva } from "class-variance-authority";

export const buttonIconVariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-green-base"
    },
    size: {
      md: "size-5"
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  }
})
