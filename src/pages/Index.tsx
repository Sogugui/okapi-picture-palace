import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Image, Upload } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      <Navigation />

      {/* Hero Section */}
      <div
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1417963402/es/foto/okapi-okapia-johnstoni-jirafa-marr%C3%B3n-rara-del-bosque-en-el-h%C3%A1bitat-del-bosque-verde-oscuro.jpg?s=1024x1024&w=is&k=20&c=PW9oSBzEqnJ0G6Xi7Qfc-AIj_L1H69s5jtHFJYk43A8=')",
          backgroundPosition: "top",
        }}
        className="relative h-96 bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Okapi World</h1>
            <p className="text-xl mb-6">
              Discover the Forest Giraffe of the Congo
            </p>
            <Link
              to="/gallery"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Explore Gallery
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-bold text-amber-900 mb-6">
              About the Okapi
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              The Okapi, also known as the "Forest Giraffe," is one of Africa's
              most mysterious and beautiful animals. Native to the dense
              rainforests of the Democratic Republic of Congo, this unique
              creature remained unknown to Western science until 1901.
            </p>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              With its chocolate-brown coat, distinctive white striped legs, and
              long blue tongue, the Okapi is truly one of nature's most
              remarkable creations. Despite being related to giraffes, they are
              much shorter and perfectly adapted to life in the forest canopy.
            </p>
            <div className="bg-amber-100 p-6 rounded-lg">
              <h3 className="font-semibold text-amber-900 mb-2">Our Mission</h3>
              <p className="text-amber-800">
                This website celebrates the beauty and uniqueness of the Okapi
                through stunning photography and educational content. We invite
                nature lovers and photographers to share their own Okapi
                encounters and help us build the most comprehensive visual
                collection of these magnificent animals.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <img
              src="https://media.istockphoto.com/id/1385381057/es/foto/okapi-en-un-potrero-forestal.jpg?s=1024x1024&w=is&k=20&c=Tv-2O5KdyzBVWVYipUz5_4NpgT-05HdmKgXA4ItSdRE="
              alt="Beautiful Okapi in natural habitat"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-8">
            Explore & Contribute
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/gallery" className="group">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border">
                <Image className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-amber-900 mb-3">
                  Photo Gallery
                </h3>
                <p className="text-gray-600">
                  Browse our curated collection of stunning Okapi photographs,
                  each with detailed information about these amazing creatures.
                </p>
              </div>
            </Link>

            <Link to="/upload" className="group">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border">
                <Upload className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-amber-900 mb-3">
                  Share Your Photos
                </h3>
                <p className="text-gray-600">
                  Have amazing Okapi photos? Share them with our community and
                  help us celebrate these incredible animals together.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>
            &copy; 2024 Okapi World. Dedicated to celebrating and protecting the
            Forest Giraffe.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
