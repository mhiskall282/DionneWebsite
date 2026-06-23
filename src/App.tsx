import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from "aos";
import Loader from "./components/Loader";
import Index from "./pages/Index";
import About from "./pages/About";
import Books from "./pages/Books";
import Speaking from "./pages/Speaking";
import Blogs from "./pages/Blogs";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";
import CookieConsent from "./components/CookieConsent";

import AdminLogin from "./pages/admin/Login";
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import NewsletterManager from "./pages/admin/NewsletterManager";
import BlogsManager from "./pages/admin/BlogsManager";
import BooksManager from "./pages/admin/BooksManager";
import Settings from "./pages/admin/Settings";

import NewsletterPopup from "./components/NewsletterPopup";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(true);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

  useEffect(() => {
    // Don't show loader for admin routes
    if (location.pathname.startsWith("/admin")) {
      setShowLoader(false);
      return;
    }

    // Show loader on every public page navigation
    setShowLoader(true);
    
    const timer = setTimeout(() => {
      setShowLoader(false);
      setHasLoadedOnce(true);
    }, hasLoadedOnce ? 3000 : 6500); // 6.5s for initial load, 3s for subsequent page navigations

    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      offset: 100,
    });
  }, []);

  return (
    <>
      {showLoader && <Loader />}
      <CookieConsent />
      {!location.pathname.startsWith("/admin") && <NewsletterPopup />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books />} />
        <Route path="/speaking" element={<Speaking />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/resources" element={<Resources />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/*" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="newsletter" element={<NewsletterManager />} />
          <Route path="blogs" element={<BlogsManager />} />
          <Route path="books" element={<BooksManager />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

import { HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
