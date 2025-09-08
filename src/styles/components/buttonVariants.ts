import { cva } from "class-variance-authority";

export const buttonVariants = cva(`
    flex items-center justify-center cursor-pointer
    transition rounded-lg group gap-2
  `, {
  variants: {
    variant: {
      primary: "bg-gray-200 hover:bg-pink-light"
    },
    size: {
      md: "h-14 py-4 px-5"
    },
    disabled: {
      true: "opacity-50 pointer-events-none"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    disabled: false
  }
})
