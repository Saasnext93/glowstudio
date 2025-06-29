"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AnimatedSection } from "./animated-section";

const testimonials = [
  {
    name: "Jessica L.",
    title: "Regular Client",
    avatar: "https://placehold.co/100x100.png",
    hint: "woman portrait",
    text: "Glow Studio is my sanctuary! The atmosphere is so calming, and my skin has never looked better. The radiant facial is pure magic.",
  },
  {
    name: "Samantha P.",
    title: "Bride-to-be",
    avatar: "https://placehold.co/100x100.png",
    hint: "woman smiling",
    text: "I came here for my bridal makeup and it was perfect. They listened to exactly what I wanted and made me feel so beautiful on my special day. Highly recommend!",
  },
  {
    name: "Emily R.",
    title: "First-time Visitor",
    avatar: "https://placehold.co/100x100.png",
    hint: "person happy",
    text: "The best manicure I've ever had. The attention to detail was incredible, and the polish has lasted for weeks without chipping. I'll definitely be back!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Words from Our Wonderful Clients
          </h2>
          <p className="text-muted-foreground md:text-xl">
            We love our clients, and they love us too. See what they have to say.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={200} className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.name} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2">
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-center text-center justify-center p-6 space-y-4">
                        <p className="text-foreground/80 italic">
                          &ldquo;{testimonial.text}&rdquo;
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                          <Avatar>
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </AnimatedSection>
      </div>
    </section>
  );
}
