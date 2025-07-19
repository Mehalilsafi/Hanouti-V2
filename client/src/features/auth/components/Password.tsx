import React from 'react'

import { NavLink } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from 'lucide-react'; 

function Password() {
  return (
     <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-brand-accent via-white to-brand-highlight font-sans">


      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-soft-lg border border-brand-accent/30 p-8 sm:p-10 lg:p-12 w-full max-w-md mx-auto text-center">

    
        <h1 className="font-extrabold text-4xl sm:text-5xl text-brand-primary mb-6">
          Forgot Password?
        </h1>

      
        <p className="text-gray-700 text-lg mb-8">
          Enter your email address below and we'll send you a link to reset your password.
        </p>

        <form className="flex flex-col gap-6 w-full">
       
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your email address"
              className="pl-10 h-12 text-lg border border-gray-300 focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary rounded-xl transition-all duration-200"
              required
            />
          </div>

     
          <Button
            type="submit"
            className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-xl shadow-soft hover:from-brand-secondary hover:to-brand-primary transition-all duration-300"
          >
            Send Reset Link
          </Button>
        </form>

      
        <NavLink to='/login' className="mt-6 block text-base text-gray-600">
          Remember your password?{" "}
          <span className="font-semibold text-brand-primary hover:text-brand-secondary transition-colors duration-200">Login here</span>
        </NavLink>
      </div>
    </div>

  )
}

export default Password