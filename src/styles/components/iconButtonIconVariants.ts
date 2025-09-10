import { cva } from "class-variance-authority";

export const iconButtonIconVariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-white",
      secondary: "fill-pink-base group-hover:fill-white",
      tertiary: "fill-gray-300 group-hover:fill-gray-400"
    },
    size: {
      sm: "size-4"
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  }
})
