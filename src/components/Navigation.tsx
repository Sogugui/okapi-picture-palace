
import { Link, useLocation } from "react-router-dom";
import { Image, Upload, Home, Utensils, Heart } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-amber-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold flex items-center space-x-2">
            <span>🦌 Okapi World</span>
          </Link>
          
          <div className="flex space-x-6">
            <Link 
              to="/" 
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                isActive('/') ? 'bg-amber-800' : 'hover:bg-amber-800'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            
            <Link 
              to="/gallery" 
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                isActive('/gallery') ? 'bg-amber-800' : 'hover:bg-amber-800'
              }`}
            >
              <Image className="w-4 h-4" />
              <span>Gallery</span>
            </Link>
            
            <Link 
              to="/diet" 
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                isActive('/diet') ? 'bg-amber-800' : 'hover:bg-amber-800'
              }`}
            >
              <Utensils className="w-4 h-4" />
              <span>Diet</span>
            </Link>
            
            <Link 
              to="/reproduction" 
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                isActive('/reproduction') ? 'bg-amber-800' : 'hover:bg-amber-800'
              }`}
            >
              <Heart className="w-4 h-4" />
              <span>Reproduction</span>
            </Link>
            
            <Link 
              to="/upload" 
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                isActive('/upload') ? 'bg-amber-800' : 'hover:bg-amber-800'
              }`}
            >
              <Upload className="w-4 h-4" />
              <span>Share Photos</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
