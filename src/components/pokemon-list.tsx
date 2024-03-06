import type { PokemonListQuery } from "~/graphql/gql/graphql";

import { PokemonCard } from "./pokemon-card";

type PokemonListProps = {
  data: PokemonListQuery;
};

export function PokemonList({ data }: PokemonListProps) {
  const isEmpty = data?.list.length === 0;

  if (isEmpty) {
    return (
      <p className="text-center text-2xl font-semibold">No Pokemon found.</p>
    );
  }

  return (
    <div className="m-auto grid max-w-screen-md animate-fade gap-6 sm:grid-cols-2 md:grid-cols-3">
      {data?.list.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
