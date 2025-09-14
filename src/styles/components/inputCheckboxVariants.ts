import { cva } from "class-variance-authority";

export const inputCheckboxVariants = cva(`
    appearance-none peer flex items-center justify-center cursor-pointer
    border-2 border-solid transition overflow-hidden
    border-green-base hover:border-green-dark hover:bg-green-dark/20
    checked:border-green-base checked:bg-green-base
    group-hover:checked:border-green-dark group-hover:checked:bg-green-dark
  `, {
    variants: {
      size: {
        md: "size-5 rounded-sm"
      },
      disabled: {
        true: "pointer-none:"
      }
    },
    defaultVariants: {
      size: "md",
      disabled: false
    }
  })
