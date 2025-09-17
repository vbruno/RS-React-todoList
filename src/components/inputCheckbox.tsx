import { type VariantProps } from "class-variance-authority";
import Icon from "./icon";
import CheckIcon from "../assets/icons/check-regular.svg?react"
import { inputCheckboxWrapperVariants } from "../styles/components/inputCheckboxWrapperVariants copy";
import { inputCheckboxVariants } from "../styles/components/inputCheckboxVariants";
import { inputCheckboxIconVariants } from "../styles/components/inputCheckboxIconVariants";
import Skeleton from "./skeleton";

interface InputCheckboxProps extends
  VariantProps<typeof inputCheckboxVariants>,
  Omit<React.ComponentProps<"input">, "size" | "disabled"> {
  loading?: boolean
}

export default function InputCheckbox({
  loading,
  variant,
  size,
  disabled,
  className,
  ...props
}: InputCheckboxProps) {

  if (loading) {
    return <Skeleton
      rounded={"sm"}
      className={inputCheckboxVariants({
        size,
        variant: "none"
      })}
    />
  }

  return <label
    className={inputCheckboxWrapperVariants({ className })}
  >
    <input
      className={inputCheckboxVariants({ variant, size, disabled })}
      type="checkbox"
      {...props}
    />
    <Icon svg={CheckIcon} className={inputCheckboxIconVariants({ size })} />
  </label>
}
