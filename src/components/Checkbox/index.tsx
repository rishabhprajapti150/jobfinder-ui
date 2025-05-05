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

const CustomCheckbox = forwardRef<HTMLInputElement, CustomCheckboxProps>(
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
            className="absolute opacity-0 w-full h-full cursor-pointer"
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

CustomCheckbox.displayName = 'CustomCheckbox';

export default CustomCheckbox;