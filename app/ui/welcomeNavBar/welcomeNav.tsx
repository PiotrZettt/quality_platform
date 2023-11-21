"use client";

import Container from "../container";
import Logo from "./logo";
import UserMenu from "./userMenu";

const WelcomeNav = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div
        className="
            border-b-[1] 
            py-4"
      >
        <Container>
          <div
            className="
                flex
                flex-row
                items-center
                justify-between
                gap-3
                md:gap-0
                "
          >
            <Logo/>
            <UserMenu/>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default WelcomeNav;
