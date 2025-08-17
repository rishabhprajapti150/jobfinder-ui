import { cn } from "@/lib/utils";
// import { ComponentPropsWithoutRef, forwardRef, useId } from "react";


// type CheckboxProps = {
//   label?: React.ReactNode;
//   labelClassName?: string;
//   className?: string;
// } & Omit<ComponentPropsWithoutRef<'input'>, 'className'>;

// const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
//   { label, labelClassName, className, ...props }: CheckboxProps,
//   ref
// ) {

//   const generatedId = useId();
//   const appliedId = props.id || generatedId;

//   return (
//     <div className="flex h-6 items-center">
//       <input
//         ref={ref}
//         id={appliedId}
//         aria-describedby={typeof label === "string" ? label : ""}
//         type="checkbox"
//         className={cn(
//           "h-4 w-4 rounded border-gray-300 text-primary-color focus:ring-primary-color accent-primary-color",
//           className
//         )}
//         {...props}
//       />
//       {label ? (
//         <div className="ml-3 text-sm leading-6">
//           <label htmlFor={appliedId} className={cn("font-medium text-gray-900", labelClassName)}>
//             {label}
//           </label>
//         </div>
//       ) : null}
//     </div>
//   );
// });

// export default Checkbox

// import Checkbox from './Checkbox'

// export default Checkbox
import React, { forwardRef } from 'react';

interface CustomCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClass?: string;
  labelClass?: string;
  checkmarkClass?: string;
  checkedColor?: string;
  uncheckedColor?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CustomCheckboxProps>(
  (
    {
      label,
      containerClass = '',
      labelClass = '',
      checkmarkClass = '',
      checkedColor = 'bg-indigo-600 border-indigo-600',
      uncheckedColor = 'border-gray-300 hover:border-indigo-400',
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <label className={`flex items-center space-x-3 cursor-pointer group ${containerClass}`}>
        {/* Custom checkbox box */}
        <div className={`relative w-5 h-5 rounded border-2 transition-colors ${
          props.checked ? checkedColor : uncheckedColor
        } ${className}`}>
          {/* Custom checkmark */}
          {props.checked && (
            <svg
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white ${checkmarkClass}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}
          <input
            type="checkbox"
            // className={"absolute opacity-0 w-full h-full cursor-pointer"}
            className={cn(
       " absolute opacity-0 w-full h-full cursor-pointer rounded border-gray-300 text-primary-color focus:ring-primary-color accent-primary-color",
          className
       )}
            ref={ref}
            {...props}
          />
        </div>
        {label && (
          <span className={`text-gray-700 group-hover:text-indigo-600 ${labelClass}`}>
            {label}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'CustomCheckbox';

export default Checkbox;