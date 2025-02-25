import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="relative z-20 bg-transparent text-white p-4 pl-14 pr-14">
      <nav className="flex justify-between items-center">
        {/* Logo with Name */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="OpteHire Logo" className="h-10 mt-1" />
          <span className="text-3xl font-bold text-black">OpteHire</span>
        </div>

        {/* Sign-In/Continue Button */}
        {/* <div>
          <SignedOut>
            <SignInButton forceRedirectUrl={"/home"}>
              <button className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200">
                Sign Up/ Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <a href="/home">
              <button className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200">
                Continue
              </button>
            </a> */}
            {/* Optional: Add UserButton for profile management */}
            {/* <UserButton afterSignOutUrl="/" /> */}
          {/* </SignedIn>
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;