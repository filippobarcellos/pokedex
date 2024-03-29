import { Skeleton } from "./ui/skeleton";

export function PokemonCardSkeleton() {
  return (
    <div className="rounded-md border-2 border-blue-700 px-6 py-4">
      <div className="flex flex-col gap-2">
        <Skeleton className="size-32" />
        <Skeleton className="h-5 w-8" />
        <Skeleton className="h-6 w-28" />
      </div>
      <div className="my-2 flex items-center gap-2">
        <Skeleton className="h-5 w-14" />
        <Skeleton className="h-5 w-14" />
      </div>
    </div>
  );
}
