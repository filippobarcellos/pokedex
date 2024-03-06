import { forwardRef } from "react";

import { cn } from "mizuhara/utils";

export type SkeletonProps = React.ComponentPropsWithoutRef<"div">;

export const Skeleton = forwardRef<React.ElementRef<"div">, SkeletonProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-md bg-slate-200 motion-safe:animate-pulse",
          className
        )}
        {...props}
      />
    );
  }
);
Skeleton.displayName = "Skeleton";
