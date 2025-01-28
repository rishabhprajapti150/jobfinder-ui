import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";



const badgeClasses = cva(
    ["inline-flex", "items-center", "rounded-md", "font-medium", "ring-1", "ring-inset"], {
    variants: {
        type: {
            green: [
                "bg-lime-100",
                "text-lime-700",
                "ring-lime-500/10"
            ],
            red: [
                "bg-pink-100",
                "text-pink-700",
                "ring-pink-500/10"
            ],
            gray: [
                "bg-zinc-100",
                "text-zinc-700",
                "ring-zinc-500/10"
            ],
            yellow: [
                "bg-amber-100",
                "text-amber-700",
                "ring-amber-500/10"
            ]
        },
        size: {
            small: ["text-sm", "font-medium", "px-2", "py-1"],
            medium: ["text-md", "font-medium", "px-3", "py-2"],
            large: ["text-lg", "font-medium", "px-8", "py-4"],
        },
    },
    defaultVariants: {
        type: "gray",
        size: "small",
    },
});

export interface BadgeProps

    extends ComponentProps<"span">,
    VariantProps<typeof badgeClasses> { }

export default function Badge({
    children,
    className,
    type,
    size,
    ...props
}: BadgeProps) {
    return (

        <span className={badgeClasses({ type, size, className })} {...props}>
            {children}
        </span>
    );
}
