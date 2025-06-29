import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AnimatedSection } from "./animated-section";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[500px] md:min-h-[600px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg"
          alt="Serene landscape background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      <div className="container mx-auto px-4 md:px-6 z-10">
        <AnimatedSection className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl font-headline">
            Radiate Confidence, Effortlessly
          </h1>
          <p className="text-lg md:text-xl text-foreground/80">
            Discover your inner glow with our bespoke beauty treatments. Tailored for you, by experts who care.
          </p>
          <div className="pt-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 transform hover:-translate-y-1">
              <Link href="#booking">Book an Appointment</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
