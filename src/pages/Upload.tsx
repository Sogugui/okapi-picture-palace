
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Upload as UploadIcon, Image, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Upload = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    photographerName: "",
    email: ""
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedFile) {
      toast({
        title: "Please select a photo",
        description: "You need to upload an image to share with the community.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.title || !formData.photographerName || !formData.email) {
      toast({
        title: "Please fill in required fields",
        description: "Title, photographer name, and email are required.",
        variant: "destructive",
      });
      return;
    }

    // Simulate upload process
    toast({
      title: "Photo submitted successfully!",
      description: "Thank you for sharing your Okapi photo. We'll review it and add it to our gallery soon.",
    });

    // Reset form
    setFormData({
      title: "",
      description: "",
      location: "",
      photographerName: "",
      email: ""
    });
    setSelectedFile(null);
    setPreviewUrl("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Share Your Okapi Photos</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Help us build the world's most comprehensive collection of Okapi photography. 
            Share your images and contribute to Okapi conservation awareness.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Upload Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Photo Upload *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-amber-400 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    id="photo-upload"
                  />
                  <label htmlFor="photo-upload" className="cursor-pointer">
                    <UploadIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Click to upload your Okapi photo</p>
                    <p className="text-sm text-gray-400 mt-1">JPG, PNG up to 10MB</p>
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Photo Title *
                </label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Okapi in Morning Light"
                  required
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Tell us about when and where you took this photo..."
                  rows={4}
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="e.g., Okapi Wildlife Reserve, DRC"
                />
              </div>

              <div>
                <label htmlFor="photographerName" className="block text-sm font-medium text-gray-700 mb-2">
                  Photographer Name *
                </label>
                <Input
                  id="photographerName"
                  name="photographerName"
                  value={formData.photographerName}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700">
                Submit Photo
              </Button>
            </form>
          </div>

          {/* Preview & Guidelines */}
          <div className="space-y-6">
            {/* Photo Preview */}
            {previewUrl && (
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-4">Photo Preview</h3>
                <img 
                  src={previewUrl} 
                  alt="Preview" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            )}

            {/* Guidelines */}
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <h3 className="text-lg font-semibold text-amber-900 mb-4 flex items-center">
                <Camera className="w-5 h-5 mr-2" />
                Photo Guidelines
              </h3>
              <ul className="space-y-2 text-amber-800">
                <li>• High-quality images (minimum 1200px width)</li>
                <li>• Clear, well-lit photos of Okapis</li>
                <li>• Natural habitat or conservation center settings</li>
                <li>• No heavy filters or digital manipulation</li>
                <li>• Respectful wildlife photography practices</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center">
                <Image className="w-5 h-5 mr-2" />
                Why Share?
              </h3>
              <ul className="space-y-2 text-green-800">
                <li>• Help educate people about Okapis</li>
                <li>• Support conservation awareness</li>
                <li>• Build a global community of Okapi enthusiasts</li>
                <li>• Preserve these magnificent creatures in imagery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
