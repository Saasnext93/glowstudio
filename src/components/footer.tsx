import Link from "next/link";
import { Twitter, Instagram, Facebook } from "lucide-react";
import { AnimatedSection } from "./animated-section";

export default function Footer() {
  return (
    <footer className="bg-secondary py-8">
      <AnimatedSection className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Glow Studio. All rights reserved.
        </p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Link
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </Link>
        </div>
      </AnimatedSection>
    </footer>
  );
}
