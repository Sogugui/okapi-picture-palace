import Navigation from "@/components/Navigation";
import {
  MapPin,
  TreePine,
  Droplets,
  Thermometer,
  BabyIcon,
  Clock,
  Heart,
  Calendar,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const DidYouKnow = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">
            Did you know...?
          </h1>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <img
            src="https://media.istockphoto.com/id/860354492/es/foto/okapi-okapia-johnstoni.jpg?s=1024x1024&w=is&k=20&c=8Fh_oDoZotAeDMmQ8SDKidpKcjsa_4IhD-4t5Q1gZjE="
            alt="Congo rainforest habitat"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-pink-100 border-pink-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-pink-800">
                <Calendar className="w-6 h-6" />
                <span>Camuflage</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-pink-900">
                The Okapi's primary defense is remaining undetected through
                excellent camouflage and silent movement.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-blue-100 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-blue-800">
                <BabyIcon className="w-6 h-6" />
                <span>Stripped legs</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-blue-900">
                The most recognizable feature of the Okapi is its distinctive
                white horizontal stripes on the upper legs and rear, reminiscent
                of a zebra.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-green-100 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-green-800">
                <Clock className="w-6 h-6" />
                <span>Family Relations</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-900">
                The Okapi's closest living relative is the Giraffe. These two
                species diverged from a common ancestor approximately 11-12
                million years ago during the Miocene epoch.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-amber-100 border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-800">
                <Heart className="w-6 h-6" />
                <span>Foraging Patterns</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-amber-900">
                {" "}
                Okapis require specific forest characteristics to thrive,
                including access to water sources, mineral-rich soil, and
                diverse plant species for their diet. • Water Sources: Rivers,
                streams, and natural springs for drinking • Salt Licks: Natural
                mineral deposits essential for health • Plant Diversity: Over
                100 plant species in their diet require rich biodiversity
              </p>
              <p className="text-sm text-amber-700">Sexual maturity age</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DidYouKnow;
