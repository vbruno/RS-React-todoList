import { type VariantProps } from "class-variance-authority";
import { inputCheckboxVariants } from "../styles/components/inputCheckboxVariants";
import Icon from "./icon";
import CheckIcon from "../assets/icons/check-regular.svg?react"
import { inputCheckboxWrapperVariants } from "../styles/components/inputCheckboxWrapperVariants copy";
import { inputCheckboxIconVariants } from "../styles/components/inputCheckboxIconVariants";

interface InputCheckboxProps extends
  VariantProps<typeof inputCheckboxVariants>,
  Omit<React.ComponentProps<"input">, "size" | "disabled"> { }

export default function InputCheckbox({
  size,
  disabled,
  className,
  ...props
}: InputCheckboxProps) {
  return <label
    className={inputCheckboxWrapperVariants({ className })}
  >
    <input
      className={inputCheckboxVariants({ size, disabled })}
      type="checkbox"
      {...props}
    />
    <Icon svg={CheckIcon} className={inputCheckboxIconVariants({ size })} />
  </label>
}
