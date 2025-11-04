import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { WishlistProvider } from "@/context/WishlistContext";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import ProductDetailPage from '@/pages/ProductDetail';
import ProductListingPage from '@/pages/ProductListing';
import Wishlist from '@/pages/Wishlist';
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <WishlistProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/products" component={ProductListingPage} />
            <Route path="/products/:id" component={ProductDetailPage} />
            <Route path="/wishlist" component={Wishlist} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </WishlistProvider>
    </TooltipProvider>
  </QueryClientProvider>
);
export default App;