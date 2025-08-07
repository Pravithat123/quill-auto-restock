import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Package, Star, Plus, Minus, ShoppingCart, Recycle, Truck, Shield, Check, ArrowRight, Info, Calendar, CreditCard } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const EnhancedProductDetailPage = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState<"one-time" | "subscribe">("one-time");
  const [frequency, setFrequency] = useState("4 months");

  // Mock product data based on Amazon images
  const product = {
    id: 1,
    name: "8 Family Rolls = 20 Regular Rolls (Packaging May Vary)",
    brand: "Bounty",
    price: 23.20,
    originalPrice: 27.71,
    discount: "Save $4.51",
    rating: 4.8,
    reviews: 126791,
    inStock: true,
    freeShipping: true,
    amazonChoice: true,
    description: "Visit the Bounty Store",
    features: [
      "2-Ply rating for superior absorbency",
      "High absorbent paper towels",
      "Quick-Size sheets for efficient use",
      "Works with standard paper towel holders"
    ],
    specifications: {
      "Size": "107 sheet (Pack of 8)",
      "Color": "White", 
      "Brand": "Bounty",
      "Unit Count": "856 Count",
      "Sheet Count": "856",
      "Ply Rating": "2-Ply",
      "Special Feature": "High Absorbent"
    },
    subscribeAvailable: true,
    subscribeDiscount: 5,
    categoryPath: ["Office Supplies", "Paper", "Paper Towels"]
  };

  const deliveryOptions = [
    "2 weeks",
    "3 weeks", 
    "1 month",
    "5 weeks",
    "6 weeks",
    "7 weeks",
    "2 months",
    "3 months",
    "4 months (Most common)",
    "5 months",
    "6 months"
  ];

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  const calculateSubscribePrice = () => {
    return product.price * (1 - product.subscribeDiscount / 100);
  };

  const getCurrentPrice = () => {
    return selectedOption === "subscribe" ? calculateSubscribePrice() : product.price;
  };

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
                <Link to="/products" className="text-primary font-medium">Products</Link>
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
            {product.categoryPath.map((category, index) => (
              <span key={index}>
                <Link to="#" className="hover:text-primary">{category}</Link>
                {index < product.categoryPath.length - 1 && <span className="mx-2">/</span>}
              </span>
            ))}
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <div className="bg-card rounded-lg p-8 mb-4">
              <Package className="w-64 h-64 mx-auto text-muted-foreground" />
            </div>
            <div className="text-sm text-center">
              <span className="text-muted-foreground">Buying multiple items?</span>
              <Button variant="link" className="text-primary p-0 ml-1">Go to multi-select</Button>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-foreground mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-2">
                <Link to="#" className="text-primary hover:underline">{product.description}</Link>
              </div>
              <div className="flex items-center gap-2 mb-2">
                {product.amazonChoice && (
                  <Badge variant="default" className="bg-orange-600">
                    Amazon's Choice
                  </Badge>
                )}
                <span className="text-sm text-muted-foreground">for "bounty paper towels"</span>
              </div>
              <p className="text-sm text-muted-foreground">100+ bought in past month</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="text-sm">{product.rating}</span>
              <Link to="#" className="text-sm text-primary hover:underline">({product.reviews.toLocaleString()} reviews)</Link>
              <Link to="#" className="text-sm text-primary hover:underline">Search this page</Link>
            </div>

            {/* Coupon */}
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <Badge variant="destructive">Coupon</Badge>
                <span className="text-sm">Save an extra 10% on your first Subscribe and Save order.</span>
                <Button variant="link" className="p-0 h-auto text-sm text-primary">Terms</Button>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm text-muted-foreground">Price:</span>
                <span className="text-2xl font-bold text-red-600">
                  ${getCurrentPrice().toFixed(2)}
                </span>
                <span className="text-sm text-muted-foreground">
                  (${(getCurrentPrice() / parseInt(product.specifications["Sheet Count"])).toFixed(4)} /100 Sheets)
                </span>
              </div>
              {product.originalPrice && selectedOption === "one-time" && (
                <div className="text-sm text-muted-foreground line-through mb-2">
                  Was: ${product.originalPrice.toFixed(2)}
                </div>
              )}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm text-green-600">FREE delivery Monday, June 16</span>
                <span className="text-sm text-muted-foreground">to 60201 on orders shipped by</span>
                <span className="text-sm font-medium">Amazon over $35</span>
              </div>
              <div className="text-sm text-muted-foreground">
                <span>Ships from: Amazon</span><br/>
                <span>Sold by: Amazon</span>
              </div>
            </div>

            {/* Subscribe & Save Section */}
            <Card className="mb-6 border-subscription-badge">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-subscription-badge rounded-full p-2">
                    <Recycle className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-semibold text-subscription-badge">Subscribe & Save</h3>
                  <Info className="w-4 h-4 text-muted-foreground" />
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="savings" className="text-xs">5%</Badge>
                    <Badge variant="outline" className="text-xs">15%</Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-red-600">
                      ${calculateSubscribePrice().toFixed(2)}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      (${(calculateSubscribePrice() / parseInt(product.specifications["Sheet Count"])).toFixed(4)} /100 Sheets)
                    </div>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground mb-4">
                  <p>Save 5% now and up to 15% on repeat deliveries.</p>
                  <p>• No fees</p>
                  <p>• Cancel anytime</p>
                </div>

                <Button variant="link" className="p-0 h-auto text-sm text-primary">
                  Learn more
                </Button>
              </CardContent>
            </Card>

            {/* Product Variants */}
            <div className="mb-6">
              <Label className="text-sm font-medium mb-2 block">Size: {product.specifications.Size}</Label>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="p-2 h-auto border-2 border-primary">
                  <div className="text-left">
                    <div className="text-sm font-medium">107 sheet (Pack of 8)</div>
                    <div className="text-xs text-muted-foreground">Current selection</div>
                  </div>
                </Button>
                <Button variant="outline" className="p-2 h-auto">
                  <div className="text-left">
                    <div className="text-sm">107 sheet (Pack of 16)</div>
                  </div>
                </Button>
                <Button variant="outline" className="p-2 h-auto">
                  <div className="text-left">
                    <div className="text-sm">117 sheet (Pack of 12)</div>
                  </div>
                </Button>
                <Button variant="outline" className="p-2 h-auto">
                  <div className="text-left">
                    <div className="text-sm">140 sheet (Pack of 12)</div>
                  </div>
                </Button>
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <Label className="text-sm font-medium mb-2 block">Color: {product.specifications.Color}</Label>
              <div className="grid grid-cols-6 gap-2">
                <Button variant="outline" className="w-16 h-16 border-2 border-primary bg-white"></Button>
              </div>
            </div>

            {/* Product Details Table */}
            <div className="mb-6">
              <table className="w-full text-sm">
                <tbody>
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <tr key={key} className="border-b">
                      <td className="py-2 font-medium text-muted-foreground">{key}</td>
                      <td className="py-2 text-right">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Purchase Type Selection */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <RadioGroup 
                  value={selectedOption} 
                  onValueChange={(value: "one-time" | "subscribe") => setSelectedOption(value)}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="one-time" id="one-time" />
                    <Label htmlFor="one-time" className="flex-1">
                      <div className="flex items-center justify-between">
                        <span>One-time purchase</span>
                        <span className="font-semibold">${product.price.toFixed(2)}</span>
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="subscribe" id="subscribe" />
                    <Label htmlFor="subscribe" className="flex-1">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span>Subscribe & Save</span>
                            <Info className="w-4 h-4 text-muted-foreground" />
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-2">
                              <Badge variant="savings" className="text-xs">5%</Badge>
                              <Badge variant="outline" className="text-xs">15%</Badge>
                            </div>
                            <span className="font-semibold text-red-600">
                              ${calculateSubscribePrice().toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>

                {selectedOption === "subscribe" && (
                  <div className="mt-4 pt-4 border-t">
                    <Label htmlFor="delivery-frequency" className="text-sm font-medium">
                      Deliver every:
                    </Label>
                    <Select value={frequency} onValueChange={setFrequency}>
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {deliveryOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Stock Status */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-600 font-medium">In Stock</span>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4" />
                  <span>FREE delivery Monday, June 16 to 60201 on orders shipped by Amazon over $35</span>
                </div>
                <p>Or fastest Same-Day delivery Today 2 PM - 6 PM. Order within 3 hrs 25 mins</p>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium mb-2 block">Quantity:</Label>
                <Select value={quantity.toString()} onValueChange={(value) => setQuantity(parseInt(value))}>
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1,2,3,4,5,6,7,8,9,10].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedOption === "subscribe" && (
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <p className="text-sm text-yellow-800">Buying in bulk?</p>
                  <p className="text-xs text-yellow-600">Deliver every: {frequency}</p>
                </div>
              )}

              <Button 
                className="w-full" 
                size="lg"
                variant={selectedOption === "subscribe" ? "subscription" : "default"}
              >
                {selectedOption === "subscribe" ? "Set Up Now" : "Add to Cart"}
              </Button>

              <div className="text-xs text-muted-foreground">
                Ships from and sold by Amazon.com
              </div>
            </div>
          </div>
        </div>

        {/* Product Features */}
        <div className="mt-12">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="qa">Q&A</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Product Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reviews">
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">Customer reviews content would go here...</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="qa">
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">Questions and answers content would go here...</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default EnhancedProductDetailPage;