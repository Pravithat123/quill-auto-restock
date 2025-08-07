import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ArrowRight, Coffee, Package, Recycle, ShoppingCart, Clock, Shield, DollarSign, User, ChevronDown, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-[#2B58F1] text-white">
        {/* Top Banner */}
        <div className="bg-[#2B58F1] text-center py-2 text-sm">
          <span>Save an extra $500 a year with Rewards+</span>
          <span className="ml-8">Get always-free shipping</span>
        </div>
        
        {/* Main Header */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-4xl font-bold">Quill</h1>
              <div className="hidden lg:block">
                <input 
                  type="search" 
                  placeholder="Search" 
                  className="px-4 py-2 rounded-md text-black w-96"
                />
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4 text-sm">
                <div className="text-center">
                  <div>Buy again</div>
                  <div className="text-xs opacity-75">0 Points</div>
                </div>
                <div className="text-center">
                  <div>Orders</div>
                </div>
                <div className="text-center">
                  <div>Cart</div>
                  <div className="text-xs opacity-75">0</div>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-white hover:bg-white/10">
                    <User className="w-4 h-4 mr-2" />
                    Sign In
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64">
                  <div className="p-4 bg-[#2B58F1] text-white">
                    <div className="font-semibold">Account #: 8418503</div>
                    <div className="text-sm">Reward ID: 50676901</div>
                    <div className="text-sm mt-2">Rewards+ customer service team</div>
                    <div className="text-sm">1-800-437-1281</div>
                  </div>
                  <DropdownMenuItem>Your account</DropdownMenuItem>
                  <DropdownMenuItem>Invoices & account balance</DropdownMenuItem>
                  <DropdownMenuItem>Reorder list</DropdownMenuItem>
                  <DropdownMenuItem>Your shopping lists</DropdownMenuItem>
                  <DropdownMenuItem>Account settings</DropdownMenuItem>
                  <DropdownMenuItem>Purchasing manager</DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/subscriptions">S&S</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Rewards program</DropdownMenuItem>
                  <DropdownMenuItem>Your custom price list</DropdownMenuItem>
                  <DropdownMenuItem>Your savings</DropdownMenuItem>
                  <DropdownMenuItem>Your quotes</DropdownMenuItem>
                  <DropdownMenuItem>Help center</DropdownMenuItem>
                  <DropdownMenuItem>Send feedback</DropdownMenuItem>
                  <DropdownMenuItem>Sign out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        
        {/* Navigation Menu */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4">
            <nav className="flex items-center space-x-8 py-3">
              <Button variant="ghost" className="text-gray-700">
                <Menu className="w-4 h-4 mr-2" />
                Shop all
              </Button>
              <Link to="/coupons" className="text-blue-600 hover:text-blue-800">Coupons & Rewards</Link>
              <Link to="/deals" className="text-gray-700 hover:text-gray-900">Hot Deals</Link>
              <Link to="/buy-again" className="text-gray-700 hover:text-gray-900">Buy Again</Link>
              <Link to="/solutions" className="text-gray-700 hover:text-gray-900">Solutions</Link>
              <Link to="/subscribe-save" className="text-gray-700 hover:text-gray-900">Subscribe & Save</Link>
              <Link to="/ink-toner" className="text-gray-700 hover:text-gray-900">Ink & toner</Link>
              <Link to="/paper" className="text-gray-700 hover:text-gray-900">Paper</Link>
              <Link to="/cleaning" className="text-gray-700 hover:text-gray-900">Cleaning</Link>
              <Link to="/office-supplies" className="text-gray-700 hover:text-gray-900">Office supplies</Link>
              <Link to="/coffee" className="text-gray-700 hover:text-gray-900">Coffee & breakroom</Link>
              <Link to="/rewards-benefits" className="text-gray-700 hover:text-gray-900">Rewards+ benefits</Link>
            </nav>
          </div>
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

      {/* Our Top Picks Section */}
      <section className="py-16 bg-professional-surface">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Our top picks on sale</h2>
            <Button variant="ghost" className="text-primary hover:text-primary-hover">
              View all
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { name: "Hammermill Copy Plus 8.5\" x 11\" Copy Paper, 20 lbs., 92...", price: "$39.99", originalPrice: "$79.99", discount: "50% off", rating: 4.5, reviews: "18662", badge: "Price Promise" },
              { name: "Post-it Super Sticky Notes, 3\" x 3\", Summer Joy Collection, 90...", price: "$5.99", originalPrice: "$11.99", discount: "50% off", rating: 5, reviews: "150" },
              { name: "Quill Brand® 8.5\" x 11\" Copy Paper, 20 lbs., 92 Brightness, 50...", price: "$27.99", originalPrice: "$44.99", discount: "37% off", rating: 4.5, reviews: "212" },
              { name: "Kleenex Professional Anti-viral Facial Tissue, 3-ply, White, 55...", price: "$8.99", originalPrice: "$12.99", discount: "28% off", rating: 4.5, reviews: "418" },
              { name: "Kleenex Recycled Multifold Paper Towels, 1-ply, 150...", price: "$26.99", originalPrice: "$33.99", discount: "20% off", rating: 4.5, reviews: "40" }
            ].map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex gap-2 mb-3">
                    <Badge variant="savings" className="text-xs">{product.discount}</Badge>
                    {product.badge && <Badge variant="outline" className="text-xs">{product.badge}</Badge>}
                  </div>
                  <div className="bg-gray-100 rounded-lg h-32 mb-4 flex items-center justify-center">
                    <Package className="w-16 h-16 text-muted-foreground" />
                  </div>
                  <h3 className="font-medium text-sm mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'bg-yellow-400' : 'bg-gray-200'} rounded-sm`} />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    {product.originalPrice && (
                      <span className="text-xs text-muted-foreground line-through">{product.originalPrice}</span>
                    )}
                    <span className="font-bold text-lg">{product.price}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <select className="flex-1 text-sm border rounded p-1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    <Button className="flex-1" size="sm">Add</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stock up on breakroom essentials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Stock up on breakroom essentials</h2>
            <Button variant="ghost" className="text-primary hover:text-primary-hover">
              View all
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Every order gets rewarded</h3>
                <p className="text-sm text-muted-foreground mb-4">Coupons, gifts, and more!</p>
                <div className="flex items-center justify-center h-32">
                  <Coffee className="w-16 h-16 text-primary" />
                </div>
                <div className="text-center">
                  <p className="font-medium">Travel Waist Pack</p>
                  <p className="text-sm text-muted-foreground">⭐ 50 points</p>
                </div>
              </CardContent>
            </Card>
            {[
              { name: "Instant Pot Silicone Accessory Set", points: "125 points" },
              { name: "Lodge Black Max Temp Oven Mitt", points: "109 points" },
              { name: "Express Mini Cupcake Maker", points: "175 points" }
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="bg-gray-100 rounded-lg h-32 mb-4 flex items-center justify-center">
                    <Package className="w-16 h-16 text-muted-foreground" />
                  </div>
                  <h3 className="font-medium mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">⭐ {item.points}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards+ CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-hover">
        <div className="container mx-auto px-4">
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Give your savings a boost with Rewards+</h2>
              <p className="text-xl mb-6 opacity-90">Start your free trial</p>
              <Button size="lg" variant="secondary">
                Start Your Free Trial
              </Button>
            </CardContent>
          </Card>
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