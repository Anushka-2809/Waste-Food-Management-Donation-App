import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import HeaderNav from '@/components/HeaderNav';
import StatsSection from '@/components/StatsSection';
import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
  const { isAuthenticated } = useAuth();
  const testimonials = [
    {
      quote: "I was able to feed my family tonight because of this platform. Thank you!",
      author: "Lakshmi, Chennai"
    },
    {
      quote: "We had excess food from our event and easily found people who needed it.",
      author: "Raj Catering, Coimbatore"
    },
    {
      quote: "This platform makes it so easy to donate and help those in need.",
      author: "Anand, Madurai"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderNav />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[hsl(var(--card))] via-[hsl(var(--background))] to-[hsl(var(--primary))] py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="text-primary">Share</span> Food, <br />
              <span className="text-orange-400">Spread</span> Happiness
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Join our community in Kolkata to donate excess food and help those in need. Together, we can reduce food waste and fight hunger.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-6 rounded-lg text-lg shadow-md">
                <Link to="/donate">Donate Food</Link>
              </Button>
              <Button asChild variant="outline" className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-6 rounded-lg text-lg">
                <Link to="/find-food">Find Food</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <img
              src="https://i.pinimg.com/1200x/6c/c2/3a/6cc23a1f120a0dfdabb8c420c052b5fd.jpg"
              alt="Food Sharing in Kolkata"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* How It Works Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="bg-foodie-orange/20 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-foodie-orange">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Donate Excess Food</h3>
              <p className="text-muted-foreground">
                Restaurants, caterers, and individuals can easily donate their excess food through our platform.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-foodie-green/20 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-foodie-green">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Browse Available Food</h3>
              <p className="text-muted-foreground">
                Those in need can browse and request available food donations in their area.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-foodie-orange/20 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-foodie-orange">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Coordinate Pickup/Delivery</h3>
              <p className="text-muted-foreground">
                We help coordinate the pickup or delivery of food to ensure it reaches those who need it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-md border">
                <div className="text-foodie-orange text-4xl mb-4">"</div>
                <p className="text-foreground mb-4">{testimonial.quote}</p>
                <p className="text-muted-foreground font-medium">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            Every food donation counts. Join our community today and help reduce food waste while feeding those in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {isAuthenticated ? (
              <>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/80 px-8 py-3 text-lg rounded-lg shadow-md">
                  <Link to="/donate">Donate Food</Link>
                </Button>
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-3 text-lg rounded-lg">
                  <Link to="/find-food">Find Food</Link>
                </Button>
              </>
            ) : (
              <>
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-3 text-lg rounded-lg">
                  <Link to="/login">Log In</Link>
                </Button>
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-3 text-lg rounded-lg">
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] py-10 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FoodieGrandpa</h3>
              <p className="text-muted-foreground dark:text-[hsl(var(--muted-foreground))]">
                Connecting food donors with those in need across Kolkata.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-muted-foreground dark:text-[hsl(var(--muted-foreground))] hover:text-white">Home</Link></li>
                <li><Link to="/donate" className="text-muted-foreground dark:text-[hsl(var(--muted-foreground))] hover:text-white">Donate Food</Link></li>
                <li><Link to="/receive" className="text-muted-foreground dark:text-[hsl(var(--muted-foreground))] hover:text-white">Receive Food</Link></li>
                <li><Link to="/find-food" className="text-muted-foreground dark:text-[hsl(var(--muted-foreground))] hover:text-white">Find Food</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-muted-foreground dark:text-[hsl(var(--muted-foreground))]">
                Email: contact@foodiegrandpa.org<br />
                Phone: +91 98765 43210
              </p>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-6 text-center text-muted-foreground dark:text-[hsl(var(--muted-foreground))]">
            <p>© 2025 FoodieGrandpa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
