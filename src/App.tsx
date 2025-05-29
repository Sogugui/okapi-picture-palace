import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import PhotoDetail from "./pages/PhotoDetail";
import Upload from "./pages/Upload";
import Diet from "./pages/Diet";
import Reproduction from "./pages/Reproduction";
import Habitat from "./pages/Habitat";
import Classification from "./pages/Classification";
import Anatomy from "./pages/Anatomy";
import Behavior from "./pages/Behavior";
import NotFound from "./pages/NotFound";
import DidYouKnow from "./pages/DidYouKnow";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/photo/:id" element={<PhotoDetail />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/reproduction" element={<Reproduction />} />
          <Route path="/habitat" element={<Habitat />} />
          <Route path="/classification" element={<Classification />} />
          <Route path="/anatomy" element={<Anatomy />} />
          <Route path="/behavior" element={<Behavior />} />
          <Route path="/didyouknow" element={<DidYouKnow />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
