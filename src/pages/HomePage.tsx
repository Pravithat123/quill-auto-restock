import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Coffee, Package, Recycle, ShoppingCart, Clock, Shield, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <h1 className="text-2xl font-bold text-primary">Quill.com</h1>
              <div className="hidden md:flex space-x-6">
                <Link to="/" className="text-foreground hover:text-primary">Home</Link>
                <Link to="/products" className="text-foreground hover:text-primary">Products</Link>
                <Link to="/subscribe-save" className="text-foreground hover:text-primary">Subscribe & Save</Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <ShoppingCart className="w-4 h-4" />
                Cart
              </Button>
              <Button size="sm">Sign In</Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-light to-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-6">
                Your Business Supply Partner
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Everything your business needs, delivered when you need it. Now with automatic restocking to save you time and money.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="cta" asChild>
                  <Link to="/subscribe-save">
                    Discover Subscribe & Save
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  Shop All Products
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-card rounded-lg p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-subscription-badge rounded-full p-3">
                    <Recycle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Subscribe & Save</h3>
                    <p className="text-sm text-muted-foreground">Never run out again</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Next delivery:</span>
                    <span className="font-medium">March 15</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Your savings:</span>
                    <Badge variant="savings">Save 15%</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe & Save Banner */}
      <section className="py-8 bg-professional-surface">
        <div className="container mx-auto px-4">
          <Card className="border-2 border-subscription-badge bg-gradient-to-r from-secondary-light to-background">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="subscription" className="text-sm px-4 py-2">New Feature</Badge>
                    <h2 className="text-2xl font-bold text-foreground">Subscribe & Save</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-4">
                    Never run out of essential supplies. Save time and money with automatic restocking on your schedule.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-foreground">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-subscription-badge" />
                      <span>Save up to 15%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-subscription-badge" />
                      <span>Flexible scheduling</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-subscription-badge" />
                      <span>Cancel anytime</span>
                    </div>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <Button size="lg" variant="subscription" asChild>
                    <Link to="/subscribe-save">
                      Start Saving Now
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Bento Box Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Package, title: "Ink & Toner", description: "Printers & supplies", subscribeAvailable: true },
              { icon: Coffee, title: "Coffee & Breakroom", description: "Keep teams fueled", subscribeAvailable: true },
              { icon: Package, title: "Cleaning Supplies", description: "Maintain your space", subscribeAvailable: true },
              { icon: Package, title: "Paper & Office", description: "Essential supplies", subscribeAvailable: true },
              { icon: Package, title: "Technology", description: "Hardware & accessories", subscribeAvailable: false },
              { icon: Package, title: "Furniture", description: "Office solutions", subscribeAvailable: false },
              { icon: Package, title: "Safety & Health", description: "Workplace protection", subscribeAvailable: true },
              { icon: Package, title: "Facilities", description: "Building maintenance", subscribeAvailable: true },
            ].map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-200 cursor-pointer">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-primary-light rounded-full p-4 w-16 h-16 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <category.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                  {category.subscribeAvailable && (
                    <Badge variant="auto-restock" className="mx-auto">
                      <Recycle className="w-3 h-3 mr-1" />
                      Auto-Restock Available
                    </Badge>
                  )}
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-professional-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Subscribe & Save?</h2>
            <p className="text-xl text-muted-foreground">Built for business, designed for convenience</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Save Money",
                description: "Enjoy discounts of 5-15% on recurring orders, plus free shipping on qualifying orders."
              },
              {
                icon: Clock,
                title: "Save Time",
                description: "Set your delivery schedule and forget about it. We'll handle the rest automatically."
              },
              {
                icon: Shield,
                title: "Complete Control",
                description: "Pause, cancel, or modify your subscriptions anytime with our self-service dashboard."
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary rounded-full p-4 w-16 h-16 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-card border-t">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6">Explore our auto-restock categories and start saving today.</p>
          <Button size="lg" variant="cta" asChild>
            <Link to="/subscribe-save">
              Explore Auto-Restock Categories
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;