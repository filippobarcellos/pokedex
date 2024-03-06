import Image from "next/image";
import Link from "next/link";

import type { PokemonListQuery } from "~/graphql/gql/graphql";
import { getPokemonSprite, type PokemonType } from "~/lib/utils";

import { Badge } from "./ui/badge";

type PokemonCardProps = {
  pokemon: PokemonListQuery["list"][number];
};

export function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <div className="rounded-md border-2 border-blue-700 px-6 py-4 hover:bg-blue-100">
      <Link href={`/${pokemon.name}`}>
        <Image
          src={getPokemonSprite(pokemon.id)}
          alt={pokemon.name}
          width={128}
          height={128}
          className="rendering-pixelated"
          draggable={false}
        />
        <p className="text-sm text-muted-foreground">
          #{String(pokemon.id).padStart(3, "0")}
        </p>
        <p className="text-2xl font-semibold capitalize leading-none tracking-tight text-black">
          {pokemon.name}
        </p>
        <div className="my-2 mt-4 flex items-center gap-2">
          {pokemon.pokemons[0].types.map(({ type }) => (
            <Badge
              key={type?.name}
              type={type?.name as PokemonType}
              className="capitalize"
            >
              {type!.name}
            </Badge>
          ))}
        </div>
      </Link>
    </div>
  );
}
