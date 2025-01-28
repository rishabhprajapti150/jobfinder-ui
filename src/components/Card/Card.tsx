import { cn } from "@/utils";
//import clsx from "clsx";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

 const  Card = ({ className, children }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-3xl bg-white px-10 py-4 drop-shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
}

const CardHeading = ({ children, className }: CardProps) => {
  return (<div className={cn("border-b border-gray-200 bg-white px-4 py-5 sm:px-6", className || "")}>
    {children}
  </div>)
}

Card.Heading = CardHeading;
export default Card;