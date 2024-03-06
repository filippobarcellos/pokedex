import { PokemonCardSkeleton } from "./pokemon-card-skeleton";

export function PokemonListSkeleton() {
  return (
    <div className="m-auto grid max-w-screen-md animate-fade gap-6 sm:grid-cols-2 md:grid-cols-3">
      {Array.from({ length: 9 }).map((_, i) => (
        <PokemonCardSkeleton key={i} />
      ))}
    </div>
  );
}
