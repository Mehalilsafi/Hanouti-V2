
import { NavLink } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, Mail } from "lucide-react";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-brand-accent via-white to-brand-highlight font-sans">

      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-soft-lg border border-brand-accent/30 p-8 sm:p-10 lg:p-12 w-full max-w-md mx-auto text-center">

        <h1 className="font-extrabold text-4xl sm:text-5xl text-brand-primary mb-8">
          Welcome Back
        </h1>

        <form className="flex flex-col gap-6 w-full">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email address"
              className="pl-10 h-12 text-lg border border-gray-300 focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary rounded-xl transition-all duration-200"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className="pl-10 h-12 text-lg border border-gray-300 focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary rounded-xl transition-all duration-200"
              required
            />
          </div>
<NavLink to='/dashboard'>

          <Button
            type="submit"
            className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-xl shadow-soft hover:from-brand-secondary hover:to-brand-primary transition-all duration-300"
            >
            Login
          </Button>
            </NavLink>
        </form>

        <NavLink to="/forgot-password" className="mt-6 block text-sm font-medium text-brand-secondary hover:text-brand-primary transition-colors duration-200">
          Forgot password? <span className="underline">Click here</span>
        </NavLink>

        <NavLink to="/register" className="mt-4 block text-base text-gray-600">
          Don't have an account?{" "}
          <span className="font-semibold text-brand-primary hover:text-brand-secondary transition-colors duration-200">Sign Up</span>
        </NavLink>
      </div>
    </div>
  )
}

export default Login