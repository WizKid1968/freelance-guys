import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export interface FeatureDetail {
  title: string;
  description: string;
}

export interface FeatureProps {
  title: string;
  items: string[];
  icon: React.ReactNode;
  details?: FeatureDetail[];
}

export function FeatureAccordion({ title, items, icon, details }: FeatureProps) {
  return (
    <Accordion.Root type="single" collapsible className="w-full">
      <Accordion.Item value="feature" className="border-b border-border last:border-0 pb-2">
        <div className="flex items-center mb-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
            {icon}
          </div>
          <div className="flex-1">
            <h4 className="font-semibold">{title}</h4>
          </div>
          {details && details.length > 0 && (
            <Accordion.Trigger className="group flex items-center">
              <span className="text-xs text-primary mr-1 group-data-[state=open]:hidden">See details</span>
              <ChevronDown className="h-4 w-4 text-primary shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          )}
        </div>
        
        {/* Basic feature list (always visible) */}
        <ul className="ml-10 space-y-1 text-sm text-muted-foreground">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <svg className="w-3.5 h-3.5 text-primary mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              {item}
            </li>
          ))}
        </ul>
        
        {/* Detailed information (expandable) */}
        {details && details.length > 0 && (
          <Accordion.Content className="pt-3 pb-1 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
            <div className="ml-10 bg-muted/40 rounded-md p-3 space-y-3">
              {details.map((detail, index) => (
                <div key={index}>
                  <h5 className="text-sm font-medium">{detail.title}</h5>
                  <p className="text-xs text-muted-foreground mt-1">{detail.description}</p>
                </div>
              ))}
            </div>
          </Accordion.Content>
        )}
      </Accordion.Item>
    </Accordion.Root>
  );
}
