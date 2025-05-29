import Navigation from "@/components/Navigation";
import { Leaf, Clock, Scale, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Diet = () => {
  const foodItems = [
    {
      name: "Leaves",
      description:
        "Primary food source, especially from understory trees and shrubs",
      amount: "Up to 60% of diet",
      url: "https://en.wikipedia.org/wiki/Leaf",
    },
    {
      name: "Fruits",
      description: "Seasonal fruits from various rainforest trees",
      amount: "20-25% of diet",
      url: "https://en.wikipedia.org/wiki/Fruit",
    },
    {
      name: "Bark",
      description: "Tree bark, particularly from young trees",
      amount: "10-15% of diet",
      url: "https://en.wikipedia.org/wiki/Bark_(botany)",
    },
    {
      name: "Clay and Minerals",
      description: "Essential minerals from clay deposits and salt licks",
      amount: "Small amounts regularly",
      url: "https://en.wikipedia.org/wiki/Geophagia",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">
            Okapi Dietary Habits
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Understanding what the "Forest Giraffe" eats and how it forages in
            the Congo rainforest
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <img
            src="https://media.istockphoto.com/id/115862964/es/foto/okapi-okapia-johnstoni.jpg?s=1024x1024&w=is&k=20&c=epX3hSgn256FdGZuycGYagTdW54T63jAhBKw1cFwQ90="
            alt="Okapi feeding in natural habitat"
            className="w-full h-98 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Diet Overview */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-900">
                <Leaf className="w-6 h-6" />
                <span>Herbivorous</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Okapis are strict herbivores, feeding exclusively on plant
                matter found in their rainforest habitat.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-900">
                <Clock className="w-6 h-6" />
                <span>Feeding Schedule</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Active feeders during dawn and dusk hours, spending 6-8 hours
                daily foraging for food.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-900">
                <Scale className="w-6 h-6" />
                <span>Daily Intake</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                An adult Okapi consumes approximately 40-60 pounds (18-27 kg) of
                vegetation per day.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Food Items */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">
            Primary Food Sources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {foodItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-amber-900">{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">{item.description}</p>
                  <p className="text-sm font-semibold text-green-700 mb-3">
                    Dietary composition: {item.amount}
                  </p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span>Learn more</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Feeding Behavior */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">
            Feeding Behavior & Adaptations
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">
                Physical Adaptations
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>
                    <strong>Long Blue Tongue:</strong> Can extend up to 18
                    inches to reach high leaves and clean their eyes and ears
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>
                    <strong>Flexible Lips:</strong> Prehensile lips help grasp
                    and strip leaves from branches
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>
                    <strong>Height Advantage:</strong> Can reach vegetation up
                    to 6 feet high while standing
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">
                Foraging Patterns
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>
                    <strong>Selective Feeding:</strong> Choose only the most
                    nutritious young leaves and shoots
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>
                    <strong>Seasonal Variation:</strong> Diet changes based on
                    fruit availability throughout the year
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>
                    <strong>Territory Range:</strong> Cover 2-5 square
                    kilometers in search of preferred vegetation
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

export default Diet;
