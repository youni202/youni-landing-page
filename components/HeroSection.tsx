import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';

interface HeroSectionProps {
  onContactClick: () => void;
}

export default function HeroSection({ onContactClick }: HeroSectionProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="gradient-text">Microsoft & AI</span>
              <br />
              교육 전문가 유니
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              디지털 혁신을 이끄는 Microsoft 365, ChatGPT, Copilot 교육으로
              <br />
              당신의 업무 생산성을 극대화하세요.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <button
                onClick={onContactClick}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 text-lg"
                style={{
                  transition: 'none',
                  animation: 'none',
                  transform: 'none'
                }}
              >
                <span>무료 상담 받기</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                className="border border-border text-foreground px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 text-lg"
                style={{
                  transition: 'none',
                  animation: 'none',
                  transform: 'none'
                }}
              >
                <BookOpen className="w-5 h-5" />
                <span>강의 둘러보기</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">1000+</div>
                <div className="text-sm text-muted-foreground">교육 참여자</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">교육 프로그램</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">만족도</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-8">
              <div className="aspect-square bg-gradient-to-br from-primary to-accent rounded-xl opacity-20"></div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute top-8 left-8 bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-lg"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="text-sm font-semibold text-primary">Microsoft 365</div>
                <div className="text-xs text-muted-foreground">업무 효율성 향상</div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 right-8 bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-lg"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <div className="text-sm font-semibold text-primary">ChatGPT</div>
                <div className="text-xs text-muted-foreground">AI 활용 전략</div>
              </motion.div>

              <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-lg"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <div className="text-sm font-semibold text-primary">Copilot</div>
                <div className="text-xs text-muted-foreground">업무 자동화</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}