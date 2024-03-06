import { Icons } from "./icons";
import { TextField } from "./ui/textfield";

type PokemonSearchProps = {
  query: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export function PokemonSearch({ query, onChange }: PokemonSearchProps) {
  return (
    <div className="mb-12">
      <TextField.Root>
        <TextField.Input
          id="search"
          name="search"
          value={query}
          onChange={onChange}
          placeholder="Enter Pokémon name or number"
          autoComplete="off"
        />
        <TextField.Slot>
          <Icons.Search className="size-4 text-blue-700" />
        </TextField.Slot>
      </TextField.Root>
    </div>
  );
}
