import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Package, Calendar, DollarSign, Settings, Pause, Play, X, Edit, SkipForward, RefreshCw, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const SubscriptionDashboard = () => {
  const [filter, setFilter] = useState("all");
  const { toast } = useToast();

  const subscriptions = [
    {
      id: "1",
      productName: "HP 64XL Black High Yield Original Ink Cartridge",
      image: "/api/placeholder/100/100",
      quantity: 2,
      frequency: "Every 6 weeks",
      nextDelivery: "2024-03-15",
      price: 29.74,
      savings: 5.25,
      status: "active",
      sku: "N9J92AN#140"
    },
    {
      id: "2",
      productName: "Folgers Classic Roast Ground Coffee, 48oz",
      image: "/api/placeholder/100/100",
      quantity: 1,
      frequency: "Monthly",
      nextDelivery: "2024-03-22",
      price: 18.99,
      savings: 2.50,
      status: "active",
      sku: "FOL06114"
    },
    {
      id: "3",
      productName: "Charmin Ultra Soft Toilet Paper, 24 Rolls",
      image: "/api/placeholder/100/100",
      quantity: 1,
      frequency: "Every 2 months",
      nextDelivery: "2024-04-10",
      price: 24.99,
      savings: 3.75,
      status: "paused",
      sku: "PGC94143"
    },
    {
      id: "4",
      productName: "Lysol Disinfecting Wipes, 6 Pack",
      image: "/api/placeholder/100/100",
      quantity: 3,
      frequency: "Every 3 months",
      nextDelivery: "2024-05-15",
      price: 32.49,
      savings: 4.50,
      status: "cancelled",
      sku: "RAC89346"
    }
  ];

  const filteredSubscriptions = subscriptions.filter(sub => 
    filter === "all" || sub.status === filter
  );

  const handlePauseSubscription = (id: string) => {
    toast({
      title: "Subscription Paused",
      description: "Your subscription has been paused. You can resume it anytime.",
    });
  };

  const handleResumeSubscription = (id: string) => {
    toast({
      title: "Subscription Resumed",
      description: "Your subscription has been resumed and will continue as scheduled.",
    });
  };

  const handleCancelSubscription = (id: string) => {
    toast({
      title: "Subscription Cancelled",
      description: "Your subscription has been cancelled. You can restart it anytime from the product page.",
      variant: "destructive",
    });
  };

  const handleSkipNextShipment = (id: string) => {
    toast({
      title: "Shipment Skipped",
      description: "Your next shipment has been skipped. The following delivery will proceed as scheduled.",
    });
  };

  const totalMonthlySavings = subscriptions
    .filter(sub => sub.status === "active")
    .reduce((total, sub) => total + sub.savings, 0);

  const activeSubscriptions = subscriptions.filter(sub => sub.status === "active").length;

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
                <Link to="/products" className="text-foreground hover:text-primary">Products</Link>
                <Link to="/subscribe-save" className="text-foreground hover:text-primary">Subscribe & Save</Link>
                <Link to="/subscriptions" className="text-primary font-medium">My Subscriptions</Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <ShoppingCart className="w-4 h-4" />
                Cart
              </Button>
              <Button size="sm">Account</Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Subscriptions</h1>
          <p className="text-muted-foreground">Manage your Subscribe & Save orders and delivery schedules</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-subscription-badge" />
                <span className="text-2xl font-bold">{activeSubscriptions}</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Monthly Savings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-success" />
                <span className="text-2xl font-bold">${totalMonthlySavings.toFixed(2)}</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Next Delivery</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="text-2xl font-bold">Mar 15</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Subscriptions Management */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Your Subscriptions</CardTitle>
                <CardDescription>Manage your recurring orders and delivery schedules</CardDescription>
              </div>
              <div className="flex items-center gap-4">
                <Select value={filter} onValueChange={setFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Subscriptions</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="paused">Paused</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredSubscriptions.map((subscription) => (
                <Card key={subscription.id} className="border-l-4 border-l-subscription-badge">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-12 gap-4 items-center">
                      {/* Product Info */}
                      <div className="md:col-span-5 flex items-center gap-4">
                        <img 
                          src={subscription.image} 
                          alt={subscription.productName}
                          className="w-16 h-16 object-contain bg-professional-surface rounded"
                        />
                        <div>
                          <h3 className="font-medium text-sm">{subscription.productName}</h3>
                          <p className="text-xs text-muted-foreground">SKU: {subscription.sku}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge 
                              variant={
                                subscription.status === "active" ? "subscription" :
                                subscription.status === "paused" ? "warning" : "destructive"
                              }
                              className="text-xs"
                            >
                              {subscription.status.charAt(0).toUpperCase() + subscription.status.slice(1)}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      {/* Subscription Details */}
                      <div className="md:col-span-4 space-y-1">
                        <div className="text-sm">
                          <span className="text-muted-foreground">Quantity:</span> {subscription.quantity}
                        </div>
                        <div className="text-sm">
                          <span className="text-muted-foreground">Frequency:</span> {subscription.frequency}
                        </div>
                        <div className="text-sm">
                          <span className="text-muted-foreground">Next delivery:</span> {subscription.nextDelivery}
                        </div>
                        <div className="text-sm">
                          <span className="text-muted-foreground">Price:</span> ${subscription.price}
                          <Badge variant="savings" className="ml-2 text-xs">
                            Save ${subscription.savings}
                          </Badge>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="md:col-span-3 flex flex-wrap gap-2">
                        {subscription.status === "active" && (
                          <>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm">
                                  <Edit className="w-4 h-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Edit Subscription</DialogTitle>
                                  <DialogDescription>
                                    Modify your subscription details
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <div>
                                    <label className="text-sm font-medium">Quantity</label>
                                    <Select defaultValue={subscription.quantity.toString()}>
                                      <SelectTrigger>
                                        <SelectValue />
                                      </SelectTrigger>
                                      <SelectContent>
                                        {[1, 2, 3, 4, 5].map(num => (
                                          <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium">Frequency</label>
                                    <Select defaultValue="6-weeks">
                                      <SelectTrigger>
                                        <SelectValue />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="2-weeks">Every 2 weeks</SelectItem>
                                        <SelectItem value="monthly">Monthly</SelectItem>
                                        <SelectItem value="6-weeks">Every 6 weeks</SelectItem>
                                        <SelectItem value="2-months">Every 2 months</SelectItem>
                                        <SelectItem value="3-months">Every 3 months</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  <Button className="w-full">Save Changes</Button>
                                </div>
                              </DialogContent>
                            </Dialog>

                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleSkipNextShipment(subscription.id)}
                            >
                              <SkipForward className="w-4 h-4" />
                            </Button>

                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handlePauseSubscription(subscription.id)}
                            >
                              <Pause className="w-4 h-4" />
                            </Button>
                          </>
                        )}

                        {subscription.status === "paused" && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleResumeSubscription(subscription.id)}
                          >
                            <Play className="w-4 h-4" />
                          </Button>
                        )}

                        {subscription.status !== "cancelled" && (
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="outline" size="sm">
                                <X className="w-4 h-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Cancel Subscription</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Are you sure you want to cancel this subscription? You can restart it anytime from the product page.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Keep Subscription</AlertDialogCancel>
                                <AlertDialogAction onClick={() => handleCancelSubscription(subscription.id)}>
                                  Cancel Subscription
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        )}

                        {subscription.status === "cancelled" && (
                          <Button variant="outline" size="sm" asChild>
                            <Link to={`/product/${subscription.sku}`}>
                              <RefreshCw className="w-4 h-4" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {filteredSubscriptions.length === 0 && (
                <div className="text-center py-12">
                  <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No subscriptions found</h3>
                  <p className="text-muted-foreground mb-4">
                    {filter === "all" 
                      ? "You don't have any subscriptions yet." 
                      : `No ${filter} subscriptions found.`}
                  </p>
                  <Button variant="cta" asChild>
                    <Link to="/subscribe-save">
                      Start Your First Subscription
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <Card className="mt-8 bg-professional-surface">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-2">Need Help with Your Subscriptions?</h3>
              <p className="text-muted-foreground mb-4">
                Our support team is here to help you manage your Subscribe & Save orders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline">Contact Support</Button>
                <Button variant="outline" asChild>
                  <Link to="/subscribe-save">Learn More About Subscribe & Save</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SubscriptionDashboard;