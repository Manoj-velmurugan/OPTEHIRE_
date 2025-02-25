import React from "react";
import { useUser } from "@clerk/clerk-react"; // Clerk hook to get user state
import Navbar from "../components/landing_components/navbar";
import LandingHero from "../components/landing_components/landinghero";
import backgroundImage from "../assets/back.jpg";

const Landing = () => {
  const { isSignedIn } = useUser(); // Get signed-in status

  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar isSignedIn={isSignedIn} />
      <LandingHero isSignedIn={isSignedIn} />
    </div>
  );
};

export default Landing;