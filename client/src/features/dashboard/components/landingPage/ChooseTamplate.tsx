
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

function ChooseTamplate() {
  type themestypes = {
    image: string;
    title: string;
    description: string;
  };

  const themesData: themestypes[] = [
    {
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Corporate Elegance",
      description:
        "A professional and sleek design perfect for business and corporate landing pages.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1497032628192-86f99acc62fd?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Creative Showcase",
      description:
        "Ideal for portfolios and creative agencies, highlighting visual content beautifully.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1488998472983-ea720b24962c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Modern Minimalist",
      description:
        "Clean lines and ample white space for a contemporary and focused user experience.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1487528278747-ba91ed08929e?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Vibrant E-commerce",
      description:
        "Engaging and dynamic, designed to boost conversions for online stores.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Tech Startup",
      description:
        "Bold and innovative, perfect for showcasing new technologies and software.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Educational Hub",
      description:
        "Structured and informative, great for online courses, schools, and educational platforms.",
    },
  ];

  return (
  <div className="">
      <div className="max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-brand-primary mt-4">
            Choose a Template
          </h1>
          <p className="text-gray-700 text-lg">
            You can change the template anytime later.
          </p>
        </div>

        {/* Themes Section */}
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
     
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {themesData.map((theme, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={theme.image}
                    alt={theme.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h2 className="text-xl font-semibold mb-2 text-brand-primary">
                    {theme.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {theme.description}
                  </p>
                  <NavLink to="/dashboard/landing/create" className="mt-auto">
                    <Button 
                      className="w-full font-medium text-brand-primary hover:bg-brand-secondary hover:text-brand-accent transition-all bg-brand-highlight"
                    >
                      Choose This Theme
                    </Button>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseTamplate;
