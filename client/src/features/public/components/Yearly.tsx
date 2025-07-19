import React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X } from "lucide-react";

function Yearly() {
  type OfferPrice = {
    offerName: "earth" | "moon" | "stellar";
    offerPrice: number;
    offerAudience: string;
  };

  const offersPrices: OfferPrice[] = [
    {
      offerName: "earth",
      offerPrice: 0,
      offerAudience: "Best for beginners",
    },
    {
      offerName: "moon",
      offerPrice: 3900,
      offerAudience: "Best for most people",
    },
    {
      offerName: "stellar",
      offerPrice: 7900,
      offerAudience: "Best for advanced sellers",
    },
  ];

  type PlanFeature = {
    feature: string;
    earth: boolean;
    moon: boolean;
    stellar: boolean;
  };

  const planFeatures: PlanFeature[] = [
    {
      feature: "Custom domain",
      earth: false,
      moon: true,
      stellar: true,
    },
    {
      feature: "AI store generator",
      earth: false,
      moon: true,
      stellar: true,
    },
    {
      feature: "Unlimited products",
      earth: true,
      moon: true,
      stellar: true,
    },
    {
      feature: "Priority support",
      earth: false,
      moon: false,
      stellar: true,
    },
    {
      feature: "AI themes",
      earth: false,
      moon: true,
      stellar: true,
    },
    {
      feature: "Facebook Pixel",
      earth: false,
      moon: true,
      stellar: true,
    },
    {
      feature: "TikTok Pixel",
      earth: false,
      moon: true,
      stellar: true,
    },
    {
      feature: "Delivery integration",
      earth: false,
      moon: true,
      stellar: true,
    },
    {
      feature: "Order management",
      earth: true,
      moon: true,
      stellar: true,
    },
  ];

  return (
    // Overall container for the yearly offers section, ensuring consistent padding and centering
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Flex container for pricing cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {offersPrices.map((offer, index) => (
          <Card 
            key={index} 
            // Apply branded border and shadow
            className="flex flex-col justify-between h-full p-4 border-2 border-brand-accent dark:border-brand-primary rounded-2xl shadow-soft dark:shadow-soft-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            <CardHeader className="pb-4">
              {/* Card Title: Branded color and larger font */}
              <CardTitle className="text-center text-4xl font-extrabold capitalize text-brand-primary dark:text-brand-highlight mb-2">
                {offer.offerName}
              </CardTitle>
              {/* Compare Plans link: Branded text and hover */}
              <div className="flex justify-center items-center">
                <a
                  href="#plans-comparison"
                  className="flex items-center gap-1 text-brand-secondary hover:text-brand-primary dark:text-brand-accent dark:hover:text-brand-highlight transition-colors duration-200 group"
                >
                  <p className="font-medium text-lg">Compare plans</p>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center gap-2 mb-6">
              {/* Price display: Branded colors for currency and 'per month billed yearly' */}
              <div className="flex items-baseline gap-1">
                <p className="text-3xl font-bold text-brand-secondary dark:text-brand-accent">DZD</p>
                <p className="text-5xl font-bold text-brand-primary dark:text-brand-highlight">{offer.offerPrice}</p>
                {/* Key difference: "per month billed yearly" */}
                <p className="text-base font-light text-brand-accent dark:text-brand-highlight">/month billed yearly</p>
              </div>
              {/* Audience description: Branded color */}
              <p className="text-brand-accent dark:text-brand-highlight font-medium text-center text-lg">{offer.offerAudience}</p>
            </CardContent>
            <CardFooter className="flex flex-col gap-5 pt-0">
              {/* Button: Use primary brand button for clear CTA */}
              <Button 
                variant="default" // Use default variant for a filled button
                className="w-full px-6 py-3 text-lg font-semibold bg-brand-primary text-brand-highlight hover:bg-brand-secondary hover:text-brand-highlight dark:bg-brand-highlight dark:text-brand-primary dark:hover:bg-brand-accent dark:hover:text-brand-secondary transition-colors duration-300 rounded-lg shadow-soft"
              >
                {offer.offerName === "earth" ? "Start Free" : "Get Started"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Plans Comparison Table */}
      <div className="my-10 p-6 sm:p-8 bg-white dark:bg-card rounded-2xl shadow-soft" id="plans-comparison">
        {/* Table Heading: Branded color */}
        <h1 className="text-center text-4xl sm:text-5xl font-extrabold mb-8 text-brand-primary dark:text-brand-highlight">
          Compare our plans
        </h1>
        <Table>
          {/* Table Caption: Branded text color */}
          <TableCaption className="text-brand-accent dark:text-brand-highlight mt-4">Features included in each plan.</TableCaption>
          <TableHeader>
            <TableRow className="bg-brand-primary text-brand-highlight dark:bg-brand-secondary dark:text-brand-accent">
              <TableHead className="text-lg font-bold text-brand-highlight dark:text-brand-accent">Features</TableHead>
              {offersPrices.map((offer) => (
                <TableHead
                  key={offer.offerName}
                  className="capitalize text-center text-lg font-bold text-brand-highlight dark:text-brand-accent"
                >
                  {offer.offerName}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {planFeatures.map((featureRow, index) => (
              // Alternate row backgrounds for better readability
              <TableRow 
                key={featureRow.feature} 
                className={`${index % 2 === 0 ? 'bg-white dark:bg-card' : 'bg-brand-accent/10 dark:bg-card/50'} border-b border-brand-accent/30 dark:border-brand-primary/50`}
              >
                <TableCell className="font-medium text-brand-primary dark:text-brand-highlight py-3">
                  {featureRow.feature}
                </TableCell>
                {offersPrices.map((plan) => {
                  const isAvailable = featureRow[plan.offerName];
                  return (
                    <TableCell key={plan.offerName} className="text-center py-3">
                      {isAvailable ? (
                        // Checkmark with branded green color
                        <Check className="text-brand-primary mx-auto w-6 h-6 dark:text-brand-highlight" /> 
                      ) : (
                        // X mark with branded red color
                        <X className="text-brand-secondary mx-auto w-6 h-6 dark:text-brand-accent" />
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Yearly;