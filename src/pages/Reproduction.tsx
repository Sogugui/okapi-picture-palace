import Navigation from "@/components/Navigation";
import { Heart, Baby, Calendar, Clock } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Reproduction = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-amber-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">
            Okapi Mating & Reproduction
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Understanding the reproductive cycle and family life of the Forest
            Giraffe
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <img
            src="https://media.istockphoto.com/id/483960182/es/foto/okapi.jpg?s=1024x1024&w=is&k=20&c=W51vyNUq9uj2hdxZvAeVgQ0j7yBA7mKwXoNIh-np1H0="
            alt="Young Okapi calf with mother"
            className="w-full h-98 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Key Facts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-pink-100 border-pink-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-pink-800">
                <Calendar className="w-6 h-6" />
                <span>Gestation</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-pink-900">14-15 months</p>
              <p className="text-sm text-pink-700">
                Average pregnancy duration
              </p>
            </CardContent>
          </Card>

          <Card className="bg-blue-100 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-blue-800">
                <Baby className="w-6 h-6" />
                <span>Offspring</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-blue-900">1 calf</p>
              <p className="text-sm text-blue-700">Typically single births</p>
            </CardContent>
          </Card>

          <Card className="bg-green-100 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-green-800">
                <Clock className="w-6 h-6" />
                <span>Dependency</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-900">6-10 months</p>
              <p className="text-sm text-green-700">Time with mother</p>
            </CardContent>
          </Card>

          <Card className="bg-amber-100 border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-800">
                <Heart className="w-6 h-6" />
                <span>Maturity</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-amber-900">4-5 years</p>
              <p className="text-sm text-amber-700">Sexual maturity age</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <div className="space-y-12">
          {/* Mating Behavior */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">
              Mating Behavior
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-amber-800 mb-4">
                  Breeding Season
                </h3>
                <p className="text-gray-700 mb-4">
                  Okapis do not have a specific breeding season and can mate
                  year-round. However, births tend to peak during the dry season
                  (May to October) when food is more abundant.
                </p>
                <h3 className="text-xl font-semibold text-amber-800 mb-4">
                  Courtship
                </h3>
                <p className="text-gray-700">
                  Males use scent marking and vocalizations to attract females.
                  The courtship process involves circling, neck intertwining,
                  and gentle nuzzling behaviors.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-800 mb-4">
                  Territory & Competition
                </h3>
                <p className="text-gray-700 mb-4">
                  Male Okapis are generally solitary and territorial. They mark
                  their territory with scent glands and may compete for access
                  to females during mating periods.
                </p>
                <h3 className="text-xl font-semibold text-amber-800 mb-4">
                  Pair Bonding
                </h3>
                <p className="text-gray-700">
                  Okapis do not form long-term pair bonds. After mating, males
                  and females separate, with females raising the young
                  independently.
                </p>
              </div>
            </div>
          </div>

          {/* Pregnancy and Birth */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">
              Pregnancy & Birth
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-purple-800 mb-3">
                  Gestational Period
                </h3>
                <p className="text-gray-700 text-lg">
                  <strong>
                    The Okapi has one of the longest gestation periods among
                    ungulates, lasting 14-15 months.
                  </strong>
                  This extended pregnancy allows for the development of a
                  well-developed calf that can stand and walk within minutes of
                  birth.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-800 mb-3">
                  Birth Process
                </h3>
                <p className="text-gray-700">
                  Female Okapis typically give birth to a single calf, weighing
                  between 35-60 pounds (16-27 kg). Twin births are extremely
                  rare. The mother seeks a secluded area in dense forest for
                  birthing.
                </p>
              </div>
            </div>
          </div>

          {/* Calf Development */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">
              Calf Development & Care
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-amber-800 mb-4">
                  Early Life
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Birth weight:</strong> 35-60 lbs
                  </li>
                  <li>
                    <strong>Standing:</strong> Within 30 minutes
                  </li>
                  <li>
                    <strong>Nursing:</strong> Begins immediately
                  </li>
                  <li>
                    <strong>First steps:</strong> Within first hour
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-800 mb-4">
                  Growth Stages
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>0-2 months:</strong> Hidden in dense vegetation
                  </li>
                  <li>
                    <strong>2-6 months:</strong> Begins following mother
                  </li>
                  <li>
                    <strong>6-10 months:</strong> Gradual weaning process
                  </li>
                  <li>
                    <strong>10+ months:</strong> Increasing independence
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-800 mb-4">
                  Maternal Care
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Nursing:</strong> Up to 6 months
                  </li>
                  <li>
                    <strong>Protection:</strong> Constant vigilance
                  </li>
                  <li>
                    <strong>Teaching:</strong> Foraging techniques
                  </li>
                  <li>
                    <strong>Territory:</strong> Shared for 6-10 months
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Questions Answered */}
          <div className="bg-amber-50 rounded-lg p-8 border-2 border-amber-200">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">
              Key Questions Answered
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-amber-800 mb-3">
                  What is the gestational period of the Okapi?
                </h3>
                <p className="text-gray-700 text-lg">
                  The Okapi has a gestation period of{" "}
                  <strong>14-15 months</strong>, which is among the longest of
                  any ungulate species. This extended pregnancy ensures the calf
                  is well-developed at birth.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-amber-800 mb-3">
                  How many offspring does it typically have at a time?
                </h3>
                <p className="text-gray-700 text-lg">
                  Okapis typically give birth to{" "}
                  <strong>one calf at a time</strong>. Twin births are extremely
                  rare in this species, with single births being the norm.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-amber-800 mb-3">
                  How long do the offspring live with the parent?
                </h3>
                <p className="text-gray-700 text-lg">
                  Okapi calves remain with their mothers for{" "}
                  <strong>6-10 months</strong>. During this time, they nurse,
                  learn foraging behaviors, and gradually become independent
                  before dispersing to establish their own territories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reproduction;
