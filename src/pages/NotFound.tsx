import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display mb-6">
          <span className="gradient-text">404</span>
        </h1>        
        <p className="mb-4 text-xl text-gray-600">Oups ! Cette page n'existe pas</p>
        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          Retour à la page d'accueil
        </a>
      </div>
    </div>
  );
};

export default NotFound;
