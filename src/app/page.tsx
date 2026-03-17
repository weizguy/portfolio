import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main className="flex-grow flex flex-col items-center w-full">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="w-full py-8 text-center border-t border-border mt-20">
        <p className="text-sm text-muted font-mono">
          © {new Date().getFullYear()} Dave Weizenegger. Built with Nextjs &
          Tailwind.
        </p>
      </footer>
    </div>
  );
}
