import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const buttonClasses = cva(["rounded-md", "font-medium"], {
  variants: {
    intent: {
      primary: [
        "bg-primary-color",
        "text-gray-900",
        "shadow-sm",
        "border-transparent",
        "focus-visible:outline",
        "focus-visible: outline-2",
        "focus-visible: outline-offset-2",
        "focus-visible: outline-primary-color",
      ],
      secondary: [
        "bg-secondary-color",
        "text-white",
        "shadow-sm",
        "border-transparent",
        "hover:bg-secondary-color/10",
        "focus-visible:outline",
        "focus-visible: outline-2",
        "focus-visible: outline-offset-2",
        "focus-visible: outline-secondary-color",
      ],
      outline: [
        "bg-white",
        "text-primary-color",
        "border",
        "border-primary-color",
        "ring-1",
        "ring-inset",
        "ring-gray-300",
        "hover:bg-gray-50",
      ],
      text: ["bg-transparent", "text-primary-color"],
    },
    size: {
      small: ["text-sm", "px-2", "py-1"],
      medium: ["text-md", "px-3", "py-2"],
      large: ["text-lg", "px-8", "py-4"],
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends ComponentProps<"button">,
  VariantProps<typeof buttonClasses> { }

export default function Button({ children, className,
  intent,
  size,
  ...props }: ButtonProps) {
  const customClasses = cn(className, props.disabled ? "opacity-50 cursor-not-allowed" : "")

  return (

    <button
      className={cn(buttonClasses({ intent, size }), customClasses)}
      {...props}
    >
      {children}
    </button>
  );
}