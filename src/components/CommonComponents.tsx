import Link from "next/link";

import { cn } from "@/utils";
import { ComponentProps } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
// import { useKeycloak } from "@/context/KeycloakContext";
// import { ApiResponse, Course, CourseWithSemester, FrontEndExam, Subject, SubjectByFaculty, ValidationError } from "@/utils/types";
// import { DASHBOARD_CREATE_EXAM_NEW } from "@/utils/constants";
// import { useRouter } from "next/router";
// import { Combobox, Dialog, Transition } from "@headlessui/react";
// import useDataLib from "@/hooks/use-data-lib";
// import { GET_ALL_SEAT_FOR_SINGLE_EXAM, GET_BARCODES_FOR_SINGLE_EXAM, GET_COURSES_WITH_SEMESTER, MASTER_GET_ALL_COURSES, getUrlForSubject } from "@/utils/api";
// import SideNote from "./SideNote";
// import Layout from "./Layout";
// import { ErrorBoundary } from "react-error-boundary";
// import invariant from "tiny-invariant";


type LoadingProps = {
    children?: React.ReactNode;
    className?: string;
};

export const Spinner = ({ children, className }: LoadingProps) => (
    <div className="flex items-center">
        <svg
            className={cn(
                "-ml-1 mr-3 h-5 w-5 animate-spin text-white",
                className || ""
            )}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
            ></circle>
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
        </svg>
        {children}
    </div>
);


// type LinkProps = ComponentProps<typeof Link>
// type ButtonProps = ComponentProps<typeof Button>

// const isLinkProps = (props: LinkButtonProps): props is LinkProps => {
//     return (props as LinkProps).href !== undefined;
// };

// // LinkButtonProps will be either LinkProps or ButtonProps
// type LinkButtonProps = LinkProps | ButtonProps;

// export const LinkButton = forwardRef<HTMLButtonElement, LinkButtonProps>(
//     function LinkButton(props, ref) {
//         const { children, className, ...rest } = props;

//         // If href is provided, it's a Link
//         if ("href" in props && props.href && isLinkProps(props)) {
//             const restObj = rest as Omit<typeof Link, "href" | "className" | "children">;
//             return (
//                 <Link href={props.href} className={cn("text-primary-color hover:text-gray-500", className)} {...restObj}>
//                     {children}
//                 </Link>
//             );
//         }

//         const restObj = rest as Omit<
//             typeof Button,
//             "className" | "children"
//         >;
//         // If href is not provided, it's a Button
//         return (
//             <Button className={cn('font-base', className)} intent="text" {...restObj}>
//                 {children}
//             </Button>
//         );
//     }
// );


type LinkButtonProps =
    | ComponentProps<typeof Link> & { type: 'link' }
    | (ComponentProps<typeof Button> & { type?: 'button' })

export const LinkButton = (props: LinkButtonProps) => {
    if (!props.type || props.type === 'link') {
        const { children, className, ...rest } = props as ComponentProps<typeof Link> & { type: 'link' }
        return <Link {...rest} className={cn("text-primary-color hover:text-gray-500", className)} >{children}</Link>
    }

    const { children, className, ...rest } = props
    return (<Button intent="text" className={cn('font-normal', className)}  {...rest}>{children}</Button>)

}

type BackLinkProps = {
    url: string;
    className?: string;
    children?: React.ReactNode;
    as?: string
}
export const BackLink = ({ url, className, children, as }: BackLinkProps) => (
    <LinkButton
        type="link"
        href={url}
        as={as}
    >
        <div className={cn("flex items-center text-sm text-primary-color hover:text-gray-700", className)}>
            <ArrowLeftIcon className={cn("h-5 w-5 mr-2", className)} />
            {children}
        </div>

    </LinkButton>

);



