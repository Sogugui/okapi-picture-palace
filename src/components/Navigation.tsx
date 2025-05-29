import { Link, useLocation } from "react-router-dom";
import {
  Image,
  Upload,
  Home,
  Utensils,
  Heart,
  MapPin,
  Microscope,
  Activity,
  TreePine,
  SearchCheck,
} from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-amber-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-xl font-bold flex items-center space-x-2"
          >
            <span>🦌 Okapi World</span>
          </Link>

          <div className="flex space-x-4">
            <Link
              to="/"
              className={`flex items-center space-x-1 px-2 py-2 rounded-md transition-colors text-sm ${
                isActive("/") ? "bg-amber-800" : "hover:bg-amber-800"
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>

            <Link
              to="/gallery"
              className={`flex items-center space-x-1 px-2 py-2 rounded-md transition-colors text-sm ${
                isActive("/gallery") ? "bg-amber-800" : "hover:bg-amber-800"
              }`}
            >
              <Image className="w-4 h-4" />
              <span>Gallery</span>
            </Link>

            <Link
              to="/habitat"
              className={`flex items-center space-x-1 px-2 py-2 rounded-md transition-colors text-sm ${
                isActive("/habitat") ? "bg-amber-800" : "hover:bg-amber-800"
              }`}
            >
              <TreePine className="w-4 h-4" />
              <span>Habitat</span>
            </Link>

            <Link
              to="/diet"
              className={`flex items-center space-x-1 px-2 py-2 rounded-md transition-colors text-sm ${
                isActive("/diet") ? "bg-amber-800" : "hover:bg-amber-800"
              }`}
            >
              <Utensils className="w-4 h-4" />
              <span>Diet</span>
            </Link>

            <Link
              to="/behavior"
              className={`flex items-center space-x-1 px-2 py-2 rounded-md transition-colors text-sm ${
                isActive("/behavior") ? "bg-amber-800" : "hover:bg-amber-800"
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>Behavior</span>
            </Link>

            <Link
              to="/reproduction"
              className={`flex items-center space-x-1 px-2 py-2 rounded-md transition-colors text-sm ${
                isActive("/reproduction")
                  ? "bg-amber-800"
                  : "hover:bg-amber-800"
              }`}
            >
              <Heart className="w-4 h-4" />
              <span>Reproduction</span>
            </Link>

            <Link
              to="/anatomy"
              className={`flex items-center space-x-1 px-2 py-2 rounded-md transition-colors text-sm ${
                isActive("/anatomy") ? "bg-amber-800" : "hover:bg-amber-800"
              }`}
            >
              <Microscope className="w-4 h-4" />
              <span>Anatomy</span>
            </Link>

            <Link
              to="/classification"
              className={`flex items-center space-x-1 px-2 py-2 rounded-md transition-colors text-sm ${
                isActive("/classification")
                  ? "bg-amber-800"
                  : "hover:bg-amber-800"
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>Classification</span>
            </Link>

            <Link
              to="/didyouknow"
              className={`flex items-center space-x-1 px-2 py-2 rounded-md transition-colors text-sm ${
                isActive("/didyouknow") ? "bg-amber-800" : "hover:bg-amber-800"
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>Curiosities</span>
            </Link>

            <Link
              to="/upload"
              className={`flex items-center space-x-1 px-2 py-2 rounded-md transition-colors text-sm ${
                isActive("/upload") ? "bg-amber-800" : "hover:bg-amber-800"
              }`}
            >
              <Upload className="w-4 h-4" />
              <span>Share</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
