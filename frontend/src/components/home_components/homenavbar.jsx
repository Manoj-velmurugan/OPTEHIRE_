import React from "react";
import { SignedIn, UserButton, useUser } from "@clerk/clerk-react";
import logo from "../../assets/logo.png";

const HomeNavbar = () => {
  const { user } = useUser(); // Fetch user data

  return (
    <header className="relative z-20 bg-transparent text-white p-4 pl-14 pr-14">
      <nav className="flex justify-between items-center">
        {/* Logo with Name */}
                <div className="flex items-center gap-2">
                  <img src={logo} alt="OpteHire Logo" className="h-12 mt-1" />
                  <span className="text-3xl font-bold text-black">OpteHire</span>
                </div>

        <div className="flex items-center gap-4">
          <SignedIn>
            {user && <span className="text-black text-lg font-medium">{user.fullName}</span>}
            <UserButton 
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-10 h-10", // Adjust size
                }
              }} 
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default HomeNavbar;
