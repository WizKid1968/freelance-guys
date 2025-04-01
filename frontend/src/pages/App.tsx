import React from "react";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="https://static.databutton.com/public/e0c383b5-8649-4278-a579-35f75f411c2c/icon.svg" alt="FreelanceGuys Pro Logo" className="w-8 h-8" />
            <span className="text-xl font-bold tracking-tight">FreelanceGuys Pro</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
            <a onClick={() => navigate('/pricing')} className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Pricing</a>
            <a onClick={() => navigate('/contact')} className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Contact</a>
          </nav>
          <button 
            onClick={() => navigate('/pricing')} 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            View Pricing
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <img src="https://static.databutton.com/public/e0c383b5-8649-4278-a579-35f75f411c2c/icon.svg" alt="FreelanceGuys Pro Logo" className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block">AI-Powered Solutions for</span>
              <span className="text-primary">Modern Service Providers</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-muted-foreground">
              Elevate your client experience with AI chatbots, voice assistants, and SEO optimization designed for professional service firms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/pricing')} 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md text-base font-medium transition-colors"
              >
                View Pricing Plans
              </button>
              <button 
                onClick={() => navigate('/contact')} 
                className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-6 py-3 rounded-md text-base font-medium transition-colors"
              >
                Book a Demo
              </button>
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section id="features" className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Solutions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-card rounded-lg p-6 shadow-sm border border-border flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Automation</h3>
                <p className="text-muted-foreground">Smart chatbots and voice assistants handle appointments and answer client questions 24/7.</p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-card rounded-lg p-6 shadow-sm border border-border flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Strategic SEO</h3>
                <p className="text-muted-foreground">Comprehensive SEO packages tailored to your industry for maximum visibility.</p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-card rounded-lg p-6 shadow-sm border border-border flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
                <p className="text-muted-foreground">Clear, flat-rate packages with all features included and optional add-ons for customization.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary/5 border-t border-b border-border">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Client Experience?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
              Choose from our three comprehensive packages designed for service providers of every size.  
            </p>
            <button 
              onClick={() => navigate('/pricing')} 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md text-base font-medium transition-colors inline-flex items-center"
            >
              View Pricing Plans
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <img src="https://static.databutton.com/public/e0c383b5-8649-4278-a579-35f75f411c2c/icon.svg" alt="FreelanceGuys Pro Logo" className="w-7 h-7" />
              <span className="font-bold">FreelanceGuys Pro</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} FreelanceGuys Pro. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
