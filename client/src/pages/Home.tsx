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
              마음 · 몸 · 정신
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground font-light tracking-tight mb-8 leading-tight">
              당신의 <span className="italic text-primary">균형</span>을 찾으세요
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 font-light mb-10 max-w-xl mx-auto leading-relaxed">
              당신의 웰니스 여정을 위해 설계된 공간에서 필라테스의 변화하는 힘을 경험하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="programs" smooth={true} offset={-80}>
                <Button className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1">
                  프로그램 보기
                </Button>
              </Link>
              <Link to="contact" smooth={true} offset={-80}>
                <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-foreground/10 hover:bg-white/50 text-foreground text-lg backdrop-blur-sm transition-all hover:-translate-y-1">
                  수업 예약하기
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-stone-200">
                <img 
                  src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop" 
                  alt="필라테스 스튜디오 분위기" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg max-w-xs hidden md:block">
                  <p className="font-serif italic text-lg text-primary">"신체 건강은 행복의 첫 번째 조건입니다."</p>
                  <p className="text-xs text-right mt-2 uppercase tracking-wider font-semibold opacity-60">— 조셉 필라테스</p>
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
                title="움직임을 위한 공간" 
                subtitle="우리의 철학" 
                centered={false} 
              />
              <motion.div variants={fadeIn} className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  루미에르 필라테스에서는 마음챙김 움직임이 균형 잡힌 삶의 핵심이라고 믿습니다. 우리 스튜디오는 단순한 운동 공간이 아니라, 바깥 세상의 소음에서 벗어나 몸과 다시 연결할 수 있는 안식처입니다.
                </p>
                <p>
                  클래식 필라테스의 원칙과 현대 생체역학을 기반으로, 우리의 접근 방식은 내면에서부터 힘을 기르는 데 중점을 둡니다. 정확성, 조절, 호흡을 강조하여 강한 코어를 개발하고, 유연성을 향상시키며, 전반적인 웰빙을 증진합니다.
                </p>
                <div className="pt-4">
                  <ul className="space-y-3">
                    {["소규모 그룹 수업", "전문 자격 강사진", "최신 장비", "개인 맞춤 지도"].map((item) => (
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
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/40 to-transparent pointer-events-none" />
        
        <div className="container px-4 mx-auto relative z-10">
          <SectionHeading 
            title="나만의 길을 선택하세요" 
            subtitle="프로그램 안내" 
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
            title="강사진 소개" 
            subtitle="전문 지도" 
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
                연락하기
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-8">
                여정을 시작하세요
              </h2>
              <p className="text-white/70 text-lg mb-12 max-w-md leading-relaxed">
                수업이나 회원권에 대해 궁금한 점이 있으신가요? 연락 주시거나 스튜디오를 방문해 주세요. 여러분을 환영합니다.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 shrink-0">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-1">오시는 길</h4>
                    <p className="text-white/60">서울특별시 강남구<br />테헤란로 123번길 45</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 shrink-0">
                    <Phone className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-1">전화 문의</h4>
                    <p className="text-white/60">02-1234-5678</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 shrink-0">
                    <Mail className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-1">이메일</h4>
                    <p className="text-white/60">hello@lumierepilates.co.kr</p>
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
              <h3 className="text-2xl font-serif font-medium mb-6">메시지 보내기</h3>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-white/40 py-12 text-sm">
        <div className="container px-4 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-2xl text-white/80">루미에르</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-primary transition-colors">이용약관</a>
            <a href="#" className="hover:text-primary transition-colors">인스타그램</a>
          </div>
          <div className="text-center md:text-right">
            &copy; {new Date().getFullYear()} 루미에르 필라테스 스튜디오. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
