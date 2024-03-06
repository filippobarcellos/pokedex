"use client";
import Image from "next/image";
import { CountUp, useCountUp } from "use-count-up";

import { capitalize, getPokemonSprite, type PokemonType } from "~/lib/utils";
import type { getPokemon } from "~/services/pokemon";

import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

type PokemonDetailsCardProps = {
  pokemon: NonNullable<Awaited<ReturnType<typeof getPokemon>>>;
};

export function PokemonDetailsCard({ pokemon }: PokemonDetailsCardProps) {
  return (
    <section className="flex max-w-full flex-col rounded-lg border-2 border-blue-700 px-6 py-4 motion-safe:animate-fade-right motion-safe:animate-delay-150 md:max-w-lg">
      <div className="grid sm:grid-cols-2">
        <div>
          <p className="text-sm text-black">
            #{String(pokemon.id).padStart(3, "0")}
          </p>
          <h1 className="text-3xl font-extrabold capitalize tracking-tight text-black sm:text-4xl lg:text-5xl">
            {pokemon.name}
          </h1>
          <Image
            src={getPokemonSprite(pokemon.id)}
            alt={capitalize(pokemon.name)}
            width={256}
            height={256}
            priority
            className="rendering-pixelated"
            draggable={false}
          />
          <div className="my-2 flex items-center gap-2">
            {pokemon.types.map((type) => (
              <Badge
                className="capitalize"
                key={type.type?.name}
                type={type.type?.name as PokemonType}
              >
                {type.type?.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 space-y-2">
        {pokemon.stats.map(({ base_stat, stat }, index) => (
          <div key={index}>
            <p className="capitalize text-black">
              {stat?.name} : <CountUp isCounting end={base_stat} />
            </p>
            <StatsBar value={base_stat} />
          </div>
        ))}
      </div>
    </section>
  );
}

type StatsBarProps = {
  value: number;
};

function StatsBar({ value }: StatsBarProps) {
  const { value: animateValue } = useCountUp({
    isCounting: true,
    end: value,
    easing: "easeOutCubic",
  });

  return <Progress value={(Number(animateValue) / 255) * 100} />;
}
