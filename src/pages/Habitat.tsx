import Navigation from "@/components/Navigation";
import { MapPin, TreePine, Droplets, Thermometer } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Habitat = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">
            Okapi Natural Habitat
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Exploring the unique rainforest environment where the Okapi thrives
            in the heart of Africa
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <img
            src="https://media.istockphoto.com/id/185408925/es/foto/okapi.jpg?s=1024x1024&w=is&k=20&c=QmiMbhdgYnwTj1PpQxwMFuzZEocfxRB04-yWhXkxR1U="
            alt="Congo rainforest habitat"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Geographic Location */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">
            Geographic Distribution
          </h2>
          <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Primary Range
                </h3>
                <p className="text-gray-700 mb-4">
                  The Okapi is endemic to the Democratic Republic of Congo (DRC)
                  in Central Africa. They are found exclusively in the dense
                  tropical rainforests of the northeastern DRC, particularly in
                  the Ituri Forest.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>
                    <strong>Primary Location:</strong> Ituri Rainforest, DRC
                  </li>
                  <li>
                    <strong>Protected Areas:</strong> Okapi Wildlife Reserve
                  </li>
                  <li>
                    <strong>Elevation Range:</strong> 500-1,000 meters above sea
                    level
                  </li>
                  <li>
                    <strong>Total Range:</strong> Approximately 63,000 square
                    kilometers
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-800 mb-4">
                  Conservation Status
                </h3>
                <p className="text-gray-700 mb-4">
                  The Okapi's habitat is under constant threat from
                  deforestation, mining, and civil unrest. The Okapi Wildlife
                  Reserve, established in 1996, protects about one-fifth of the
                  Ituri Forest.
                </p>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <p className="text-red-800 font-medium">
                    <strong>Endangered Status:</strong> The Okapi is classified
                    as Endangered by the IUCN, with an estimated population of
                    only 10,000-20,000 individuals remaining in the wild.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Habitat Requirements */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-900">
                <TreePine className="w-6 h-6" />
                <span>Forest Type</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Dense tropical rainforest with thick canopy cover. Prefers
                primary forest with minimal human disturbance and abundant
                understory vegetation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-900">
                <Droplets className="w-6 h-6" />
                <span>Climate</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                High humidity (80-90%) with consistent rainfall throughout the
                year. Annual precipitation ranges from 1,500-2,000mm.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-900">
                <Thermometer className="w-6 h-6" />
                <span>Temperature</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Stable tropical temperatures averaging 23-25°C (73-77°F)
                year-round, with minimal seasonal variation due to equatorial
                location.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Living Arrangements */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">
            Where Okapis Make Their Home
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">
                Ground-Dwelling Nature
              </h3>
              <p className="text-gray-700 mb-4">
                Unlike their giraffe relatives, Okapis are terrestrial animals
                that live exclusively on the forest floor. They do not build
                permanent nests or dens, instead relying on the dense forest
                vegetation for shelter.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>
                    <strong>Resting Areas:</strong> Create temporary beds in
                    dense thickets and under large trees
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>
                    <strong>Shelter:</strong> Use natural forest cover including
                    fallen logs and dense vegetation
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>
                    <strong>Territory:</strong> Maintain home ranges of 2-5
                    square kilometers
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">
                Habitat Features
              </h3>
              <p className="text-gray-700 mb-4">
                Okapis require specific forest characteristics to thrive,
                including access to water sources, mineral-rich soil, and
                diverse plant species for their diet.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>
                    <strong>Water Sources:</strong> Rivers, streams, and natural
                    springs for drinking
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>
                    <strong>Salt Licks:</strong> Natural mineral deposits
                    essential for health
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>
                    <strong>Plant Diversity:</strong> Over 100 plant species in
                    their diet require rich biodiversity
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Habitat;
