import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, Mail, Phone, MapPin, Star, Zap, Heart, TrendingUp } from "lucide-react";
import { useState } from "react";

/**
 * Design System: Modern Dark Theme with HelloFresh Aesthetic
 * - Black background (#0a0a0a) with white text (#f5f5f5)
 * - Gold accents (#daa520) for hover and highlights
 * - Fading color gradients and smooth transitions
 * - Clean, minimal layout with premium imagery
 */

const CALENDLY_LINK = "https://calendly.com/purpleumbrellafoods/chef";

const mealPlans = [
  {
    name: "High-Protein",
    description: "Clean, filling meals designed to support strength, recovery, and healthy weight goals.",
    samples: ["Grilled Chicken & Vegetables", "Lean Beef & Brown Rice", "Salmon & Sweet Potato"],
    price: "$95+",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663548141538/kfunPkHKQ8ehKBruz2bxaE/puf-meal-highprotein-kGhL39P4Juo7KMfo5MWECz.webp",
  },
  {
    name: "Vegan",
    description: "Flavor-packed plant-based meals made to feel hearty, colorful, and satisfying.",
    samples: ["Quinoa Buddha Bowl", "Chickpea Curry", "Roasted Vegetable Medley"],
    price: "$95+",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663548141538/kfunPkHKQ8ehKBruz2bxaE/puf-meal-vegan-2uiSdJWQtBzswEdsSP2W7e.webp",
  },
  {
    name: "Keto",
    description: "Low-carb options with rich flavor and balanced ingredients for focused eating.",
    samples: ["Steak & Avocado", "Salmon with Cauliflower", "Pork Chops & Greens"],
    price: "$95+",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663548141538/kfunPkHKQ8ehKBruz2bxaE/puf-meal-keto-58xj7BgeJqDwoRBrXiBrHL.webp",
  },
  {
    name: "Southern Healthy",
    description: "Comfort food inspired by Southern flavors, prepared in a lighter and healthier way.",
    samples: ["Baked Fried Chicken", "Collard Greens", "Cornbread (Lighter Version)"],
    price: "$95+",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663548141538/kfunPkHKQ8ehKBruz2bxaE/puf-meal-southern-KpBQzE2vCEys6zbPGde9cT.webp",
  },
  {
    name: "College Kids",
    description: "Affordable, practical meal options made for students who need good food without the stress.",
    samples: ["Pasta with Protein", "Hearty Rice Bowls", "Budget-Friendly Protein Plates"],
    price: "$60",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663548141538/kfunPkHKQ8ehKBruz2bxaE/puf-meal-college-updated-jyjMzAucWDd6Y7JVD7KJk7.webp",
  }
];

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Fresh Daily",
    description: "Prepared fresh each week with premium ingredients",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Crafted with Care",
    description: "30+ years of culinary expertise in every meal",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Results Driven",
    description: "Designed to support your health and fitness goals",
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "Premium Quality",
    description: "No shortcuts, only quality ingredients",
  },
];

const pricingOptions = [
  { title: "Standard Weekly", subtitle: "Lunch + Dinner", price: "$95+", period: "per week" },
  { title: "Monthly Discount", subtitle: "Lunch + Dinner", price: "$75", period: "per week" },
  { title: "College Students", subtitle: "Lunch + Dinner", price: "$60", period: "per week" },
  { title: "Sunday Dinner", subtitle: "Family-style", price: "$60+", period: "per week" },
];

const addOns = [
  { name: "Desserts", description: "Sweet extras that still fit your lifestyle" },
  { name: "Cheat Day Items", description: "Treats worth planning for" },
  { name: "Flavored Popcorn", description: "Fun, craveable snack add-ons" },
  { name: "Sunday Dinners", description: "Comfort-filled family-style options" },
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
          <div className="flex items-center gap-3">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663548141538/kfunPkHKQ8ehKBruz2bxaE/puf-logo-transparent-fh8dmZJv3zmLfMPdtdNQfd.webp"
              alt="Purple Umbrella Foods Logo"
              className="h-10 w-10"
            />
            <span className="font-serif font-bold text-xl text-accent">PUF</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-secondary-foreground hover:text-accent transition-colors duration-300">About</a>
            <a href="#plans" className="text-secondary-foreground hover:text-accent transition-colors duration-300">Plans</a>
            <a href="#pricing" className="text-secondary-foreground hover:text-accent transition-colors duration-300">Pricing</a>
            <a href="#how-it-works" className="text-secondary-foreground hover:text-accent transition-colors duration-300">How It Works</a>
            <a href="#faq" className="text-secondary-foreground hover:text-accent transition-colors duration-300">FAQ</a>
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
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-secondary/20 py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 z-10">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
                  Purple Umbrella
                  <span className="block text-accent">Foods</span>
                </h1>
              </div>
              <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent/40"></div>
              <p className="text-xl md:text-2xl text-secondary-foreground italic">
                Nourishing healthy lives from head to soul.
              </p>
              <p className="text-lg text-secondary-foreground">
                Healthy food that feeds your body, focus, and future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
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
            <div className="hidden md:block relative h-96">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663548141538/kfunPkHKQ8ehKBruz2bxaE/puf-mobile-hero-FjjsSKjadZFttNmA5SQNeS.webp"
                alt="Premium meal prep"
                className="rounded-lg shadow-2xl w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gradient-fade-sides">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center space-y-3">
                <div className="flex justify-center text-accent mb-2">
                  {feature.icon}
                </div>
                <h3 className="font-serif font-bold text-lg">{feature.title}</h3>
                <p className="text-secondary-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 order-2 md:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663548141538/kfunPkHKQ8ehKBruz2bxaE/puf-section-about-JRd9ifsEJsqNBZkJtQomdt.webp"
                alt="Premium ingredients and kitchen"
                className="rounded-lg shadow-2xl w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-serif font-bold">
                Meet Chef
                <span className="block text-accent">Don Anthony</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent/40"></div>
              <div className="space-y-4 text-secondary-foreground leading-relaxed">
                <p>
                  Chef Don Anthony is the founder of Purple Umbrella Foods, established in 2020 with a mission to make healthy eating feel satisfying, practical, and full of flavor. Trained in culinary school in Los Angeles and backed by over 30 years of cooking experience, Chef Don brings both skill and heart to every meal.
                </p>
                <p>
                  His journey was shaped by his own commitment to a healthier lifestyle after facing obesity and diabetes, which inspired him to create better-tasting healthy options for real people with real goals. Purple Umbrella Foods was built to serve families, professionals, and students who want food that supports their wellness without sacrificing comfort, culture, or taste.
                </p>
                <p className="italic text-accent font-semibold text-lg">
                  "Every plate is prepared with purpose, flavor, and care."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meal Plans Section */}
      <section id="plans" className="py-20 md:py-32 bg-gradient-to-b from-background via-secondary/10 to-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Discover Your Perfect Plan</h2>
            <p className="text-secondary-foreground text-lg max-w-2xl mx-auto">
              Choose from our carefully crafted meal plans, each designed to meet your unique health and lifestyle goals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {mealPlans.map((plan, idx) => (
              <Card key={idx} className="premium-card flex flex-col overflow-hidden group">
                <div className="relative h-40 overflow-hidden rounded-t-lg mb-4 -m-6 mb-4">
                  <img
                    src={plan.image}
                    alt={plan.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-accent mb-2">{plan.name}</h3>
                <p className="text-sm text-secondary-foreground mb-4 flex-grow">{plan.description}</p>
                <div className="my-4 h-px bg-gradient-to-r from-accent/30 to-transparent"></div>
                <div className="space-y-2 mb-6 flex-grow">
                  {plan.samples.map((sample, i) => (
                    <p key={i} className="text-sm text-secondary-foreground">• {sample}</p>
                  ))}
                </div>
                <div className="space-y-3">
                  <p className="font-serif font-bold text-2xl text-accent">{plan.price}<span className="text-sm text-secondary-foreground">/week</span></p>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {pricingOptions.map((option, idx) => (
              <Card key={idx} className="premium-card text-center">
                <h3 className="font-serif font-bold text-lg mb-2">{option.title}</h3>
                <p className="text-sm text-secondary-foreground mb-4">{option.subtitle}</p>
                <div className="h-px bg-gradient-to-r from-accent/30 via-accent/10 to-accent/30 my-4"></div>
                <p className="text-3xl font-serif font-bold text-accent mb-1">{option.price}</p>
                <p className="text-sm text-secondary-foreground">{option.period}</p>
              </Card>
            ))}
          </div>
          <div className="bg-secondary/30 border border-border rounded-lg p-8">
            <h3 className="font-serif font-bold text-xl mb-4 text-accent">Add-On Pricing</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-foreground">Cheat Day Items</p>
                <p className="text-secondary-foreground">$10 with monthly plan • $15 with weekly plan</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Sunday Dinner Add-On</p>
                <p className="text-secondary-foreground">$60+ per week</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background via-secondary/10 to-background">
        <div className="container">
          <h2 className="section-title">Enhance Your Order</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, idx) => (
              <Card key={idx} className="premium-card hover:border-accent/50">
                <h3 className="font-serif font-bold text-xl text-accent mb-2">{addon.name}</h3>
                <p className="text-secondary-foreground">{addon.description}</p>
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
            {[
              { num: 1, title: "Book Through Calendly", desc: "Visit our Calendly link to select your meal plan, delivery day, and preferences." },
              { num: 2, title: "Chef Don Confirms", desc: "Chef Don will personally reach out to confirm your booking and discuss any dietary preferences." },
              { num: 3, title: "Receive Your Meals", desc: "Meals are delivered on Tuesdays or Thursdays. Last booking day for the upcoming week is Saturday." },
              { num: 4, title: "Enjoy & Renew", desc: "Enjoy your meals and renew your order for the next week or switch plans anytime." },
            ].map((step) => (
              <div key={step.num} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-serif font-bold text-lg">
                    {step.num}
                  </div>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-secondary-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
            <div className="bg-secondary/30 border border-border rounded-lg p-6 mt-8">
              <h3 className="font-serif font-bold text-lg mb-3 text-accent">Special Services</h3>
              <ul className="space-y-2 text-secondary-foreground">
                <li>• <span className="font-semibold text-foreground">Private Catering:</span> Requires one week advance notice</li>
                <li>• <span className="font-semibold text-foreground">Preorders:</span> Available for future meal dates</li>
                <li>• <span className="font-semibold text-foreground">Custom Requests:</span> Contact Chef Don directly for exceptions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32 bg-gradient-to-b from-background via-secondary/10 to-background">
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
                    className={`transition-transform duration-300 text-accent ${expandedFaq === idx ? "rotate-180" : ""}`}
                  />
                </div>
                {expandedFaq === idx && (
                  <div className="mt-4 pt-4 border-t border-border text-secondary-foreground">
                    {faq.answer}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background via-accent/5 to-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-secondary/50 border-border text-center p-8 hover:border-accent/50">
              <Mail className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h3 className="font-serif font-bold text-lg mb-2">Email</h3>
              <a
                href="mailto:purpleumbrellafoods@gmail.com"
                className="text-secondary-foreground hover:text-accent transition-colors duration-300 break-all text-sm"
              >
                purpleumbrellafoods@gmail.com
              </a>
            </Card>
            <Card className="bg-secondary/50 border-border text-center p-8 hover:border-accent/50">
              <Phone className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h3 className="font-serif font-bold text-lg mb-2">Phone</h3>
              <a href="tel:803-380-3187" className="text-secondary-foreground hover:text-accent transition-colors duration-300">
                803-380-3187
              </a>
            </Card>
            <Card className="bg-secondary/50 border-border text-center p-8 hover:border-accent/50">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h3 className="font-serif font-bold text-lg mb-2">Book Now</h3>
              <Button
                onClick={() => window.open(CALENDLY_LINK, "_blank")}
                className="w-full mt-2 premium-button"
              >
                Schedule
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-foreground py-12 border-t border-border">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663548141538/kfunPkHKQ8ehKBruz2bxaE/puf-logo-transparent-fh8dmZJv3zmLfMPdtdNQfd.webp"
                  alt="Purple Umbrella Foods"
                  className="h-8 w-8"
                />
                <span className="font-serif font-bold text-lg text-accent">PUF</span>
              </div>
              <p className="text-secondary-foreground text-sm">Nourishing healthy lives from head to soul.</p>
            </div>
            <div>
              <h4 className="font-serif font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="text-secondary-foreground hover:text-accent transition-colors">About</a></li>
                <li><a href="#plans" className="text-secondary-foreground hover:text-accent transition-colors">Meal Plans</a></li>
                <li><a href="#pricing" className="text-secondary-foreground hover:text-accent transition-colors">Pricing</a></li>
                <li><a href="#how-it-works" className="text-secondary-foreground hover:text-accent transition-colors">How It Works</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:purpleumbrellafoods@gmail.com" className="text-secondary-foreground hover:text-accent transition-colors">Email Us</a></li>
                <li><a href="tel:803-380-3187" className="text-secondary-foreground hover:text-accent transition-colors">Call Us</a></li>
                <li><a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="text-secondary-foreground hover:text-accent transition-colors">Book Now</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-secondary-foreground hover:text-accent transition-colors">Facebook</a></li>
                <li><a href="#" className="text-secondary-foreground hover:text-accent transition-colors">Instagram</a></li>
                <li><a href="#" className="text-secondary-foreground hover:text-accent transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-center text-sm text-secondary-foreground">
              © 2020-{new Date().getFullYear()} Purple Umbrella Foods. All rights reserved. | Founded by Chef Don Anthony
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
