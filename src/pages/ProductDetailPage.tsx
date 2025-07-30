import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowRight, Star, ShoppingCart, Recycle, HelpCircle, DollarSign, Clock, Shield, Package, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const ProductDetailPage = () => {
  const [purchaseType, setPurchaseType] = useState("one-time");
  const [frequency, setFrequency] = useState("6-weeks");
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: "HP 64XL Black High Yield Original Ink Cartridge",
    price: 34.99,
    subscriptionPrice: 29.74,
    rating: 4.5,
    reviews: 128,
    inStock: true,
    subscriptionEligible: true,
    image: "/api/placeholder/400/400",
    sku: "N9J92AN#140",
    description: "Original HP ink cartridge delivers professional-quality documents with crisp, clear text and graphics.",
    features: [
      "High-yield cartridge for more pages",
      "Fade-resistant prints",
      "Easy installation",
      "Works with HP DeskJet, ENVY, and OfficeJet printers"
    ]
  };

  const frequencyOptions = [
    { value: "2-weeks", label: "Every 2 weeks", savings: "5%" },
    { value: "monthly", label: "Monthly", savings: "8%" },
    { value: "6-weeks", label: "Every 6 weeks", savings: "15%" },
    { value: "2-months", label: "Every 2 months", savings: "12%" },
    { value: "3-months", label: "Every 3 months", savings: "10%" },
    { value: "6-months", label: "Every 6 months", savings: "8%" }
  ];

  const selectedFrequency = frequencyOptions.find(opt => opt.value === frequency);
  const finalPrice = purchaseType === "subscription" ? product.subscriptionPrice : product.price;
  const totalPrice = finalPrice * quantity;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-2xl font-bold text-primary">Quill.com</Link>
              <div className="hidden md:flex space-x-6">
                <Link to="/" className="text-foreground hover:text-primary">Home</Link>
                <Link to="/products" className="text-primary font-medium">Products</Link>
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

      {/* Breadcrumb */}
      <div className="border-b border-border bg-professional-surface">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-primary">Products</Link>
            <span>/</span>
            <Link to="/ink-toner" className="hover:text-primary">Ink & Toner</Link>
            <span>/</span>
            <span className="text-foreground">HP 64XL Black Ink Cartridge</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="bg-card rounded-lg p-8 border">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-96 object-contain"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-card rounded border p-2 cursor-pointer hover:border-primary">
                  <img 
                    src={product.image} 
                    alt={`${product.name} view ${i}`}
                    className="w-full h-16 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Title and Rating */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                {product.subscriptionEligible && (
                  <Badge variant="subscription">
                    <Recycle className="w-3 h-3 mr-1" />
                    Subscribe & Save Eligible
                  </Badge>
                )}
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">SKU: {product.sku}</p>
            </div>

            {/* Price and Purchase Options */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-lg">Purchase Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Purchase Type Selection */}
                <RadioGroup value={purchaseType} onValueChange={setPurchaseType}>
                  <div className="space-y-4">
                    {/* One-Time Purchase */}
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="one-time" id="one-time" />
                      <Label htmlFor="one-time" className="flex-1 cursor-pointer">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-medium">One-Time Purchase</div>
                            <div className="text-sm text-muted-foreground">Standard pricing</div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold">${product.price}</div>
                          </div>
                        </div>
                      </Label>
                    </div>

                    {/* Subscribe & Save */}
                    {product.subscriptionEligible && (
                      <div className={`p-4 border-2 rounded-lg ${purchaseType === "subscription" ? "border-subscription-badge bg-secondary-light" : "border-border"}`}>
                        <div className="flex items-center space-x-2 mb-4">
                          <RadioGroupItem value="subscription" id="subscription" />
                          <Label htmlFor="subscription" className="flex-1 cursor-pointer">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="font-medium flex items-center gap-2">
                                  <Recycle className="w-4 h-4 text-subscription-badge" />
                                  Subscribe & Save
                                  <TooltipProvider>
                                    <Tooltip>
                                      <TooltipTrigger>
                                        <HelpCircle className="w-4 h-4 text-muted-foreground" />
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <div className="max-w-xs space-y-2">
                                          <p className="font-medium">How Subscribe & Save Works:</p>
                                          <ul className="text-sm space-y-1">
                                            <li>• Automatic reordering on your schedule</li>
                                            <li>• Exclusive discounts on every order</li>
                                            <li>• Free shipping on qualifying orders</li>
                                            <li>• Cancel or pause anytime</li>
                                          </ul>
                                        </div>
                                      </TooltipContent>
                                    </Tooltip>
                                  </TooltipProvider>
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Save {selectedFrequency?.savings} with subscription
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-subscription-badge">
                                  ${product.subscriptionPrice}
                                </div>
                                <div className="text-sm text-muted-foreground line-through">
                                  ${product.price}
                                </div>
                                <Badge variant="savings" className="text-xs">
                                  Save ${(product.price - product.subscriptionPrice).toFixed(2)}
                                </Badge>
                              </div>
                            </div>
                          </Label>
                        </div>

                        {/* Subscription Options */}
                        {purchaseType === "subscription" && (
                          <div className="space-y-4 pl-6 border-l-2 border-subscription-badge">
                            <div>
                              <Label className="text-sm font-medium mb-2 block">Delivery Frequency</Label>
                              <Select value={frequency} onValueChange={setFrequency}>
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {frequencyOptions.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                      <div className="flex justify-between items-center w-full">
                                        <span>{option.label}</span>
                                        <Badge variant="savings" className="ml-2 text-xs">
                                          Save {option.savings}
                                        </Badge>
                                      </div>
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-4 text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <DollarSign className="w-3 h-3" />
                                <span>Save on every order</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                <span>Flexible scheduling</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Shield className="w-3 h-3" />
                                <span>Cancel anytime</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </RadioGroup>

                <Separator />

                {/* Quantity and Add to Cart */}
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Quantity</Label>
                    <Select value={quantity.toString()} onValueChange={(value) => setQuantity(parseInt(value))}>
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="bg-professional-surface p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">
                        {purchaseType === "subscription" ? "Subscription" : "One-time"} Total:
                      </span>
                      <span className="text-2xl font-bold">${totalPrice.toFixed(2)}</span>
                    </div>
                    {purchaseType === "subscription" && (
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">You save:</span>
                        <Badge variant="savings">
                          ${((product.price - product.subscriptionPrice) * quantity).toFixed(2)} per delivery
                        </Badge>
                      </div>
                    )}
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full" 
                    variant={purchaseType === "subscription" ? "subscription" : "cta"}
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    {purchaseType === "subscription" ? "Start Subscription" : "Add to Cart"}
                  </Button>

                  {/* Additional Info */}
                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4" />
                      <span>Free shipping on $45+</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4" />
                      <span>In stock, ships today</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Product Features */}
            <Card>
              <CardHeader>
                <CardTitle>Product Features</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Subscription Benefits */}
        {product.subscriptionEligible && (
          <div className="mt-16">
            <Card className="border-2 border-subscription-badge bg-gradient-to-r from-secondary-light to-background">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-4">Why Subscribe & Save?</h2>
                  <p className="text-muted-foreground">Built for business, designed for convenience</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: DollarSign,
                      title: "Save Money",
                      description: "Enjoy 5-15% discounts on recurring orders, plus free shipping on qualifying orders."
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
                  ].map((benefit, index) => (
                    <div key={index} className="text-center">
                      <div className="mx-auto bg-subscription-badge rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                        <benefit.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Button variant="outline" asChild>
                    <Link to="/subscribe-save">
                      Learn More About Subscribe & Save
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;