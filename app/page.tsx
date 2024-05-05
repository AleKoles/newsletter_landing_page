import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import NewsletterForm from "@/components/NewsletterForm";
import Socials from "@/components/Socials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#03040B] flex flex-col items-center justify-center pt-24 px-4 md:px-12 min-h-screen">
      <Navigation />
      <Hero />
      <NewsletterForm />
      <Socials />
      <Footer />
    </main>
  );
}
