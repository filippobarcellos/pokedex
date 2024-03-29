import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

import { PokemonSection } from "~/components/pokemon-section";
import { queryClient, queryKeys } from "~/lib/react-query";
import { getAllPokemon } from "~/services/pokemon";

const page = 1;
const query = null;

export default async function Page() {
  await queryClient.prefetchQuery({
    queryKey: queryKeys.pokemonSearch("", page),
    queryFn: async () =>
      await getAllPokemon({
        page,
        query,
      }),
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PokemonSection />
      </HydrationBoundary>
    </>
  );
}
