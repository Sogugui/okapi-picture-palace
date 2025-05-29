import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { ArrowLeft, Image } from "lucide-react";

const PhotoDetail = () => {
  const { id } = useParams();

  const photos = {
    "1": {
      src: "https://media.istockphoto.com/id/115021790/es/foto/okapis.jpg?s=1024x1024&w=is&k=20&c=AHZkgPI2q57186wF6VVrW9f2gi5Mdu7E6mxnbLjQkOo=",
      title: "Okapi Family in Forest",
      caption: "A peaceful moment captured in the dense Congo rainforest",
      description:
        "This stunning photograph captures a rare glimpse of Okapis in their natural habitat. The dense foliage of the Congo rainforest provides the perfect backdrop for these elusive creatures. Okapis are incredibly shy and rarely seen in the wild, making photographs like this one particularly precious. The family shown here demonstrates the strong social bonds that exist between Okapi mothers and their young. Notice how the distinctive white stripes on their legs help them blend with the dappled sunlight filtering through the forest canopy.",
      photographer: "Wildlife Photography Collection",
      location: "Ituri Forest, Democratic Republic of Congo",
      facts: [
        "Okapis can live up to 30 years in captivity",
        "They have a gestation period of about 15 months",
        "Adult males can weigh up to 350 kg (770 lbs)",
      ],
    },
    "2": {
      src: "https://media.istockphoto.com/id/1446178751/es/foto/plano-vertical-del-okapi-aliment%C3%A1ndose-de-las-hojas-de-los-%C3%A1rboles-okapia-johnstoni.jpg?s=1024x1024&w=is&k=20&c=rqdBWkjpNv9Le_a5-QZu0cAEsWDxYM-rlALkeV1ORjk=",
      title: "Grazing Okapi",
      caption: "An adult Okapi grazing in its natural habitat",
      description:
        "This image beautifully showcases an adult Okapi engaged in one of its most common activities - foraging for food. Okapis are browsers, feeding on leaves, buds, and fruits found in the forest understory. Their long, prehensile tongues (which can extend up to 18 inches) allow them to reach vegetation that other animals cannot access. The photograph highlights the animal's distinctive reddish-brown coat and the characteristic white horizontal stripes on their legs and rear end, which serve as excellent camouflage in the forest environment.",
      photographer: "Congo Conservation Project",
      location: "Okapi Wildlife Reserve",
      facts: [
        "Okapis can strip leaves with their 18-inch long tongues",
        "They consume about 40-65 pounds of vegetation daily",
        "Their diet consists of over 100 different plant species",
      ],
    },
    "3": {
      src: "https://images.unsplash.com/photo-1659565902535-7e3122a790c1?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Young Okapi Calf",
      caption: "A young Okapi exploring the forest floor",
      description:
        "Young Okapi calves are particularly vulnerable during their first few months of life. This photograph captures the curiosity and innocence of a juvenile Okapi as it explores its forest home. Calves are born with more pronounced striping than adults, which gradually fades as they mature. The mother typically hides her calf in dense vegetation during the day, returning only to nurse. This behavior helps protect the young from predators such as leopards. The bond between mother and calf is incredibly strong, lasting for several years.",
      photographer: "Rainforest Wildlife Foundation",
      location: "Maiko National Park, DRC",
      facts: [
        "Calves weigh about 16-30 kg (35-65 lbs) at birth",
        "Young Okapis stay with their mothers for up to 3 years",
        "Calves can stand and walk within 30 minutes of birth",
      ],
    },
    "4": {
      src: "https://media.istockphoto.com/id/115862946/es/foto/okapi-okapia-johnstoni.jpg?s=1024x1024&w=is&k=20&c=NWRcpKqw7VmgeS7Lj5tXNRGcW4RfbebmqUZf-9pcAIc=",
      title: "Okapi Portrait",
      caption: "Close-up view showing the distinctive markings",
      description:
        "This intimate portrait provides an excellent view of the Okapi's distinctive features. The velvety brown coat, large ears, and gentle eyes are clearly visible in this close-up shot. Male Okapis have short, hair-covered horns called ossicones, similar to their giraffe relatives. The Okapi's large ears help them detect the slightest sounds in their forest environment, which is crucial for avoiding predators. Their excellent hearing, combined with their natural camouflage, has helped them survive in the dense forests of Central Africa for millions of years.",
      photographer: "African Wildlife Conservancy",
      location: "Garamba National Park",
      facts: [
        "Only male Okapis have horns (ossicones)",
        "They have excellent hearing and can detect sounds from great distances",
        "Okapis are most closely related to giraffes",
      ],
    },
  };

  const photo = photos[id as keyof typeof photos];

  if (!photo) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-amber-900 mb-4">
            Photo Not Found
          </h1>
          <Link to="/gallery" className="text-amber-600 hover:text-amber-700">
            Return to Gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          to="/gallery"
          className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700 mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Gallery</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <div>
            <img
              src={photo.src}
              alt={photo.title}
              className="w-full h-96 lg:h-[600px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div>
            <h1 className="text-3xl font-bold text-amber-900 mb-4">
              {photo.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6 italic">{photo.caption}</p>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-semibold text-amber-900 mb-3">
                About This Photo
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {photo.description}
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">
                Photo Details
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Photographer:</strong> {photo.photographer}
                </p>
                <p>
                  <strong>Location:</strong> {photo.location}
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900 mb-3">
                Did You Know?
              </h3>
              <ul className="space-y-2">
                {photo.facts.map((fact, index) => (
                  <li key={index} className="text-green-800 flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetail;
