import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "@/src/components/ui/Button";
import { CheckCircle2, BellRing, MapPin, Zap } from "lucide-react";
import { Badge } from "@/src/components/ui/Badge";

export default function AutoMatch() {
  const navigate = useNavigate();
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 1500);
    const timer2 = setTimeout(() => setStage(2), 3500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="h-screen bg-primary flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Pulses */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ scale: [1, 2, 3], opacity: [0.5, 0.2, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          className="w-64 h-64 rounded-full bg-white/10 absolute"
        />
        <motion.div
          animate={{ scale: [1, 2, 3], opacity: [0.5, 0.2, 0] }}
          transition={{ duration: 2, delay: 0.6, repeat: Infinity, ease: "easeOut" }}
          className="w-48 h-48 rounded-full bg-white/20 absolute"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-sm">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-black/20"
        >
          <CheckCircle2 size={48} className="text-primary" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-white mb-2"
        >
          Listing Live!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-mint-dark text-lg mb-12"
        >
          Scanning for buyers...
        </motion.p>

        {/* Match Cards */}
        <div className="w-full space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: stage >= 1 ? 1 : 0, x: stage >= 1 ? 0 : -50 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white">
              <MapPin size={24} />
            </div>
            <div className="text-left flex-1">
              <h3 className="font-semibold text-white">3 Buyers within 5km</h3>
              <p className="text-sm text-mint-dark">Looking for electronics</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: stage >= 2 ? 1 : 0, x: stage >= 2 ? 0 : 50 }}
            className="bg-white rounded-2xl p-4 shadow-xl flex items-center gap-4 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-mint rounded-bl-full -z-0" />
            <div className="w-12 h-12 rounded-full bg-mint flex items-center justify-center text-primary relative z-10">
              <Zap size={24} />
            </div>
            <div className="text-left flex-1 relative z-10">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-gray-900">Budget Match!</h3>
                <Badge variant="success" className="text-[10px] px-2 py-0.5">95% Match</Badge>
              </div>
              <p className="text-sm text-gray-500 mt-1">Notifying Sarah M. & 2 others</p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: stage >= 2 ? 1 : 0, y: stage >= 2 ? 0 : 50 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-12 left-6 right-6"
      >
        <Button
          size="lg"
          variant="secondary"
          className="w-full h-14 text-base font-bold shadow-lg"
          onClick={() => navigate("/home")}
        >
          Back to Dashboard
        </Button>
      </motion.div>
    </div>
  );
}
