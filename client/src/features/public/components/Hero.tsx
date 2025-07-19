import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    // Main container: full screen height, using brand-primary for background.
    // Dark mode uses brand-secondary for a subtle shift.
    <div className="flex flex-col justify-center items-center gap-12 w-full min-h-screen p-4 sm:p-6 lg:p-8 bg-brand-primary dark:bg-brand-secondary font-sans text-brand-highlight">
      
      {/* Main Heading */}
      <h1 className="font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl flex flex-col items-center justify-center text-center leading-tight">
        {/* 'Your journey to success' - Uses brand-highlight for primary emphasis */}
        <span className="block text-brand-highlight dark:text-brand-accent drop-shadow-md">Your journey to success</span>
        {/* 'begins now' - Uses brand-accent with a subtle shadow for secondary emphasis */}
        <span className="block text-brand-accent dark:text-brand-highlight text-shadow-lg mt-2">begins now</span>
      </h1>

      {/* Sub-paragraph */}
      <p className="font-semibold text-lg sm:text-xl md:text-2xl text-brand-accent dark:text-brand-highlight max-w-4xl text-center leading-relaxed px-4">
        Make your first sale. Hit your first million. Build your business
        without limits.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
        <NavLink to='register'>

        <Button 
        
          className="font-semibold text-lg px-8 py-4 rounded-xl shadow-soft bg-brand-highlight text-brand-primary hover:bg-brand-accent transition duration-300 ease-in-out"
        >
          Start Free Trial
        </Button>
          </NavLink>
      
        <NavLink to='/about'>

        <Button 
          variant="ghost"
          className="font-semibold text-lg px-8 py-4 rounded-xl text-brand-accent hover:bg-brand-accent hover:text-brand-primary dark:text-brand-highlight dark:hover:bg-brand-highlight dark:hover:text-brand-secondary transition duration-300 ease-in-out"
        >
          Learn More
        </Button>
          </NavLink>
      </div>

      {/* User Avatars & Testimonial */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 p-4 mt-8">
        {/* Avatar Group */}
        <div className="flex flex-row flex-wrap items-center gap-3 -space-x-3">
          {/* Avatar styling uses shadcn defaults which respect your `@theme inline` for `background`, `foreground`, etc. */}
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
          {/* You could add a count avatar if you have more users, using brand colors */}
          <Avatar className="bg-brand-accent text-brand-primary text-sm font-bold">
            <AvatarFallback>+2K</AvatarFallback>
          </Avatar>
        </div>
        {/* Testimonial Text: text-brand-accent with dark mode text-brand-highlight */}
        <p className="text-lg sm:text-xl font-medium text-brand-accent dark:text-brand-highlight max-w-2xl text-center md:text-left">
          Join thousands of entrepreneurs simplifying their online sales.
        </p>
      </div>
    </div>
  );
}

export default Hero;