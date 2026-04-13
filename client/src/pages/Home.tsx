import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

/**
 * Design System: Luxe Minimalist
 * - Deep Purple (#4b0082) + Brushed Gold (#daa520)
 * - Playfair Display (serif) for headlines, Lato for body
 * - Generous whitespace, thin gold dividers, premium feel
 */

const CALENDLY_LINK = "https://calendly.com/purpleumbrellafoods/chef";

const mealPlans = [
  {
    name: "High-Protein",
    description: "Clean, filling meals designed to support strength, recovery, and healthy weight goals.",
    samples: ["Grilled Chicken & Vegetables", "Lean Beef & Brown Rice", "Salmon & Sweet Potato"],
    price: "$95+/week",
  },
  {
    name: "Vegan",
    description: "Flavor-packed plant-based meals made to feel hearty, colorful, and satisfying.",
    samples: ["Quinoa Buddha Bowl", "Chickpea Curry", "Roasted Vegetable Medley"],
    price: "$95+/week",
  },
  {
    name: "Keto",
    description: "Low-carb options with rich flavor and balanced ingredients for focused eating.",
    samples: ["Steak & Avocado", "Salmon with Cauliflower", "Pork Chops & Greens"],
    price: "$95+/week",
  },
  {
    name: "Southern Healthy",
    description: "Comfort food inspired by Southern flavors, prepared in a lighter and healthier way.",
    samples: ["Baked Fried Chicken", "Collard Greens", "Cornbread (Lighter Version)"],
    price: "$95+/week",
  },
  {
    name: "College Kids",
    description: "Affordable, practical meal options made for students who need good food without the stress.",
    samples: ["Pasta with Protein", "Hearty Rice Bowls", "Budget-Friendly Protein Plates"],
    price: "$60/week",
  },
];

const pricingOptions = [
  { title: "Standard Weekly Plan", subtitle: "Lunch + Dinner", price: "$95+", period: "per week" },
  { title: "Monthly Plan Discount", subtitle: "Lunch + Dinner", price: "$75", period: "per week (full month)" },
  { title: "College Students Weekly", subtitle: "Lunch + Dinner", price: "$60", period: "per week" },
  { title: "Sunday Dinner Add-On", subtitle: "Family-style dinner", price: "$60+", period: "per week" },
];

const addOns = [
  { name: "Desserts", description: "Sweet extras that still fit your lifestyle" },
  { name: "Cheat Day Items", description: "Treats worth planning for" },
  { name: "Flavored Popcorn", description: "Fun, craveable snack add-ons" },
  { name: "Sunday Dinners", description: "Comfort-filled family-style options for the week ahead" },
];

const faqs = [
  {
    question: "How do I place an order?",
    answer: "Simply click 'Book Your Meals' and schedule through our Calendly calendar. Chef Don will reach out to confirm your booking.",
  },
  {
    question: "When are deliveries made?",
    answer: "We deliver on Tuesdays and Thursdays. Choose your preferred delivery day when booking.",
  },
  {
    question: "What is the last day to book for the upcoming week?",
    answer: "The last day to book for the upcoming week is Saturday. After that, you can book for the following week.",
  },
  {
    question: "Do you offer meal plans for students?",
    answer: "Yes! Our College Kids Plan is $60/week and includes lunch and dinner options designed for student budgets.",
  },
  {
    question: "Can I book Sunday dinners?",
    answer: "Absolutely! Sunday Dinners are available as an add-on for $60+ per week. They're perfect for family meals.",
  },
  {
    question: "Do you offer private catering?",
    answer: "Yes, we offer private catering with at least one week advance notice. Contact us for custom quotes and details.",
  },
  {
    question: "Can I preorder meals?",
    answer: "Yes! We accept preorders. Reach out through our booking system or contact us directly for preorder arrangements.",
  },
];

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663548141538/kfunPkHKQ8ehKBruz2bxaE/puf-favicon-EdWo57KtMb3j6QN9HksojY.png"
              alt="Purple Umbrella Foods Logo"
              className="h-8 w-8"
            />
            <span className="font-serif font-bold text-lg text-primary">PUF</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#plans" className="hover:text-accent transition-colors">Plans</a>
            <a href="#pricing" className="hover:text-accent transition-colors">Pricing</a>
            <a href="#how-it-works" className="hover:text-accent transition-colors">How It Works</a>
            <a href="#faq" className="hover:text-accent transition-colors">FAQ</a>
          </div>
          <Button
            onClick={() => window.open(CALENDLY_LINK, "_blank")}
            className="premium-button"
          >
            Book Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
                Purple Umbrella Foods
              </h1>
              <div className="h-1 w-24 bg-accent"></div>
              <p className="text-xl md:text-2xl italic text-primary-foreground/90">
                Nourishing healthy lives from head to soul.
              </p>
              <p className="text-lg text-primary-foreground/80">
                Healthy food that feeds your body, focus, and future.
              </p>
              <div className="flex gap-4 pt-4">
                <Button
                  onClick={() => window.open(CALENDLY_LINK, "_blank")}
                  className="premium-button"
                >
                  Book Your Meals
                </Button>
                <Button
                  onClick={() => document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" })}
                  className="premium-button-outline"
                >
                  View Plans
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663548141538/kfunPkHKQ8ehKBruz2bxaE/puf-hero-banner-msEDEYHivM5aVsjoNTMPDB.webp"
                alt="Premium meal prep"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Owner Section */}
      <section id="about" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663548141538/kfunPkHKQ8ehKBruz2bxaE/PurpleUmbrellaFoods_Final-msEDEYHivM5aVsjoNTMPDB.webp"
                alt="Chef Don Anthony"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif font-bold">Meet Chef Don Anthony</h2>
              <div className="h-1 w-24 bg-accent"></div>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Chef Don Anthony is the founder of Purple Umbrella Foods, established in 2020 with a mission to make healthy eating feel satisfying, practical, and full of flavor. Trained in culinary school in Los Angeles and backed by over 30 years of cooking experience, Chef Don brings both skill and heart to every meal.
                </p>
                <p>
                  His journey was shaped by his own commitment to a healthier lifestyle after facing obesity and diabetes, which inspired him to create better-tasting healthy options for real people with real goals. Purple Umbrella Foods was built to serve families, professionals, and students who want food that supports their wellness without sacrificing comfort, culture, or taste.
                </p>
                <p className="italic text-accent font-semibold">
                  "Every plate is prepared with purpose, flavor, and care."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meal Plans Section */}
      <section id="plans" className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <h2 className="section-title">Discover Your Perfect Plan</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {mealPlans.map((plan, idx) => (
              <Card key={idx} className="premium-card flex flex-col">
                <h3 className="text-2xl font-serif font-bold text-primary mb-3">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="my-4 h-px bg-accent/30"></div>
                <div className="space-y-2 mb-6 flex-grow">
                  {plan.samples.map((sample, i) => (
                    <p key={i} className="text-sm text-foreground">• {sample}</p>
                  ))}
                </div>
                <div className="space-y-3">
                  <p className="font-serif font-bold text-lg text-primary">{plan.price}</p>
                  <Button
                    onClick={() => window.open(CALENDLY_LINK, "_blank")}
                    className="w-full premium-button"
                  >
                    Book Plan
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32 bg-background">
        <div className="container">
          <h2 className="section-title">Transparent Pricing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingOptions.map((option, idx) => (
              <Card key={idx} className="premium-card text-center">
                <h3 className="font-serif font-bold text-lg mb-2">{option.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{option.subtitle}</p>
                <div className="h-px bg-accent/30 my-4"></div>
                <p className="text-3xl font-serif font-bold text-accent mb-1">{option.price}</p>
                <p className="text-sm text-muted-foreground">{option.period}</p>
              </Card>
            ))}
          </div>
          <div className="mt-12 bg-primary/10 border border-primary/20 rounded-lg p-8">
            <h3 className="font-serif font-bold text-xl mb-4">Add-On Pricing</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-primary">Cheat Day Items</p>
                <p className="text-muted-foreground">$10 with monthly plan • $15 with weekly plan</p>
              </div>
              <div>
                <p className="font-semibold text-primary">Sunday Dinner Add-On</p>
                <p className="text-muted-foreground">$60+ per week</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <h2 className="section-title">Enhance Your Order</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, idx) => (
              <Card key={idx} className="premium-card">
                <h3 className="font-serif font-bold text-xl text-primary mb-2">{addon.name}</h3>
                <p className="text-muted-foreground">{addon.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-32 bg-background">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-serif font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl mb-2">Book Through Calendly</h3>
                <p className="text-muted-foreground">
                  Visit our Calendly link to select your meal plan, delivery day, and preferences.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-serif font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl mb-2">Chef Don Confirms</h3>
                <p className="text-muted-foreground">
                  Chef Don will personally reach out to confirm your booking and discuss any dietary preferences.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-serif font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl mb-2">Receive Your Meals</h3>
                <p className="text-muted-foreground">
                  Meals are delivered on Tuesdays or Thursdays. Last booking day for the upcoming week is Saturday.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-serif font-bold">
                  4
                </div>
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl mb-2">Enjoy & Renew</h3>
                <p className="text-muted-foreground">
                  Enjoy your meals and renew your order for the next week or switch plans anytime.
                </p>
              </div>
            </div>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mt-8">
              <h3 className="font-serif font-bold text-lg mb-3">Special Services</h3>
              <ul className="space-y-2 text-sm">
                <li>• <span className="font-semibold">Private Catering:</span> Requires one week advance notice</li>
                <li>• <span className="font-semibold">Preorders:</span> Available for future meal dates</li>
                <li>• <span className="font-semibold">Custom Requests:</span> Contact Chef Don directly for exceptions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <Card
                key={idx}
                className="premium-card cursor-pointer"
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-lg">{faq.question}</h3>
                  <ChevronDown
                    className={`transition-transform ${expandedFaq === idx ? "rotate-180" : ""}`}
                  />
                </div>
                {expandedFaq === idx && (
                  <div className="mt-4 pt-4 border-t border-border text-muted-foreground">
                    {faq.answer}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-center p-8">
              <Mail className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h3 className="font-serif font-bold text-lg mb-2">Email</h3>
              <a
                href="mailto:purpleumbrellafoods@gmail.com"
                className="hover:text-accent transition-colors"
              >
                purpleumbrellafoods@gmail.com
              </a>
            </Card>
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-center p-8">
              <Phone className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h3 className="font-serif font-bold text-lg mb-2">Phone</h3>
              <a href="tel:803-380-3187" className="hover:text-accent transition-colors">
                803-380-3187
              </a>
            </Card>
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-center p-8">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h3 className="font-serif font-bold text-lg mb-2">Book Now</h3>
              <Button
                onClick={() => window.open(CALENDLY_LINK, "_blank")}
                className="w-full mt-2 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Schedule Consultation
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663548141538/kfunPkHKQ8ehKBruz2bxaE/puf-favicon-EdWo57KtMb3j6QN9HksojY.png"
                  alt="Purple Umbrella Foods"
                  className="h-8 w-8"
                />
                <span className="font-serif font-bold text-lg">Purple Umbrella Foods</span>
              </div>
              <p className="text-sm opacity-75">Nourishing healthy lives from head to soul.</p>
            </div>
            <div>
              <h4 className="font-serif font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#plans" className="hover:text-accent transition-colors">Meal Plans</a></li>
                <li><a href="#pricing" className="hover:text-accent transition-colors">Pricing</a></li>
                <li><a href="#how-it-works" className="hover:text-accent transition-colors">How It Works</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:purpleumbrellafoods@gmail.com" className="hover:text-accent transition-colors">Email Us</a></li>
                <li><a href="tel:803-380-3187" className="hover:text-accent transition-colors">Call Us</a></li>
                <li><a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Book Now</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-accent transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8">
            <p className="text-center text-sm opacity-75">
              © 2020-{new Date().getFullYear()} Purple Umbrella Foods. All rights reserved. | Founded by Chef Don Anthony
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
