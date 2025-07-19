 import React from 'react'

 import { Outlet } from 'react-router-dom'
 import Header from '../../../shared/components/layout/header'
 import Footer from '../../../shared/components/layout/Footer'
 
 function AuthLayout() {
   return (
     <div className='min-h-screen  '>
     <Header/>
     <main className='min-h-svh'>
        <Outlet/>
     </main>
     <Footer/>

     </div>
   )
 }
 
 export default AuthLayout