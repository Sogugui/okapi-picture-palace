import Navigation from "@/components/Navigation";
import { Moon, Shield, Search, Users } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Behavior = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">
            Okapi Behavior & Lifestyle
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Understanding the daily activities, social patterns, and survival
            strategies of the Forest Giraffe
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <img
            src="https://media.istockphoto.com/id/172968683/es/foto/okapi.jpg?s=1024x1024&w=is&k=20&c=zvzUFsS5YZ5XFqSubYMVUqgC3ll3TvtyJtKQcNNZ8BE="
            alt="Okapi in natural behavior"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Daily Activity Pattern */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-900">
                <Moon className="w-6 h-6" />
                <span>Activity Pattern</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>Crepuscular:</strong> Most active during dawn and dusk
                hours
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-900">
                <Users className="w-6 h-6" />
                <span>Social Structure</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>Solitary:</strong> Adults live alone except during
                mating and mother-calf periods
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-900">
                <Search className="w-6 h-6" />
                <span>Territory Size</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>2-5 km²:</strong> Individual home ranges with some
                overlap
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-900">
                <Shield className="w-6 h-6" />
                <span>Lifespan</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>15-20 years:</strong> In wild; up to 30 years in
                captivity
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Foraging Behavior */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">
            Foraging & Feeding Behavior
          </h2>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-amber-800 mb-4">
                  Feeding Strategy
                </h3>
                <p className="text-gray-700 mb-4">
                  Okapis are selective browsers, spending 6-8 hours daily
                  searching for the most nutritious young leaves, shoots, and
                  fruits. They use their exceptional sense of smell to locate
                  preferred food sources.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>
                      <strong>Peak feeding times:</strong> Early morning (5-8
                      AM) and late afternoon (4-7 PM)
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>
                      <strong>Food selection:</strong> Only the youngest, most
                      tender leaves and shoots
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>
                      <strong>Water intake:</strong> Obtain most water from
                      vegetation; drink at streams when available
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-800 mb-4">
                  Foraging Techniques
                </h3>
                <p className="text-gray-700 mb-4">
                  Their long, flexible tongue and mobile lips allow Okapis to be
                  extremely selective feeders, carefully choosing only the best
                  plant material while avoiding thorns and toxic plants.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>
                      <strong>Tongue usage:</strong> Strip leaves from branches
                      with precision
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>
                      <strong>Path following:</strong> Create and follow regular
                      feeding routes through territory
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>
                      <strong>Mineral seeking:</strong> Regularly visit clay
                      licks for essential minerals
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Defense Mechanisms */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">
            Protection & Defense Strategies
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-amber-900">
                  Camouflage & Stealth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-3">
                  The Okapi's primary defense is remaining undetected through
                  excellent camouflage and silent movement.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>
                    <strong>Coat coloration:</strong> Blends perfectly with
                    forest shadows
                  </li>
                  <li>
                    <strong>Striped legs:</strong> Break up body outline in
                    dappled light
                  </li>
                  <li>
                    <strong>Silent walking:</strong> Soft feet pads for quiet
                    movement
                  </li>
                  <li>
                    <strong>Freezing behavior:</strong> Remain motionless when
                    threatened
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-amber-900">Active Defense</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-3">
                  When camouflage fails, Okapis have several active defense
                  mechanisms to escape predators.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>
                    <strong>Speed:</strong> Can reach 37 mph (60 km/h) in short
                    bursts
                  </li>
                  <li>
                    <strong>Kicking:</strong> Powerful hind legs deliver
                    devastating kicks
                  </li>
                  <li>
                    <strong>Alert calls:</strong> Low-frequency calls to warn
                    other Okapis
                  </li>
                  <li>
                    <strong>Dense forest navigation:</strong> Use thick
                    vegetation to escape
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sleep and Rest Patterns */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">
            Sleep & Rest Behavior
          </h2>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-amber-800 mb-4">
                  Resting Patterns
                </h3>
                <p className="text-gray-700 mb-4">
                  Okapis rest during the hottest parts of the day and throughout
                  the night, choosing concealed locations that provide safety
                  and comfort.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>
                      <strong>Sleep duration:</strong> 4-6 hours total, broken
                      into short periods
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>
                      <strong>Resting positions:</strong> Usually lying down
                      with legs folded beneath body
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>
                      <strong>Location preference:</strong> Dense thickets,
                      under large trees, or near fallen logs
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-800 mb-4">
                  Vigilance Behavior
                </h3>
                <p className="text-gray-700 mb-4">
                  Even while resting, Okapis maintain awareness of their
                  surroundings, with ears constantly moving to monitor for
                  potential threats.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>
                      <strong>Light sleep:</strong> Rarely enter deep sleep
                      states
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>
                      <strong>Quick response:</strong> Can spring to action
                      within seconds
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>
                      <strong>Ear movement:</strong> Continuous monitoring of
                      surroundings
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Communication and Social Behavior */}
        <div className="bg-amber-100 rounded-lg p-8 border-2 border-amber-300">
          <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center">
            Communication & Social Interactions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">
                Communication Methods
              </h3>
              <ul className="space-y-3 text-amber-900">
                <li className="flex items-start space-x-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>
                    <strong>Infrasonic calls:</strong> Low-frequency sounds for
                    long-distance communication
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>
                    <strong>Scent marking:</strong> Chemical signals left
                    through urine and glandular secretions
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>
                    <strong>Visual signals:</strong> Body postures and ear
                    positions convey emotional states
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>
                    <strong>Chuff sounds:</strong> Short vocalizations used
                    between mothers and calves
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">
                Solitary Nature
              </h3>
              <ul className="space-y-3 text-amber-900">
                <li className="flex items-start space-x-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>
                    <strong>Territorial behavior:</strong> Adults maintain
                    separate home ranges
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>
                    <strong>Overlap tolerance:</strong> Some territory overlap
                    occurs without conflict
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>
                    <strong>Mating interactions:</strong> Brief social contact
                    only during breeding season
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>
                    <strong>Mother-calf bond:</strong> Strong relationship
                    lasting 6-12 months
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

export default Behavior;
