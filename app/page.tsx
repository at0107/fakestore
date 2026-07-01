import  { HeroSection } from "@/components/home/HeroSection";
import { Categories } from "@/components/home/Categories";
import { Features } from "@/components/home/Features";

export default function Home() {
  return (
    <div className="container mx-auto min-h-screen">
      <HeroSection />
      <Categories />
      <Features />
    </div>
  );
}



 

