import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FeatureAccordion } from "components/FeatureAccordion";
import { PlanTabs } from "components/PlanTabs";
import { starterFeatures, professionalFeatures, premiumFeatures, addOnsFAQ, planSpecificFAQ } from "utils/pricingData";
import { InfoIcon } from "lucide-react";

// Icons for features
const featureIcons = {
  chatbot: (
    <svg className="w-4 h-4 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  ),
  voice: (
    <svg className="w-4 h-4 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  ),
  seo: (
    <svg className="w-4 h-4 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  ),
  sms: (
    <svg className="w-4 h-4 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15.46l-5.27-.61-2.52 2.52a15.045 15.045 0 01-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51z"></path>
    </svg>
  ),
  hosting: (
    <svg className="w-4 h-4 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
  ),
  training: (
    <svg className="w-4 h-4 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
    </svg>
  ),
  included: (
    <svg className="w-4 h-4 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  )
};

export default function Pricing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
            <img src="https://static.databutton.com/public/e0c383b5-8649-4278-a579-35f75f411c2c/icon.svg" alt="FreelanceGuys Pro Logo" className="w-10 h-10" />
            <span className="text-xl font-bold tracking-tight">FreelanceGuys Pro</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a onClick={() => navigate('/')} className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Home</a>
            <a href="#" className="text-sm font-medium text-primary">Pricing</a>
            <a onClick={() => navigate('/contact')} className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Contact</a>
          </nav>
          <button 
            onClick={() => navigate('/contact')} 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Book a Demo
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-16">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Transparent, Flat-Rate Pricing</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your business with our all-inclusive packages. 
            No hidden fees, no surprises—just predictable value.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <div className="relative bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col h-auto">
            {/* Card Header */}
            <div className="bg-secondary p-6 text-center">
              <h3 className="text-xl font-bold mb-1">Starter Package</h3>
              <p className="text-sm text-muted-foreground mb-4">Essential AI + SEO</p>
              <div className="mb-4">
                <span className="text-3xl font-bold">$2,499</span>
                <span className="text-muted-foreground"> flat rate</span>
              </div>
              <p className="text-sm text-muted-foreground italic">Ideal for solo practitioners, small offices, or clinics needing basics.</p>
            </div>

            {/* Card Body - Features with Tabs */}
            <div className="p-6 flex-grow">
              <PlanTabs 
                features={
                  <div className="space-y-4">
                    {starterFeatures.map((feature, index) => (
                      <FeatureAccordion 
                        key={index}
                        title={feature.title}
                        items={feature.items}
                        icon={feature.title.includes("Chatbot") ? featureIcons.chatbot : 
                              feature.title.includes("SEO") ? featureIcons.seo :
                              feature.title.includes("SMS") ? featureIcons.sms :
                              feature.title.includes("Hosting") ? featureIcons.hosting :
                              feature.title.includes("Training") ? featureIcons.training :
                              featureIcons.included}
                        details={feature.details}
                      />
                    ))}
                  </div>
                }
                details={
                  <div className="space-y-4 py-2">
                    <div className="bg-muted/40 rounded-md p-4">
                      <h4 className="font-medium mb-2 flex items-center">
                        <InfoIcon className="h-4 w-4 mr-2 text-primary" />
                        Perfect For
                      </h4>
                      <p className="text-sm text-muted-foreground">Solo practitioners, small offices, or clinics that need the essential basics without all the bells and whistles. Ideal for businesses with 1-5 employees handling up to 50 client interactions per day.</p>
                    </div>
                    
                    <div className="bg-muted/40 rounded-md p-4">
                      <h4 className="font-medium mb-2 flex items-center">
                        <InfoIcon className="h-4 w-4 mr-2 text-primary" />
                        Key Benefits
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li className="flex items-start">
                          <svg className="w-3.5 h-3.5 text-primary mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>Reduce missed calls and no-shows by up to 30%</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-3.5 h-3.5 text-primary mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>Save 15+ hours per week on routine client interactions</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-3.5 h-3.5 text-primary mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>Improve local search visibility with fundamental SEO</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted/40 rounded-md p-4">
                      <h4 className="font-medium mb-2 flex items-center">
                        <InfoIcon className="h-4 w-4 mr-2 text-primary" />
                        Implementation & Timeline
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">Setup completed within 2-3 weeks from receiving your content and access information.</p>
                      <ol className="text-sm text-muted-foreground space-y-1 list-decimal ml-5">
                        <li>Initial consultation and requirements gathering (Week 1)</li>
                        <li>Setup and configuration of all systems (Week 2)</li>
                        <li>Testing, training and launch (Week 3)</li>
                      </ol>
                    </div>
                  </div>
                }
                faq={
                  <div className="space-y-4 py-2">
                    {planSpecificFAQ.starter.map((item, index) => (
                      <div key={index} className="bg-muted/40 rounded-md p-4">
                        <h4 className="font-medium mb-1">{item.question}</h4>
                        <p className="text-sm text-muted-foreground">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                }
              />

              {/* Add-ons */}
              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="font-semibold mb-2 flex items-center">
                  <span>Optional Add-ons:</span>
                  <div className="relative ml-2 group">
                    <InfoIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-popover text-popover-foreground text-xs rounded shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity">
                      Add these to your package to enhance specific capabilities
                    </div>
                  </div>
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Extra chatbot training (25 more questions)</span>
                    <span className="font-semibold">$299</span>
                  </li>
                  <li className="flex justify-between">
                    <span>6 months of basic SEO maintenance</span>
                    <span className="font-semibold">$499</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card Footer - CTA */}
            <div className="p-6 border-t border-border bg-muted/30">
              <button 
                onClick={() => navigate('/contact')} 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Professional Plan */}
          <div className="relative bg-card border-2 border-primary rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col h-auto">
            {/* Popular Badge */}
            <div className="absolute top-0 right-0">
              <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg">MOST POPULAR</div>
            </div>

            {/* Card Header */}
            <div className="bg-primary/10 p-6 text-center">
              <h3 className="text-xl font-bold mb-1">Professional Package</h3>
              <p className="text-sm text-muted-foreground mb-4">AI Voice + Advanced SEO</p>
              <div className="mb-4">
                <span className="text-3xl font-bold">$4,999</span>
                <span className="text-muted-foreground"> flat rate</span>
              </div>
              <p className="text-sm text-muted-foreground italic">Ideal for medium offices, law firms, or dental clinics needing voice automation.</p>
            </div>

            {/* Card Body - Features with Tabs */}
            <div className="p-6 flex-grow">
              <PlanTabs 
                features={
                  <div className="space-y-4">
                    {professionalFeatures.map((feature, index) => (
                      <FeatureAccordion 
                        key={index}
                        title={feature.title}
                        items={feature.items}
                        icon={feature.title.includes("Voice") ? featureIcons.voice : 
                              feature.title.includes("SEO") ? featureIcons.seo :
                              feature.title.includes("SMS") ? featureIcons.sms :
                              feature.title.includes("Hosting") ? featureIcons.hosting :
                              feature.title.includes("Everything") ? featureIcons.included :
                              featureIcons.included}
                        details={feature.details}
                      />
                    ))}
                  </div>
                }
                details={
                  <div className="space-y-4 py-2">
                    <div className="bg-primary/5 border border-primary/20 rounded-md p-4">
                      <h4 className="font-medium mb-2 flex items-center text-primary">
                        <InfoIcon className="h-4 w-4 mr-2" />
                        Recommended Choice
                      </h4>
                      <p className="text-sm">Our most popular package with the best balance of features and value. Chosen by 68% of new clients in the past year.</p>
                    </div>
                    
                    <div className="bg-muted/40 rounded-md p-4">
                      <h4 className="font-medium mb-2 flex items-center">
                        <InfoIcon className="h-4 w-4 mr-2 text-primary" />
                        Perfect For
                      </h4>
                      <p className="text-sm text-muted-foreground">Medium-sized offices, law firms, medical practices, or dental clinics with 5-20 employees handling up to 200 client interactions daily that need voice automation to scale efficiently.</p>
                    </div>
                    
                    <div className="bg-muted/40 rounded-md p-4">
                      <h4 className="font-medium mb-2 flex items-center">
                        <InfoIcon className="h-4 w-4 mr-2 text-primary" />
                        Key Benefits
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li className="flex items-start">
                          <svg className="w-3.5 h-3.5 text-primary mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>Reduce staffing costs by automating 70% of routine calls</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-3.5 h-3.5 text-primary mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>Outperform local competitors with advanced SEO features</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-3.5 h-3.5 text-primary mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>Eliminate 90% of appointment no-shows with SMS automation</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted/40 rounded-md p-4">
                      <h4 className="font-medium mb-2 flex items-center">
                        <InfoIcon className="h-4 w-4 mr-2 text-primary" />
                        Implementation & Timeline
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">Complete implementation in 3-4 weeks with phased rollout to minimize disruption.</p>
                      <ol className="text-sm text-muted-foreground space-y-1 list-decimal ml-5">
                        <li>Consultation and customization planning (Week 1)</li>
                        <li>Chatbot and SEO implementation (Week 2)</li>
                        <li>Voice assistant setup and integration (Week 3)</li>
                        <li>Staff training and system optimization (Week 4)</li>
                      </ol>
                    </div>
                  </div>
                }
                faq={
                  <div className="space-y-4 py-2">
                    {planSpecificFAQ.professional.map((item, index) => (
                      <div key={index} className="bg-muted/40 rounded-md p-4">
                        <h4 className="font-medium mb-1">{item.question}</h4>
                        <p className="text-sm text-muted-foreground">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                }
              />

              {/* Add-ons */}
              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="font-semibold mb-2 flex items-center">
                  <span>Optional Add-ons:</span>
                  <div className="relative ml-2 group">
                    <InfoIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-popover text-popover-foreground text-xs rounded shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity">
                      Add these to your package to enhance specific capabilities
                    </div>
                  </div>
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Multi-language support for AI</span>
                    <span className="font-semibold">$799</span>
                  </li>
                  <li className="flex justify-between">
                    <span>12 months of SEO maintenance</span>
                    <span className="font-semibold">$899</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card Footer - CTA */}
            <div className="p-6 border-t border-border bg-muted/30">
              <button 
                onClick={() => navigate('/contact')} 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="relative bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col h-auto">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-secondary to-primary/10 p-6 text-center">
              <h3 className="text-xl font-bold mb-1">Premium Package</h3>
              <p className="text-sm text-muted-foreground mb-4">Full Automation + Enterprise SEO</p>
              <div className="mb-4">
                <span className="text-3xl font-bold">$8,999</span>
                <span className="text-muted-foreground"> flat rate</span>
              </div>
              <p className="text-sm text-muted-foreground italic">Ideal for multi-location offices, hospitals, or large clinics.</p>
            </div>

            {/* Card Body - Features with Tabs */}
            <div className="p-6 flex-grow">
              <PlanTabs 
                features={
                  <div className="space-y-4">
                    {premiumFeatures.map((feature, index) => (
                      <FeatureAccordion 
                        key={index}
                        title={feature.title}
                        items={feature.items}
                        icon={feature.title.includes("Voice") || feature.title.includes("Chatbot") ? featureIcons.voice : 
                              feature.title.includes("SEO") ? featureIcons.seo :
                              feature.title.includes("SMS") ? featureIcons.sms :
                              feature.title.includes("Hosting") ? featureIcons.hosting :
                              feature.title.includes("Everything") ? featureIcons.included :
                              featureIcons.included}
                        details={feature.details}
                      />
                    ))}
                  </div>
                }
                details={
                  <div className="space-y-4 py-2">
                    <div className="bg-muted/40 rounded-md p-4">
                      <h4 className="font-medium mb-2 flex items-center">
                        <InfoIcon className="h-4 w-4 mr-2 text-primary" />
                        Perfect For
                      </h4>
                      <p className="text-sm text-muted-foreground">Multi-location enterprises, large medical practices, hospitals, or established businesses with 20+ employees handling 500+ daily client interactions that require comprehensive automation.</p>
                    </div>
                    
                    <div className="bg-muted/40 rounded-md p-4">
                      <h4 className="font-medium mb-2 flex items-center">
                        <InfoIcon className="h-4 w-4 mr-2 text-primary" />
                        Key Benefits
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li className="flex items-start">
                          <svg className="w-3.5 h-3.5 text-primary mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>Complete automation of front-desk operations saving $50,000+ annually</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-3.5 h-3.5 text-primary mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>Dominate search results with content strategy and authority building</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-3.5 h-3.5 text-primary mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>Self-learning AI that continuously improves without manual intervention</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-3.5 h-3.5 text-primary mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>Enterprise-grade security and scalability for high-volume operations</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted/40 rounded-md p-4">
                      <h4 className="font-medium mb-2 flex items-center">
                        <InfoIcon className="h-4 w-4 mr-2 text-primary" />
                        Implementation & Timeline
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">Comprehensive implementation over 6-8 weeks with dedicated project manager and custom integration support.</p>
                      <ol className="text-sm text-muted-foreground space-y-1 list-decimal ml-5">
                        <li>Discovery and requirements definition (Weeks 1-2)</li>
                        <li>System architecture and custom integration development (Weeks 3-4)</li>
                        <li>AI training and content creation (Weeks 4-6)</li>
                        <li>Phased rollout, testing and optimization (Weeks 6-8)</li>
                      </ol>
                    </div>
                  </div>
                }
                faq={
                  <div className="space-y-4 py-2">
                    {planSpecificFAQ.premium.map((item, index) => (
                      <div key={index} className="bg-muted/40 rounded-md p-4">
                        <h4 className="font-medium mb-1">{item.question}</h4>
                        <p className="text-sm text-muted-foreground">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                }
              />

              {/* Add-ons */}
              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="font-semibold mb-2 flex items-center">
                  <span>Optional Add-ons:</span>
                  <div className="relative ml-2 group">
                    <InfoIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-popover text-popover-foreground text-xs rounded shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity">
                      Add these to your package to enhance specific capabilities
                    </div>
                  </div>
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>CRM/EHR integration (e.g., Salesforce, Epic)</span>
                    <span className="font-semibold">$1,499</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Annual AI model retraining</span>
                    <span className="font-semibold">$999/year</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card Footer - CTA */}
            <div className="p-6 border-t border-border bg-muted/30">
              <button 
                onClick={() => navigate('/contact')} 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="mt-16 bg-card border border-border rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-6">Common Questions</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {addOnsFAQ.map((item, index) => (
              <div key={index} className="bg-muted/40 rounded-md p-4">
                <h4 className="font-medium mb-1">{item.question}</h4>
                <p className="text-sm text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Transparent Costs Section */}
        <div className="mt-8 bg-secondary/30 rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-4">Transparent Costs</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>Clients cover third-party fees (SMS costs, phone numbers, etc.).</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>Hosting renewal after the included period: $99/year.</span>
            </li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-4">Why Flat Rates?</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>Clients love predictability (no surprises).</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>You earn upfront revenue and focus on new projects.</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>Optional maintenance plans create future upsell opportunities.</span>
            </li>
          </ul>
        </div>

        {/* Special Offer */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-primary/10 px-4 py-1 rounded-full text-sm font-medium text-primary mb-2">Limited Time Offer</div>
          <h3 className="text-xl md:text-2xl font-bold mb-6">10% discount for referrals or bundled purchases</h3>
          <button 
            onClick={() => navigate('/contact')} 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md text-base font-medium transition-colors inline-flex items-center"
          >
            Contact Us Today
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary py-12 mt-20">
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
