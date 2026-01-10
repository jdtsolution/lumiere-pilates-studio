import { motion } from "framer-motion";
import { useInstructors, usePrograms } from "@/hooks/use-content";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { ProgramCard } from "@/components/ProgramCard";
import { InstructorCard } from "@/components/InstructorCard";
import { ContactForm } from "@/components/ContactForm";
import { Loader2, ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const { data: programs, isLoading: isLoadingPrograms } = usePrograms();
  const { data: instructors, isLoading: isLoadingInstructors } = useInstructors();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Unsplash image: Calm yoga studio with natural light */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop')` 
          }}
        >
          <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/90" />
        </div>

        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block text-primary uppercase tracking-[0.3em] text-sm md:text-base font-semibold mb-6 bg-white/80 px-4 py-2 rounded-full backdrop-blur-sm shadow-sm">
              Mind • Body • Spirit
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground font-light tracking-tight mb-8 leading-tight">
              Find Your <span className="italic text-primary">Balance</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 font-light mb-10 max-w-xl mx-auto leading-relaxed">
              Experience the transformative power of pilates in a sanctuary designed for your wellness journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="programs" smooth={true} offset={-80}>
                <Button className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1">
                  View Programs
                </Button>
              </Link>
              <Link to="contact" smooth={true} offset={-80}>
                <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-foreground/10 hover:bg-white/50 text-foreground text-lg backdrop-blur-sm transition-all hover:-translate-y-1">
                  Book a Class
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              {/* Unsplash image: Detail shot of pilates equipment or pose */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-stone-200">
                <img 
                  src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop" 
                  alt="Pilates studio atmosphere" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg max-w-xs hidden md:block">
                  <p className="font-serif italic text-lg text-primary">"Physical fitness is the first requisite of happiness."</p>
                  <p className="text-xs text-right mt-2 uppercase tracking-wider font-semibold opacity-60">— Joseph Pilates</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <SectionHeading 
                title="A Sanctuary for Movement" 
                subtitle="Our Philosophy" 
                centered={false} 
              />
              <motion.div variants={fadeIn} className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At Lumière Pilates, we believe that mindful movement is the key to a balanced life. Our studio is not just a place to exercise; it's a sanctuary where you can disconnect from the noise of the outside world and reconnect with your body.
                </p>
                <p>
                  Founded on the principles of classical Pilates with contemporary biomechanics, our approach focuses on building strength from the inside out. We emphasize precision, control, and breath to help you develop a strong core, improve flexibility, and enhance your overall well-being.
                </p>
                <div className="pt-4">
                  <ul className="space-y-3">
                    {["Small group classes", "Expert certified instructors", "State-of-the-art equipment", "Personalized attention"].map((item) => (
                      <li key={item} className="flex items-center text-foreground font-medium">
                        <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center mr-3 text-primary">
                          <ArrowRight size={14} />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-secondary/30 relative">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/40 to-transparent pointer-events-none" />
        
        <div className="container px-4 mx-auto relative z-10">
          <SectionHeading 
            title="Choose Your Path" 
            subtitle="Our Programs" 
          />
          
          {isLoadingPrograms ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
            </div>
          ) : (
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {programs?.map((program) => (
                <motion.div key={program.id} variants={fadeIn} className="h-full">
                  <ProgramCard program={program} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Instructors Section */}
      <section id="instructors" className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <SectionHeading 
            title="Meet Our Guides" 
            subtitle="Expert Instruction" 
          />

          {isLoadingInstructors ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
            </div>
          ) : (
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            >
              {instructors?.map((instructor) => (
                <motion.div key={instructor.id} variants={fadeIn}>
                  <InstructorCard instructor={instructor} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-stone-900 text-white relative overflow-hidden">
        {/* Background texture/image overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <span className="block text-primary uppercase tracking-[0.2em] text-sm font-medium mb-3">
                Get in Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-8">
                Begin Your Journey
              </h2>
              <p className="text-white/70 text-lg mb-12 max-w-md leading-relaxed">
                Have questions about our classes or membership? Reach out to us or stop by the studio. We'd love to welcome you.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 shrink-0">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-1">Visit Us</h4>
                    <p className="text-white/60">123 Wellness Boulevard<br />San Francisco, CA 94110</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 shrink-0">
                    <Phone className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-1">Call Us</h4>
                    <p className="text-white/60">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 shrink-0">
                    <Mail className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-1">Email Us</h4>
                    <p className="text-white/60">hello@lumierepilates.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl text-foreground"
            >
              <h3 className="text-2xl font-serif font-medium mb-6">Send a Message</h3>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-white/40 py-12 text-sm">
        <div className="container px-4 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-2xl text-white/80">LUMIÈRE</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          </div>
          <div className="text-center md:text-right">
            &copy; {new Date().getFullYear()} Lumière Pilates Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
