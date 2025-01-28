// import { cva, VariantProps } from "class-variance-authority";
// import { ComponentProps } from "react";
// import { ExclamationTriangleIcon, InformationCircleIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
// import { cn } from "@/utils";

// const sideNoteClasses = cva(
//     [
//         "border-l-[3px]",
//         "rounded-l-[3px]",
//         "rounded-r-md",
//         "mb-8",
//     ],
//     {
//         variants: {
//             type: {
//                 success: ["bg-lime-100", "text-lime-700", "ring-sky-500/10", "border-lime-500"],
//                 error: ["bg-pink-100", "text-pink-700", "ring-sky-500/10", "border-pink-500"],
//                 info: ["bg-zinc-100", "text-zinc-700", "ring-zinc-500/10", "border-zinc-500"],
//                 warning: ["bg-amber-100", "text-amber-700", "ring-sky-500/10", "border-amber-500"],
//                 notice: ["bg-sky-100", "text-sky-700", "ring-sky-500/10", "border-sky-500"]
//             },
//             size: {
//                 small: ["text-sm", "p-4"],
//                 medium: ["text-md", "p-6"],
//                 large: ["text-lg", "p-8"],
//             },
//         },
//         defaultVariants: {
//             type: "info",
//             size: "medium",
//         },
//     }
// );

// export interface SideNoteProps
//     extends ComponentProps<"div">,
//     VariantProps<typeof sideNoteClasses> {
//     title?: string;
// }

// export default function SideNote({ children, className, title, type, size, ...props }: SideNoteProps) {
//     let icon = {
//         component: InformationCircleIcon,
//         radius: "rounded-[50%]",
//         size: "h-5 w-5",
//         color: "text-gray-600",
//     }
//     InformationCircleIcon;


//     switch (type) {
//         case "success":
//             icon = {
//                 ...icon,
//                 component: CheckCircleIcon,
//                 color: "text-lime-400",
//             };
//             break;
//         case "error":
//             icon = {
//                 ...icon,
//                 component: ExclamationTriangleIcon,
//                 color: "text-pink-400",
//                 radius: "rounded-[30%]",
//             };
//             break;
//         case "warning":
//             icon = {
//                 ...icon,
//                 component: ExclamationTriangleIcon,
//                 color: "text-amber-400",
//                 radius: "rounded-[30%]",
//             }
//             break;
//         case "notice":
//             icon = {
//                 ...icon,
//                 color: "text-blue-600",
//             }
//             break;
//         case "info":
//         default:
//             icon
//     }

//     const Icon = icon.component;

//     return (
//         <div className="relative">
//             {/**
//               * For Icon at top-left uncomment this

//             <div className={cn("absolute top-0 -translate-x-1/2 -translate-y-1/2 transform  bg-white p-2 transition-colors z-50", icon.radius)}>
//                 <Icon className={cn(icon.size, icon.color)} />
//             </div> */}
//             <aside
//                 className={`${sideNoteClasses({ type, size, className })} relative`}
//                 {...props}
//             >
//                 <div className="flex items-center space-x-3">
//                     <Icon className={cn(icon.size, icon.color)} />
//                     <h2 className="font-semibold">{title}</h2>
//                 </div>
//                 {children ? <div className="mt-1 ">{children}</div> : null}
//             </aside>
//         </div>
//     );
// }
