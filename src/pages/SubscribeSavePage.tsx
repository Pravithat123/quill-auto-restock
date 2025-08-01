import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Check, Coffee, Package, Recycle, DollarSign, Clock, Shield, Users, Truck, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

const SubscribeSavePage = () => {
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
                <Link to="/products" className="text-foreground hover:text-primary">Products</Link>
                <Link to="/subscribe-save" className="text-primary font-medium">Subscribe & Save</Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">Cart</Button>
              <Button size="sm">Sign In</Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-light to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="subscription" className="mb-6 text-sm px-4 py-2">
            <Recycle className="w-4 h-4 mr-2" />
            Introducing Subscribe & Save
          </Badge>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Never Run Out.<br />
            <span className="text-primary">Save Time & Money.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Automate your essential business supplies with intelligent restocking. 
            Get the products you need, when you need them, at prices that save your business money.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="cta">
              Start Your First Subscription
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="xl" variant="outline">
              Shop All Eligible Products
            </Button>
          </div>
        </div>
      </section>

      {/* What is Subscribe & Save */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">What is Subscribe & Save?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                A smart way to automate your essential business supplies. Set up recurring deliveries 
                for items you use regularly and enjoy automatic discounts, convenient scheduling, 
                and the peace of mind that you'll never run out.
              </p>
              <div className="space-y-4">
                {[
                  "Automatic reordering based on your schedule",
                  "Exclusive discounts on recurring orders",
                  "Flexible delivery frequency options",
                  "Easy management through your dashboard",
                  "Cancel or pause anytime with no penalties"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-subscription-badge rounded-full p-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-professional-surface rounded-lg p-8">
              <div className="bg-card rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Your Subscription</h3>
                  <Badge variant="subscription">Active</Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Next delivery:</span>
                    <span className="text-sm font-medium">March 15, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Frequency:</span>
                    <span className="text-sm font-medium">Every 6 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Your savings:</span>
                    <Badge variant="savings">Save 15%</Badge>
                  </div>
                  <div className="pt-2 border-t">
                    <Button variant="outline" size="sm" className="w-full">
                      Manage Subscription
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Benefits */}
      <section className="py-16 bg-professional-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits Built for Business</h2>
            <p className="text-xl text-muted-foreground">Everything you need to streamline your supply management</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Save Money",
                description: "Enjoy 5-15% discounts on recurring orders plus free shipping on qualifying purchases.",
                highlight: "Up to 15% off"
              },
              {
                icon: Clock,
                title: "Save Time",
                description: "Set it and forget it. Automatic reordering means one less thing to manage.",
                highlight: "Set & forget"
              },
              {
                icon: Shield,
                title: "Complete Control",
                description: "Pause, cancel, or modify subscriptions anytime. No commitments, no penalties.",
                highlight: "Cancel anytime"
              },
              {
                icon: Truck,
                title: "Flexible Delivery",
                description: "Choose your delivery frequency from weekly to every 6 months. Adjust as needed.",
                highlight: "Your schedule"
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-200">
                <CardHeader>
                  <div className="mx-auto bg-primary-light rounded-full p-4 w-16 h-16 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  <Badge variant="outline" className="mx-auto">{benefit.highlight}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Subscribe & Save Works</h2>
            <p className="text-xl text-muted-foreground">Get started in three simple steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Select Products",
                description: "Choose from thousands of eligible business supplies. Look for the Subscribe & Save badge on product pages.",
                icon: Package
              },
              {
                step: "2",
                title: "Schedule Delivery",
                description: "Pick your delivery frequency and quantity. From weekly to every 6 months - whatever works for your business.",
                icon: RefreshCw
              },
              {
                step: "3",
                title: "Start Saving",
                description: "Enjoy automatic deliveries and exclusive discounts. Manage everything from your subscription dashboard.",
                icon: DollarSign
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="mx-auto bg-primary rounded-full p-6 w-20 h-20 flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-subscription-badge text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 bg-professional-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Subscribe & Save Categories</h2>
            <p className="text-xl text-muted-foreground">Start with the essentials your business uses most</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                icon: Package, 
                title: "Ink & Toner", 
                description: "Never run out of printer supplies",
                savings: "Save up to 15%",
                popular: true
              },
              { 
                icon: Coffee, 
                title: "Coffee & Breakroom", 
                description: "Keep your team energized",
                savings: "Save up to 12%",
                popular: true
              },
              { 
                icon: Package, 
                title: "Cleaning Supplies", 
                description: "Maintain a clean workspace",
                savings: "Save up to 10%",
                popular: false
              },
              { 
                icon: Package, 
                title: "Paper & Office", 
                description: "Essential office supplies",
                savings: "Save up to 8%",
                popular: false
              },
              { 
                icon: Package, 
                title: "Safety & Health", 
                description: "Workplace protection gear",
                savings: "Save up to 12%",
                popular: false
              },
              { 
                icon: Package, 
                title: "Facilities", 
                description: "Building maintenance supplies",
                savings: "Save up to 10%",
                popular: false
              },
              { 
                icon: Package, 
                title: "Food Service", 
                description: "Kitchen and dining supplies",
                savings: "Save up to 8%",
                popular: false
              },
              { 
                icon: Package, 
                title: "Industrial", 
                description: "Heavy-duty work supplies",
                savings: "Save up to 15%",
                popular: false
              }
            ].map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-200 cursor-pointer relative">
                {category.popular && (
                  <Badge variant="subscription" className="absolute -top-2 -right-2 z-10">
                    Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="mx-auto bg-primary-light rounded-full p-4 w-16 h-16 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <category.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription className="text-sm">{category.description}</CardDescription>
                  <Badge variant="savings" className="mx-auto text-xs">
                    {category.savings}
                  </Badge>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" variant="outline">
              View All Eligible Products
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know about Subscribe & Save</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="savings">
              <AccordionTrigger className="text-left">How much can I save with Subscribe & Save?</AccordionTrigger>
              <AccordionContent>
                You can save between 5-15% on eligible products, depending on the item and your subscription frequency. 
                Plus, you'll get free shipping on qualifying orders, which can add up to significant savings over time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="flexibility">
              <AccordionTrigger className="text-left">Can I change or cancel my subscription?</AccordionTrigger>
              <AccordionContent>
                Absolutely! You have complete control over your subscriptions. You can pause, cancel, change quantities, 
                or adjust delivery frequency anytime through your subscription dashboard. There are no penalties or fees for changes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="frequency">
              <AccordionTrigger className="text-left">What delivery frequencies are available?</AccordionTrigger>
              <AccordionContent>
                Choose from weekly, bi-weekly, monthly, every 6 weeks, every 2 months, every 3 months, or every 6 months. 
                You can adjust the frequency anytime to match your actual usage patterns.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="products">
              <AccordionTrigger className="text-left">Which products are eligible for Subscribe & Save?</AccordionTrigger>
              <AccordionContent>
                Thousands of everyday business supplies are eligible, including ink & toner, cleaning supplies, 
                coffee & breakroom items, paper products, safety supplies, and more. Look for the Subscribe & Save badge on product pages.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="shipping">
              <AccordionTrigger className="text-left">How does shipping work with subscriptions?</AccordionTrigger>
              <AccordionContent>
                Subscription orders qualify for free shipping on orders over $45. Your items will be shipped automatically 
                according to your schedule, and you'll receive tracking information for each delivery.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="payment">
              <AccordionTrigger className="text-left">When will I be charged for subscription orders?</AccordionTrigger>
              <AccordionContent>
                Your payment method will be charged when each order ships. You'll receive an email notification 
                3-5 days before your next scheduled delivery with order details and shipping information.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-hover text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Saving?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses already saving time and money with Subscribe & Save
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="secondary">
              Start Your First Subscription
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="xl" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              Browse Eligible Products
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-4">
              <Link to="/terms" className="hover:text-primary">Terms & Conditions</Link> | 
              <Link to="/privacy" className="hover:text-primary ml-1">Privacy Policy</Link> | 
              <Link to="/help" className="hover:text-primary ml-1">Help Center</Link>
            </p>
            <p>&copy; 2024 Quill.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SubscribeSavePage;