import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HomePage from "./pages/HomePage";
import SubscribeSavePage from "./pages/SubscribeSavePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import SubscriptionDashboard from "./pages/SubscriptionDashboard";
import InkTonerPage from "./pages/InkTonerPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/subscribe-save" element={<SubscribeSavePage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/subscriptions" element={<SubscriptionDashboard />} />
          <Route path="/ink-toner" element={<InkTonerPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
