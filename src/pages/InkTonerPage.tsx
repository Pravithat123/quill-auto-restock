import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Star, ArrowRight, Filter, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const InkTonerPage = () => {
  const [sortBy, setSortBy] = useState("popularity");

  const products = [
    {
      id: 1,
      name: "HP 950XL Black Ink Cartridge - High Yield",
      price: 45.99,
      originalPrice: 59.99,
      discount: "25% off",
      rating: 4.5,
      reviews: 234,
      brand: "HP",
      compatible: ["HP OfficeJet Pro 8600", "HP OfficeJet Pro 8100"],
      subscribeAvailable: true,
      inStock: true,
      freeShipping: true
    },
    {
      id: 2,
      name: "Canon PG-245XL Black Ink Cartridge - High Yield",
      price: 38.99,
      originalPrice: 49.99,
      discount: "22% off",
      rating: 4.3,
      reviews: 189,
      brand: "Canon",
      compatible: ["Canon PIXMA MG2520", "Canon PIXMA MG2922"],
      subscribeAvailable: true,
      inStock: true,
      freeShipping: true
    },
    {
      id: 3,
      name: "Epson 273XL Multipack Ink Cartridges",
      price: 129.99,
      originalPrice: 159.99,
      discount: "19% off",
      rating: 4.7,
      reviews: 156,
      brand: "Epson",
      compatible: ["Epson Expression XP-600", "Epson Expression XP-800"],
      subscribeAvailable: true,
      inStock: true,
      freeShipping: true
    },
    {
      id: 4,
      name: "Brother TN-660 Black Toner Cartridge - High Yield",
      price: 89.99,
      originalPrice: 109.99,
      discount: "18% off",
      rating: 4.6,
      reviews: 312,
      brand: "Brother",
      compatible: ["Brother HL-L2300D", "Brother DCP-L2540DW"],
      subscribeAvailable: true,
      inStock: true,
      freeShipping: true
    },
    {
      id: 5,
      name: "Samsung MLT-D116L Black Toner Cartridge",
      price: 67.99,
      originalPrice: 79.99,
      discount: "15% off",
      rating: 4.4,
      reviews: 198,
      brand: "Samsung",
      compatible: ["Samsung Xpress M2825DW", "Samsung Xpress M2875FW"],
      subscribeAvailable: true,
      inStock: true,
      freeShipping: true
    },
    {
      id: 6,
      name: "Lexmark 100XL Color Ink Cartridge Set",
      price: 95.99,
      originalPrice: 119.99,
      discount: "20% off",
      rating: 4.2,
      reviews: 87,
      brand: "Lexmark",
      compatible: ["Lexmark Interpret S405", "Lexmark Pinnacle Pro901"],
      subscribeAvailable: true,
      inStock: true,
      freeShipping: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-4xl font-bold text-primary">Quill</Link>
              <div className="hidden md:flex space-x-6">
                <Link to="/" className="text-foreground hover:text-primary">Home</Link>
                <Link to="/ink-toner" className="text-primary font-medium">Ink & Toner</Link>
                <Link to="/subscribe-save" className="text-foreground hover:text-primary">Subscribe & Save</Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">Cart</Button>
              <Button size="sm">Sign In</Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-professional-surface border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Ink & Toner</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <section className="py-8 bg-professional-surface">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Ink & Toner</h1>
              <p className="text-muted-foreground">High-quality ink cartridges and toner for your business printers</p>
            </div>
            <Badge variant="subscription" className="hidden md:flex">
              Subscribe & Save Available
            </Badge>
          </div>
          
          {/* Filters and Sorting */}
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Brand
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="sm">
                Printer Type
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="sm">
                Color
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="sm">
                Price Range
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded px-3 py-1 text-sm"
              >
                <option value="popularity">Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe & Save Banner */}
      <section className="py-6 bg-gradient-to-r from-secondary-light to-background border-b">
        <div className="container mx-auto px-4">
          <Card className="border-subscription-badge">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-subscription-badge rounded-full p-3">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Never run out of ink again</h3>
                    <p className="text-sm text-muted-foreground">Save up to 15% with Subscribe & Save on ink & toner</p>
                  </div>
                </div>
                <Button variant="subscription" asChild>
                  <Link to="/subscribe-save">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Available Products</h2>
            <span className="text-sm text-muted-foreground">{products.length} products found</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-200">
                <CardContent className="p-6">
                  {/* Product Image Placeholder */}
                  <div className="bg-gray-100 rounded-lg h-48 mb-4 flex items-center justify-center">
                    <Package className="w-16 h-16 text-muted-foreground" />
                  </div>
                  
                  {/* Product Info */}
                  <div className="space-y-3">
                    <div>
                      <Badge variant="outline" className="text-xs mb-2">{product.brand}</Badge>
                      <h3 className="font-medium text-foreground hover:text-primary cursor-pointer">
                        <Link to={`/product/${product.id}`}>{product.name}</Link>
                      </h3>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                    </div>

                    {/* Compatible Printers */}
                    <div>
                      <p className="text-xs text-muted-foreground">Compatible with:</p>
                      <p className="text-xs">{product.compatible.slice(0, 2).join(", ")}</p>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-lg">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-xs text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                      {product.discount && (
                        <Badge variant="savings" className="text-xs">{product.discount}</Badge>
                      )}
                    </div>

                    {/* Subscribe & Save Option */}
                    {product.subscribeAvailable && (
                      <div className="bg-secondary-light rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium">Subscribe & Save</p>
                            <p className="text-xs text-muted-foreground">Save 5% + free shipping</p>
                          </div>
                          <Badge variant="subscription" className="text-xs">5% off</Badge>
                        </div>
                      </div>
                    )}

                    {/* Add to Cart */}
                    <div className="flex gap-2">
                      <select className="flex-1 text-sm border rounded p-2">
                        <option>Qty: 1</option>
                        <option>Qty: 2</option>
                        <option>Qty: 3</option>
                        <option>Qty: 5</option>
                      </select>
                      <Button className="flex-1" size="sm" asChild>
                        <Link to={`/product/${product.id}`}>View Details</Link>
                      </Button>
                    </div>

                    {/* Stock & Shipping */}
                    <div className="text-xs text-muted-foreground space-y-1">
                      {product.inStock && <p className="text-green-600">✓ In Stock</p>}
                      {product.freeShipping && <p>✓ Free Shipping on orders $45+</p>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-professional-surface">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Need help finding the right ink or toner?</h3>
          <p className="text-muted-foreground mb-6">Our experts can help you find compatible cartridges for your printer</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="cta">
              Contact Support
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/subscribe-save">
                Set Up Auto-Restock
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InkTonerPage;