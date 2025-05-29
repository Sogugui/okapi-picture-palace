import Navigation from "@/components/Navigation";
import { Ruler, Scale, Eye, Heart } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Anatomy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">
            Okapi Anatomy & Biology
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Exploring the unique physical characteristics and biological
            features of the Forest Giraffe
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <img
            src="https://media.istockphoto.com/id/464553883/es/foto/vista-posterior-de-un-okapi-volviendo-y-mooing.jpg?s=1024x1024&w=is&k=20&c=WrUujYx4zrbBFrJuiKkQw2lRPeZC4Sn8B3QA7K8jOiQ="
            alt="Okapi showing distinctive features"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Size and Physical Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-900">
                <Ruler className="w-6 h-6" />
                <span>Height</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-gray-800">1.5-2.0m</p>
              <p className="text-gray-600">At shoulder</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-900">
                <Ruler className="w-6 h-6" />
                <span>Length</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-gray-800">2.0-2.5m</p>
              <p className="text-gray-600">Body length</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-900">
                <Scale className="w-6 h-6" />
                <span>Weight</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-gray-800">200-350kg</p>
              <p className="text-gray-600">Adult weight</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-900">
                <Heart className="w-6 h-6" />
                <span>Lifespan</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-gray-800">20-30 years</p>
              <p className="text-gray-600">In captivity</p>
            </CardContent>
          </Card>
        </div>

        {/* Distinctive Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">
            Distinctive Physical Characteristics
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-amber-900">Striped Legs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-3">
                  The most recognizable feature of the Okapi is its distinctive
                  white horizontal stripes on the upper legs and rear,
                  reminiscent of a zebra.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>
                    <strong>Function:</strong> Camouflage in dappled forest
                    light
                  </li>
                  <li>
                    <strong>Pattern:</strong> Unique to each individual like
                    fingerprints
                  </li>
                  <li>
                    <strong>Inheritance:</strong> Pattern passed from parents to
                    offspring
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-amber-900">
                  Blue-Black Tongue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-3">
                  Okapis possess an extraordinarily long, prehensile tongue that
                  can extend up to 18 inches (45 cm).
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>
                    <strong>Color:</strong> Dark blue-black pigmentation
                  </li>
                  <li>
                    <strong>Function:</strong> Grasping leaves and cleaning
                    eyes/ears
                  </li>
                  <li>
                    <strong>Length:</strong> 35-45 cm when fully extended
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-amber-900">
                  Ossicones (Males Only)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-3">
                  Male Okapis have two short, skin-covered horns called
                  ossicones, similar to their giraffe relatives.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>
                    <strong>Size:</strong> 15 cm (6 inches) long
                  </li>
                  <li>
                    <strong>Appearance:</strong> Blunt and covered in skin and
                    hair
                  </li>
                  <li>
                    <strong>Sexual dimorphism:</strong> Only males possess
                    ossicones
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-amber-900">
                  Coat and Coloration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-3">
                  The Okapi's coat is a rich reddish-brown to chocolate brown,
                  providing excellent camouflage in the forest understory.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>
                    <strong>Base color:</strong> Chocolate to reddish-brown
                  </li>
                  <li>
                    <strong>Texture:</strong> Short, dense, and velvety
                  </li>
                  <li>
                    <strong>Seasonal changes:</strong> Slightly darker in wet
                    season
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sensory Adaptations */}
        <div className="bg-white rounded-lg p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">
            Sensory Adaptations
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                Vision
              </h3>
              <p className="text-gray-700 mb-3">
                Large, dark eyes positioned on the sides of the head provide
                excellent peripheral vision to detect predators in the dense
                forest.
              </p>
              <ul className="text-gray-700 space-y-1">
                <li>• Wide field of view (nearly 360°)</li>
                <li>• Adapted for low-light conditions</li>
                <li>• Enhanced motion detection</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">
                Hearing
              </h3>
              <p className="text-gray-700 mb-3">
                Large, flexible ears can move independently to pinpoint sounds
                from various directions, crucial for detecting predators and
                communicating with other Okapis.
              </p>
              <ul className="text-gray-700 space-y-1">
                <li>• Highly sensitive to infrasonic calls</li>
                <li>• Can detect sounds over long distances</li>
                <li>• Mobile ears for directional hearing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">
                Smell
              </h3>
              <p className="text-gray-700 mb-3">
                An excellent sense of smell helps Okapis locate food, identify
                other individuals, and detect potential threats in their
                environment.
              </p>
              <ul className="text-gray-700 space-y-1">
                <li>• Essential for foraging</li>
                <li>• Chemical communication</li>
                <li>• Predator detection</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Interesting Facts */}
        <div className="bg-amber-100 rounded-lg p-8 border-2 border-amber-300">
          <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center">
            Fascinating Biological Facts
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">
                Unique Adaptations
              </h3>
              <ul className="space-y-3 text-amber-900">
                <li className="flex items-start space-x-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>
                    Only mammal that can lick its own ears due to tongue length
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>
                    Scent glands on feet leave chemical trails for communication
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>
                    Can run up to 37 mph (60 km/h) when escaping predators
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>
                    Four-chambered stomach for efficient plant digestion
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">
                Remarkable Features
              </h3>
              <ul className="space-y-3 text-amber-900">
                <li className="flex items-start space-x-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>
                    Heart weighs up to 12 kg to pump blood efficiently
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Can rotate ears 180 degrees for optimal hearing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>
                    Dense bone structure makes them surprisingly heavy for their
                    size
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>
                    Oily skin secretions help repel insects and parasites
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

export default Anatomy;
