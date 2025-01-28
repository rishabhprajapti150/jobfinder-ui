import React,{ ComponentProps, forwardRef, useId, useState } from "react";
import Button from "@/components/Button";
import {EyeIcon, EyeSlashIcon  } from '@heroicons/react/24/outline'
import { cn } from "@/utils";

type CustomInputProps = {
  label: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

type InputProps = CustomInputProps & ComponentProps<"input">

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ id, label, className, required, type, ...props }: InputProps, ref)  {
    const generatedId = useId();
    const appliedId = id || generatedId;
    const [showPassword, setShowPassword] = useState(false);
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
        <div className="relative mt-2 rounded-md">
          {props.left ? (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              {props.left}
            </div>
          ) : null}
          <input
            id={appliedId}
            type={
                type === "password" && showPassword
                ? "text"
                : type || "text"
            }
            ref={ref}
            className={cn(
              "block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6",
              props.disabled
                ? "disabled:ring-gray-20 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                : "",
              props.right || type === "password"
                ? "border-r-0 pr-10 shadow-none"
                : "",
              props.left ? "border-l-0 pl-10 shadow-none" : "",

              className
            )}
            {...props}
          />
          {props.right ? (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              {props.right}
            </div>
          ) : null}
          {type === "password" ? (
            <div className="absolute inset-y-0 right-0 flex items-center rounded-l-none bg-transparent pr-3 shadow-none">
              <Button
                type="button"
                intent="text"
                onClick={() => setShowPassword((p) => !p)}
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    );
});


export default Input;