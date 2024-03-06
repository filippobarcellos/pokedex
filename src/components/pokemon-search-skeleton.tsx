import { Icons } from "./icons";
import { LabelStyles } from "./ui/label/styles";
import { TextFieldStyles } from "./ui/textfield/styles";

export function PokemonSearchSkeleton() {
  return (
    <div className="space-y-2">
      <label className={LabelStyles()} htmlFor="search">
        Search Pokemon
      </label>
      <div className={TextFieldStyles.Root()}>
        <input
          className={TextFieldStyles.Input()}
          id="search"
          name="search"
          placeholder="Enter Pokémon name or number"
          autoComplete="off"
          disabled
        />
        <div className={TextFieldStyles.Chrome()} />
        <div className={TextFieldStyles.Slot()}>
          <Icons.Search className="size-4 text-foreground opacity-50" />
        </div>
      </div>
    </div>
  );
}
