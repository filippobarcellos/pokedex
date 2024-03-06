import Link from "next/link";

import { Icons } from "../icons";

export function Navbar() {
  return (
    <header className="mt-4 w-full ">
      <div className="container flex h-full max-w-screen-2xl items-center justify-center">
        <Link href="/">
          <Icons.Logo className="h-10 w-auto" />
        </Link>
      </div>
    </header>
  );
}
