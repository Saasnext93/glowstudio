"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import React from "react";

export default function Header() {
    const [isSheetOpen, setIsSheetOpen] = React.useState(false);

    const closeSheet = () => setIsSheetOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl font-headline">
          Glow Studio
        </Link>
        <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6 items-center">
              <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
                Testimonials
              </Link>
              <Link href="#booking" className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                Book Now
              </Link>
            </nav>
            <div className="hidden md:block">
                <ThemeToggle />
            </div>
            <div className="md:hidden">
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Open navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <div className="flex flex-col gap-6 p-6">
                            <Link href="/" className="font-bold text-xl font-headline" onClick={closeSheet}>
                                Glow Studio
                            </Link>
                            <nav className="flex flex-col gap-4">
                                <Link href="#services" className="text-lg font-medium hover:text-primary transition-colors" onClick={closeSheet}>
                                    Services
                                </Link>
                                <Link href="#pricing" className="text-lg font-medium hover:text-primary transition-colors" onClick={closeSheet}>
                                    Pricing
                                </Link>
                                <Link href="#testimonials" className="text-lg font-medium hover:text-primary transition-colors" onClick={closeSheet}>
                                    Testimonials
                                </Link>
                                <Link href="#booking" className="text-lg font-medium bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-center" onClick={closeSheet}>
                                    Book Now
                                </Link>
                            </nav>
                            <div className="pt-4 border-t mt-4">
                                <ThemeToggle />
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
