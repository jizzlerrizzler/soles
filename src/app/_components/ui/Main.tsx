import { ReactNode } from "react";
import { cn } from "~/lib/utils";

interface MainProps {
  id?: string;
  className?: string;
  children: ReactNode;
  maxWidth?: boolean;
  padding?: boolean;
}

const Main = ({ id, className, children, maxWidth, padding }: MainProps) => {
  return (
    <main
      id={id}
      className={cn(
        "flex min-h-screen flex-col items-center justify-center",
        { "m-auto max-w-7xl": maxWidth },
        { "px-4": padding },

        className,
      )}
    >
      {children}
    </main>
  );
};

export default Main;
