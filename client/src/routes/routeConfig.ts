 export const ROUTES={
     HOME: '/',
     ABOUT: '/about',
    PRICING:"/pricing",


    //auth routes -login-register
   LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
   // Protected routes - need to be logged in
  DASHBOARD: '/dashboard',
  ANALYTICS: '/dashboard/analytics',
  REPORTS: '/dashboard/reports',

   
  // Settings routes - need to be logged in
  PROFILE: '/settings/profile',
  ACCOUNT: '/settings/account',
  PREFERENCES: '/settings/preferences',

 };


 export const ROUTE_CONFIG = {
  public: [ROUTES.HOME, ROUTES.ABOUT, ROUTES.PRICING],
  auth: [ROUTES.LOGIN, ROUTES.REGISTER, ROUTES.FORGOT_PASSWORD],
  protected: [ROUTES.DASHBOARD, ROUTES.ANALYTICS, ROUTES.REPORTS, ROUTES.PROFILE, ROUTES.ACCOUNT, ROUTES.PREFERENCES],
};