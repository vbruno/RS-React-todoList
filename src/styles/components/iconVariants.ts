import { cva } from "class-variance-authority";

export const iconVariantes = cva("fill-gray-400", {
  variants: {
    animate: {
      false: "",
      true: "animate-spin"
    }
  },
  defaultVariants: {
    animate: false
  }
})
