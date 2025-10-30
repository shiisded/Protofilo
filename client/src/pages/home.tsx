import { useEffect } from 'react';
import ThreeBackground from '@/components/three-background';
import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ProjectsSection from '@/components/projects-section';


export default function Home() {
  useEffect(() => {
    // Set document title
    document.title = "Ynxiety - Roblox Developer Portfolio";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Ynxiety - Portfolio of a skilled Roblox developer specializing in exploitation tools, script development, and innovative bypass techniques.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Ynxiety - Portfolio of a skilled Roblox developer specializing in exploitation tools, script development, and innovative bypass techniques.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen navy-bg text-white overflow-x-hidden">
      <ThreeBackground />
      <Navigation />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </main>

      <footer className="navy-bg/80 py-8 border-t border-gray-800 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Ynxiety. Team ded 
          </p>
        </div>
      </footer>
    </div>
  );
}
