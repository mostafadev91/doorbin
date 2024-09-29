import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Theme from "./Theme";
import Notifications from "./Notifications";
import GlobalSearch from "../search/GlobalSearch";

const Navbar = () => {
  return (
    <nav className="background-light50_dark950 flex-between py-3 px-6 sm:px-8 shadow-light-100 dark:shadow-dark-100">
      <Link href="/" className="flex items-center gap-1.5">
        <span className="h2-bold text-light50_dark950 font-spaceGrotesk max-sm:hidden">
          DOORBIN
        </span>

        <Image
          src="/images/logo.png"
          width={106}
          height={82}
          alt="دوربین"
          className="h-8 w-10"
        />
      </Link>

      <GlobalSearch />

      <div className="flex-between gap-4">
        <Theme />
        <Notifications />

        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#0ea5e9",
              },
            }}
          />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
