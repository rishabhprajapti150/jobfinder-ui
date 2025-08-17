import { cn } from "@/lib/utils";
// import clsx from "clsx";
import { ComponentProps, useId } from "react";

type SelectProps = ComponentProps<"select"> & {
  label: string;
  children: React.ReactNode;
}

const Select = ({ id, label, children, required, className, ...props }: SelectProps) => {
  const generatedId = useId();
  const appliedId = id || generatedId;
  return (
    <div>

      <label
        htmlFor={appliedId}
        className={cn(
          "block text-sm font-medium leading-6 text-gray-900",
          required ? `after:ml-1 after:text-red-500 after:content-['*']` : ""
        )}
      >
        {label}
      </label>
      <select
        id={appliedId}
        className={cn(
          "mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary-color sm:text-sm sm:leading-6",
          props.disabled
            ? "disabled:ring-gray-20 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
            : "",
          className || ""
        )}
        {...props}
      >
        {children}
      </select>
    </div>
  );
}

export default Select;