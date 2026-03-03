import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/src/components/ui/Button";
import { Leaf, Droplets, Recycle, ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Because Nothing Should Become Waste.",
    subtitle: "Sell surplus in 60 seconds and give products a second life.",
    icon: Recycle,
    color: "text-primary",
    bg: "bg-mint",
  },
  {
    id: 2,
    title: "Save CO₂, Water, and Landfill Waste",
    subtitle: "Every item you sell or donate directly reduces environmental impact.",
    icon: Droplets,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    id: 3,
    title: "Earn a Regen Score",
    subtitle: "Unlock lower fees and public badges as you contribute to the circular economy.",
    icon: Leaf,
    color: "text-green-600",
    bg: "bg-green-50",
  },
];

export default function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex-1 relative overflow-hidden flex flex-col items-center justify-center p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center text-center max-w-sm"
          >
            <div
              className={`w-32 h-32 rounded-full flex items-center justify-center mb-8 ${slides[currentSlide].bg}`}
            >
              {(() => {
                const Icon = slides[currentSlide].icon;
                return <Icon size={64} className={slides[currentSlide].color} />;
              })()}
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="p-8 pb-12">
        <div className="flex justify-center gap-2 mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-8 bg-primary" : "w-2 bg-gray-200"
              }`}
            />
          ))}
        </div>

        <Button
          size="lg"
          className="w-full group"
          onClick={handleNext}
        >
          {currentSlide === slides.length - 1 ? "Start Regenerating" : "Continue"}
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}
