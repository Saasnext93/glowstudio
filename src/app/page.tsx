import Header from '@/components/header';
import Hero from '@/components/hero';
import Services from '@/components/services';
import Pricing from '@/components/pricing';
import Testimonials from '@/components/testimonials';
import Booking from '@/components/booking';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Pricing />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
