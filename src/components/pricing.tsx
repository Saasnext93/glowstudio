"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatedSection } from "./animated-section";
import Link from "next/link";

const pricingTiers = {
  basic: {
    name: "Essential Glow",
    price: "$75",
    features: [
      "Signature Radiant Facial",
      "Express Manicure",
      "Soothing Ambiance",
      "Expert Consultation",
    ],
  },
  premium: {
    name: "Luxe Radiance",
    price: "$150",
    features: [
      "Everything in Essential Glow",
      "Glow-Up Manicure & Pedicure",
      "Aromatherapy Massage (30 min)",
      "Premium Skincare Products",
    ],
  },
  deluxe: {
    name: "Ultimate Aura",
    price: "$250",
    features: [
      "Everything in Luxe Radiance",
      "Full Glamour Makeup Session",
      "Complimentary Champagne",
      "Take-home Skincare Kit",
    ],
  },
};

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Packages Tailored for You
          </h2>
          <p className="text-muted-foreground md:text-xl">
            Choose the perfect package to start your journey to radiance.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200} className="max-w-4xl mx-auto mt-12">
          <Tabs defaultValue="premium" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-secondary p-1 h-auto">
              <TabsTrigger value="basic" className="py-2">Basic</TabsTrigger>
              <TabsTrigger value="premium" className="py-2">Premium</TabsTrigger>
              <TabsTrigger value="deluxe" className="py-2">Deluxe</TabsTrigger>
            </TabsList>
            <TabsContent value="basic">
              <PricingCard {...pricingTiers.basic} />
            </TabsContent>
            <TabsContent value="premium">
              <PricingCard {...pricingTiers.premium} isFeatured />
            </TabsContent>
            <TabsContent value="deluxe">
              <PricingCard {...pricingTiers.deluxe} />
            </TabsContent>
          </Tabs>
        </AnimatedSection>
      </div>
    </section>
  );
}

function PricingCard({ name, price, features, isFeatured = false }: { name: string; price: string; features: string[]; isFeatured?: boolean }) {
  return (
    <Card className={isFeatured ? "border-primary shadow-lg shadow-primary/20 relative mt-4" : "mt-4"}>
      {isFeatured && <div className="absolute top-0 right-4 -mt-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">POPULAR</div>}
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-headline">{name}</CardTitle>
        <CardDescription className="text-4xl font-bold text-foreground pt-4">{price}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-3 text-muted-foreground">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" variant={isFeatured ? "default" : "outline"}>
            <Link href="#booking">Choose Plan</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
