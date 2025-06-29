import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Sparkles, Heart, Brush } from "lucide-react";
import { AnimatedSection } from "./animated-section";

const services = [
  {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    title: "Radiant Facials",
    description: "Customized facials to rejuvenate your skin and leave you with a healthy, vibrant glow.",
  },
  {
    icon: (
      <svg
        className="h-10 w-10 text-primary"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8.5 2.73a2.2 2.2 0 0 1 3.55 1.58.5.5 0 0 0 .82.39 2.2 2.2 0 0 1 3.23 2.52.5.5 0 0 0 .34.62 2.2 2.2 0 0 1 1.56 3.55.5.5 0 0 0 .39.82 2.2 2.2 0 0 1-2.52 3.23.5.5 0 0 0-.62.34 2.2 2.2 0 0 1-3.55 1.56.5.5 0 0 0-.82.39 2.2 2.2 0 0 1-3.23 2.52.5.5 0 0 0-.34.62 2.2 2.2 0 0 1-1.56 3.55.5.5 0 0 0-.39.82A2.2 2.2 0 0 1 2.73 8.5a.5.5 0 0 0 .62-.34 2.2 2.2 0 0 1 1.56-3.55.5.5 0 0 0 .82-.39 2.2 2.2 0 0 1 3.23-2.52.5.5 0 0 0 .34-.62Z" />
        <path d="M12 12h.01" />
      </svg>
    ),
    title: "Glow-Up Manicures",
    description: "Perfectly polished nails with our long-lasting gel manicures and creative nail art.",
  },
  {
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: "Luxury Pedicures",
    description: "Indulge in a relaxing pedicure that soothes your feet and beautifies your toes.",
  },
  {
    icon: <Brush className="h-10 w-10 text-primary" />,
    title: "Glamour Makeup",
    description: "Professional makeup application for any occasion, from natural looks to full glamour.",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Our Signature Services
          </h2>
          <p className="text-muted-foreground md:text-xl">
            Experience our curated selection of treatments designed to make you look and feel your best.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 100}>
              <Card className="h-full text-center hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300">
                <CardHeader className="items-center space-y-4">
                  {service.icon}
                  <CardTitle className="text-2xl font-headline">{service.title}</CardTitle>
                </CardHeader>
                <CardDescription className="p-6 pt-0">
                  {service.description}
                </CardDescription>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
