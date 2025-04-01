import React from "react";
import * as Tabs from "@radix-ui/react-tabs";

interface TabContentProps {
  value: string;
  children: React.ReactNode;
}

function TabContent({ value, children }: TabContentProps) {
  return (
    <Tabs.Content 
      value={value}
      className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      {children}
    </Tabs.Content>
  );
}

export interface PlanTabsProps {
  features: React.ReactNode;
  details: React.ReactNode;
  faq: React.ReactNode;
}

export function PlanTabs({ features, details, faq }: PlanTabsProps) {
  return (
    <Tabs.Root defaultValue="features" className="w-full">
      <Tabs.List className="grid grid-cols-3 mb-4">
        <Tabs.Trigger 
          value="features"
          className="text-sm font-medium border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-foreground py-2 transition-colors"
        >
          Features
        </Tabs.Trigger>
        <Tabs.Trigger 
          value="details"
          className="text-sm font-medium border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-foreground py-2 transition-colors"
        >
          Details
        </Tabs.Trigger>
        <Tabs.Trigger 
          value="faq"
          className="text-sm font-medium border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-foreground py-2 transition-colors"
        >
          FAQ
        </Tabs.Trigger>
      </Tabs.List>
      
      <TabContent value="features">{features}</TabContent>
      <TabContent value="details">{details}</TabContent>
      <TabContent value="faq">{faq}</TabContent>
    </Tabs.Root>
  );
}
