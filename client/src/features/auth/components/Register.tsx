
import { NavLink } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User, Mail, Lock } from 'lucide-react'; // Import necessary icons


function Register() {
  return (
     <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-brand-accent via-white to-brand-highlight font-sans">

      {/* Register Card Container */}
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-soft-lg border border-brand-accent/30 p-8 sm:p-10 lg:p-12 w-full max-w-md mx-auto text-center">

        {/* Title */}
        <h1 className="font-extrabold text-4xl sm:text-5xl text-brand-primary mb-8">
          Join Us
        </h1>

        <form className="flex flex-col gap-6 w-full">
          {/* First Name Input */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <Input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              className="pl-10 h-12 text-lg border border-gray-300 focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary rounded-xl transition-all duration-200"
              required
            />
          </div>

          {/* Last Name Input */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <Input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="pl-10 h-12 text-lg border border-gray-300 focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary rounded-xl transition-all duration-200"
              required
            />
          </div>

          {/* Email Input */}
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

          {/* Password Input */}
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

          {/* Sign Up Button */}
          <NavLink to="/dashboard">

          <Button
            type="submit"
            className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-xl shadow-soft hover:from-brand-secondary hover:to-brand-primary transition-all duration-300"
          >
            Sign Up
          </Button>
            </NavLink>
        </form>

        {/* Login Link */}
        <NavLink to='/login' className="mt-6 block text-base text-gray-600">
          Already have an account?{" "}
          <span className="font-semibold text-brand-primary hover:text-brand-secondary transition-colors duration-200">Login</span>
        </NavLink>
      </div>
    </div>
  )
}

export default Register