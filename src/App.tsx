import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Input from "./pages/Input";
import VoiceAnalysis from "./pages/VoiceAnalysis";
import StressScoring from "./pages/StressScoring";
import Counselor from "./pages/Counselor";
import Relief from "./pages/Relief";
import Tracker from "./pages/Tracker";
import Chatbot from "./pages/Chatbot";
import Community from "./pages/Community";
import Rewards from "./pages/Rewards";
import Health from "./pages/Health";
import Reports from "./pages/Reports";
import Language from "./pages/Language";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/input" element={<Input />} />
            <Route path="/voice" element={<VoiceAnalysis />} />
            <Route path="/scoring" element={<StressScoring />} />
            <Route path="/counselor" element={<Counselor />} />
            <Route path="/relief" element={<Relief />} />
            <Route path="/tracker" element={<Tracker />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/community" element={<Community />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/health" element={<Health />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/language" element={<Language />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
