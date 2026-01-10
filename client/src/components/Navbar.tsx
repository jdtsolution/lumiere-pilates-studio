import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "소개", to: "about" },
    { name: "프로그램", to: "programs" },
    { name: "강사진", to: "instructors" },
    { name: "연락처", to: "contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            to="hero"
            smooth={true}
            className="cursor-pointer text-2xl font-serif font-semibold tracking-wide text-primary"
          >
            루미에르 필라테스
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors cursor-pointer uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
            <Link to="contact" smooth={true} offset={-80}>
              <Button 
                variant="default" 
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-6"
              >
                수업 예약
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground p-2 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t md:hidden animate-in slide-in-from-top-5">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors cursor-pointer py-2"
              >
                {link.name}
              </Link>
            ))}
            <Link to="contact" smooth={true} offset={-80} onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full bg-primary text-white rounded-full">
                수업 예약하기
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
