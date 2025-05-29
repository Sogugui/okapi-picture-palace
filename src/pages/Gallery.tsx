import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Upload } from "lucide-react";

const Gallery = () => {
  const photos = [
    {
      id: 1,
      src: "https://media.istockphoto.com/id/115021790/es/foto/okapis.jpg?s=1024x1024&w=is&k=20&c=AHZkgPI2q57186wF6VVrW9f2gi5Mdu7E6mxnbLjQkOo=",
      title: "Okapi Family in Forest",
      description: "A peaceful moment captured in the dense Congo rainforest",
    },
    {
      id: 2,
      src: "https://media.istockphoto.com/id/1446178751/es/foto/plano-vertical-del-okapi-aliment%C3%A1ndose-de-las-hojas-de-los-%C3%A1rboles-okapia-johnstoni.jpg?s=1024x1024&w=is&k=20&c=rqdBWkjpNv9Le_a5-QZu0cAEsWDxYM-rlALkeV1ORjk=",
      title: "Grazing Okapi",
      description: "An adult Okapi grazing in its natural habitat",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1659565902535-7e3122a790c1?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Young Okapi Calf",
      description: "A young Okapi exploring the forest floor",
    },
    {
      id: 4,
      src: "https://media.istockphoto.com/id/115862946/es/foto/okapi-okapia-johnstoni.jpg?s=1024x1024&w=is&k=20&c=NWRcpKqw7VmgeS7Lj5tXNRGcW4RfbebmqUZf-9pcAIc=",
      title: "Okapi Portrait",
      description: "Close-up view showing the distinctive markings",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">
            Okapi Photo Gallery
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our collection of beautiful Okapi photographs. Click on any
            image to learn more about these magnificent forest dwellers.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {photos.map((photo) => (
            <Link
              key={photo.id}
              to={`/photo/${photo.id}`}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-2">
                  {photo.title}
                </h3>
                <p className="text-gray-600">{photo.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Upload Call to Action */}
        <div className="bg-amber-100 rounded-lg p-8 text-center border-2 border-dashed border-amber-300">
          <Upload className="w-16 h-16 text-amber-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-amber-900 mb-4">
            Share Your Okapi Photos
          </h2>
          <p className="text-lg text-amber-800 mb-6 max-w-2xl mx-auto">
            Have you captured amazing photos of Okapis in the wild or in
            conservation centers? We'd love to feature them in our gallery!
            Share your images and help us celebrate these incredible animals.
          </p>
          <Link
            to="/upload"
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-flex items-center space-x-2"
          >
            <Upload className="w-5 h-5" />
            <span>Upload Your Photos</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
