import { tv } from "mizuhara/utils";

export const TextFieldStyles = {
  Root: tv({
    base: [
      "relative flex cursor-text gap-2 px-3",
      "[&:has(:disabled)]:cursor-not-allowed",
    ],
  }),
  Slot: tv({
    base: ["relative z-10 flex shrink-0 items-center text-input"],
  }),
  Input: tv({
    base: [
      "peer block h-10 w-full appearance-none bg-transparent text-sm text-black outline-none transition",
      "placeholder:text-muted-foreground",
      "disabled:cursor-not-allowed disabled:opacity-50",
    ],
  }),
  Chrome: tv({
    base: [
      "pointer-events-none absolute inset-0 z-0 rounded-md border-2 border-blue-700 ring-offset-2 ring-offset-background transition",
      "peer-focus-within:ring-1 peer-focus-within:ring-ring peer-[&:focus-within[aria-invalid=true]]:ring-destructive peer-aria-[invalid=true]:border-destructive",
    ],
  }),
};
