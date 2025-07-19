import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathArray = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/pricing", name: "Pricing" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-brand-primary shadow-lg sticky top-0 z-50 border-b border-brand-accent dark:bg-brand-secondary dark:border-brand-highlight px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-10 h-10 bg-brand-secondary dark:bg-brand-accent rounded-xl">
            <ShoppingBag className="w-6 h-6 text-brand-highlight dark:text-brand-primary" />
          </div>

          <span className="text-2xl font-bold text-brand-primary dark:text-brand-highlight">
            hanouti
          </span>
        </div>

        <nav className="hidden md:flex space-x-8">
          {pathArray.map((ele, index) => (
            <NavLink
              key={index}
              to={ele.path}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-brand-highlight bg-brand-secondary dark:text-brand-primary dark:bg-brand-accent" //
                    : "text-brand-highlight hover:text-brand-primary hover:bg-brand-accent dark:text-brand-highlight dark:hover:text-brand-primary dark:hover:bg-brand-secondary"
                }`
              }
            >
              {ele.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <NavLink to="/login">
            <Button
              variant="ghost"
              className="text-brand-highlight hover:text-brand-primary hover:bg-brand-accent dark:text-brand-highlight dark:hover:text-brand-primary dark:hover:bg-brand-secondary"
            >
              Sign In
            </Button>
          </NavLink>
          <NavLink to="/register">
            <Button className="bg-brand-highlight hover:bg-brand-accent text-brand-primary dark:bg-brand-highlight dark:hover:bg-brand-accent dark:text-brand-primary">
              Get Started
            </Button>
          </NavLink>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-brand-highlight hover:text-brand-primary hover:bg-brand-accent dark:text-brand-highlight dark:hover:text-brand-primary dark:hover:bg-brand-secondary transition-colors"
          >
            {isMenuOpen ? (
              <X className="block h-6 w-6" />
            ) : (
              <Menu className="block h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-brand-primary border-t border-brand-accent dark:bg-brand-secondary dark:border-brand-highlight">
            {pathArray.map((ele, index) => (
              <NavLink
                key={index}
                to={ele.path}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium transition-colors text-brand-highlight hover:text-brand-primary hover:bg-brand-accent dark:text-brand-highlight dark:hover:text-brand-primary dark:hover:bg-brand-secondary"
              >
                {ele.name}
              </NavLink>
            ))}

            <div className="flex flex-col space-y-2 px-3 pt-4 border-t border-brand-accent mt-4 dark:border-brand-highlight">
              <NavLink to="login">
                <Button
                  variant="ghost"
                  className="text-brand-highlight hover:text-brand-primary hover:bg-brand-accent justify-start dark:text-brand-highlight dark:hover:text-brand-primary dark:hover:bg-brand-secondary"
                >
                  Sign In
                </Button>
              </NavLink>
              <NavLink to="/register">
                <Button className="bg-brand-highlight hover:bg-brand-accent text-brand-primary dark:bg-brand-highlight dark:hover:bg-brand-accent dark:text-brand-primary">
                  Get Started
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
