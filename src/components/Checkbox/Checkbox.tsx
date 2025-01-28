import { cn } from "@/utils";
import { ComponentPropsWithoutRef, forwardRef, useId } from "react";


type CheckboxProps = {
  label?: React.ReactNode;
  labelClassName?: string;
  className?: string;
} & Omit<ComponentPropsWithoutRef<'input'>, 'className'>;

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, labelClassName, className, ...props }: CheckboxProps,
  ref
) {

  const generatedId = useId();
  const appliedId = props.id || generatedId;

  return (
    <div className="flex h-6 items-center">
      <input
        ref={ref}
        id={appliedId}
        aria-describedby={typeof label === "string" ? label : ""}
        type="checkbox"
        className={cn(
          "h-4 w-4 rounded border-gray-300 text-primary-color focus:ring-primary-color accent-primary-color",
          className
        )}
        {...props}
      />
      {label ? (
        <div className="ml-3 text-sm leading-6">
          <label htmlFor={appliedId} className={cn("font-medium text-gray-900", labelClassName)}>
            {label}
          </label>
        </div>
      ) : null}
    </div>
  );
});

export default Checkbox