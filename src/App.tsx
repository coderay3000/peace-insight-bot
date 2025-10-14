import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Loading from "./pages/Loading";
import Auth from "./pages/Auth";
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
      <Routes>
        <Route path="/loading" element={<Loading />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Loading />} />
        <Route path="/input" element={<Layout><Input /></Layout>} />
        <Route path="/voice" element={<Layout><VoiceAnalysis /></Layout>} />
        <Route path="/scoring" element={<Layout><StressScoring /></Layout>} />
        <Route path="/counselor" element={<Layout><Counselor /></Layout>} />
        <Route path="/relief" element={<Layout><Relief /></Layout>} />
        <Route path="/tracker" element={<Layout><Tracker /></Layout>} />
        <Route path="/chatbot" element={<Layout><Chatbot /></Layout>} />
        <Route path="/community" element={<Layout><Community /></Layout>} />
        <Route path="/rewards" element={<Layout><Rewards /></Layout>} />
        <Route path="/health" element={<Layout><Health /></Layout>} />
        <Route path="/reports" element={<Layout><Reports /></Layout>} />
        <Route path="/language" element={<Layout><Language /></Layout>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
