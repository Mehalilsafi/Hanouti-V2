import { NavLink } from 'react-router-dom';
import { 
  ShoppingBag, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin,
  Github
} from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { name: 'Features', path: '/features' },
      { name: 'Pricing', path: '/pricing' },
      { name: 'Templates', path: '/templates' },
      { name: 'Integrations', path: '/integrations' },
      { name: 'API Documentation', path: '/docs' },
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Careers', path: '/careers' },
      { name: 'Press', path: '/press' },
      { name: 'Blog', path: '/blog' },
      { name: 'Contact', path: '/contact' },
    ],
    support: [
      { name: 'Help Center', path: '/help' },
      { name: 'Community', path: '/community' },
      { name: 'Tutorials', path: '/tutorials' },
      { name: 'System Status', path: '/status' },
      { name: 'Report Bug', path: '/bug-report' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' },
      { name: 'GDPR', path: '/gdpr' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' },
  ];

  return (
    <footer className="bg-brand-primary dark:bg-brand-secondary text-brand-highlight px-4 sm:px-6 lg:px-8">
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
       
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
             
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl shadow-sm">
              
                <ShoppingBag className="w-6 h-6 text-brand-highlight" />
              </div>
          
              <span className="text-2xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                hanouti
              </span>
            </div>
          
            <p className="text-brand-accent mb-6 max-w-md">
              Build your dream e-commerce store with our powerful platform. 
              Join thousands of merchants who trust hanouti to grow their business online.
            </p>
            
          
            <div className="space-y-3">
          
              <div className="flex items-center space-x-3 text-brand-accent">
                <Mail className="w-5 h-5 text-brand-highlight" />
                <span>hello@hanouti.com</span>
              </div>
              <div className="flex items-center space-x-3 text-brand-accent">
                <Phone className="w-5 h-5 text-brand-highlight" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-brand-accent">
                <MapPin className="w-5 h-5 text-brand-highlight" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

        
          <div>
         
            <h3 className="text-lg font-semibold mb-4 text-brand-highlight">Platform</h3>
            <ul className="space-y-2">
              {footerLinks.platform.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                   
                    className="text-brand-accent hover:text-brand-highlight transition-colors duration-200"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
        
            <h3 className="text-lg font-semibold mb-4 text-brand-highlight">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                   
                    className="text-brand-accent hover:text-brand-highlight transition-colors duration-200"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

     
          <div>
          
            <h3 className="text-lg font-semibold mb-4 text-brand-highlight">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                
                    className="text-brand-accent hover:text-brand-highlight transition-colors duration-200"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

    
          <div>
           
            <h3 className="text-lg font-semibold mb-4 text-brand-highlight">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                  
                    className="text-brand-accent hover:text-brand-highlight transition-colors duration-200"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

    
    
        <div className="mt-12 pt-8 border-t border-brand-accent dark:border-brand-highlight">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
          
              <h3 className="text-lg font-semibold text-brand-highlight mb-2">
                Stay updated with hanouti
              </h3>
           
              <p className="text-brand-accent">
                Get the latest updates, tips, and exclusive offers delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
              
                className="px-4 py-2 bg-brand-secondary border border-brand-accent rounded-lg text-brand-highlight placeholder-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-highlight focus:border-transparent
                           dark:bg-brand-primary dark:border-brand-highlight dark:text-brand-highlight dark:placeholder-brand-highlight dark:focus:ring-brand-primary"
              />
              <button 
              
                className="px-6 py-2 bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary hover:to-brand-secondary text-brand-highlight rounded-lg transition-all duration-200 shadow-sm"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

   
      <div className="bg-brand-primary border-t border-brand-accent dark:bg-brand-secondary dark:border-brand-highlight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
      
            <div className="text-brand-accent text-sm mb-4 md:mb-0">
              © {currentYear} hanouti. All rights reserved. Built with ❤️ for entrepreneurs.
            </div>
            
       
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                     
                    className="text-brand-accent hover:text-brand-highlight transition-colors duration-200 dark:text-brand-highlight dark:hover:text-brand-accent"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;