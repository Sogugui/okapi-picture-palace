
import Navigation from "@/components/Navigation";
import { TreePine, BookOpen, Dna } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Classification = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Okapi Scientific Classification</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Understanding the scientific taxonomy and evolutionary relationships of the Okapi
          </p>
        </div>

        {/* Scientific Name */}
        <div className="bg-amber-100 rounded-lg p-8 text-center mb-12 border-2 border-amber-300">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">Scientific Name</h2>
          <p className="text-3xl font-bold italic text-amber-800 mb-2">Okapia johnstoni</p>
          <p className="text-lg text-amber-700">
            Named after Sir Harry Johnston, the British explorer who first brought the Okapi to Western scientific attention in 1901
          </p>
        </div>

        {/* Taxonomic Classification */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Complete Taxonomic Classification</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid divide-y">
              <div className="p-6 flex justify-between items-center">
                <span className="text-lg font-semibold text-amber-900">Kingdom</span>
                <span className="text-lg text-gray-700">Animalia</span>
              </div>
              <div className="p-6 flex justify-between items-center bg-gray-50">
                <span className="text-lg font-semibold text-amber-900">Phylum</span>
                <span className="text-lg text-gray-700">Chordata</span>
              </div>
              <div className="p-6 flex justify-between items-center">
                <span className="text-lg font-semibold text-amber-900">Class</span>
                <span className="text-lg text-gray-700">Mammalia</span>
              </div>
              <div className="p-6 flex justify-between items-center bg-gray-50">
                <span className="text-lg font-semibold text-amber-900">Order</span>
                <span className="text-lg text-gray-700">Artiodactyla (Even-toed ungulates)</span>
              </div>
              <div className="p-6 flex justify-between items-center">
                <span className="text-lg font-semibold text-amber-900">Family</span>
                <span className="text-lg text-gray-700">Giraffidae</span>
              </div>
              <div className="p-6 flex justify-between items-center bg-gray-50">
                <span className="text-lg font-semibold text-amber-900">Genus</span>
                <span className="text-lg text-gray-700 italic">Okapia</span>
              </div>
              <div className="p-6 flex justify-between items-center">
                <span className="text-lg font-semibold text-amber-900">Species</span>
                <span className="text-lg text-gray-700 italic">O. johnstoni</span>
              </div>
            </div>
          </div>
        </div>

        {/* Species Information */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-900">
                <Dna className="w-6 h-6" />
                <span>Species Status</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">
                The Okapi is a <strong>monotypic species</strong>, meaning it is the only species in its genus.
              </p>
              <p className="text-gray-700">
                <strong>No recognized subspecies</strong> exist, though some genetic variation has been observed across different populations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-900">
                <TreePine className="w-6 h-6" />
                <span>Family Relations</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">
                Belongs to family <strong>Giraffidae</strong>, which includes only two living species:
              </p>
              <ul className="text-gray-700 space-y-1">
                <li>• Okapi (<em>Okapia johnstoni</em>)</li>
                <li>• Giraffe (<em>Giraffa</em> species)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-900">
                <BookOpen className="w-6 h-6" />
                <span>Discovery</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">
                <strong>First described:</strong> 1901 by Sir Harry Johnston
              </p>
              <p className="text-gray-700">
                <strong>Local knowledge:</strong> Known to indigenous Pygmy peoples for centuries before Western discovery
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Evolutionary Relationships */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">Evolutionary Relationships</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Closest Living Relative</h3>
              <p className="text-gray-700 mb-4">
                The Okapi's closest living relative is the Giraffe. These two species diverged from a common ancestor 
                approximately 11-12 million years ago during the Miocene epoch.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Shared Characteristics with Giraffes:</h4>
                <ul className="text-blue-800 space-y-1">
                  <li>• Long, prehensile tongues</li>
                  <li>• Similar dental structure</li>
                  <li>• Male ossicones (skin-covered horns)</li>
                  <li>• Specialized cardiovascular system</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Unique Adaptations</h3>
              <p className="text-gray-700 mb-4">
                While related to giraffes, Okapis evolved distinct adaptations for forest life, 
                making them uniquely suited to their rainforest environment.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Forest Adaptations:</h4>
                <ul className="text-green-800 space-y-1">
                  <li>• Shorter neck for navigating dense forest</li>
                  <li>• Striped legs for camouflage</li>
                  <li>• Enhanced hearing and smell</li>
                  <li>• Compact body structure</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classification;
