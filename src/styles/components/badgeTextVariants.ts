import { cva } from "class-variance-authority";

export const badgeTextVariants = cva("", {
  variants: {
    variant: {
      none: "",
      primary: "text-green-dark",
      secondary: "text-pink-dark",
    }
  },
  defaultVariants: {
    variant: "primary"
  }
})
