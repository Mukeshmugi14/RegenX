import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/src/components/ui/Button";
import { Card } from "@/src/components/ui/Card";
import { Badge } from "@/src/components/ui/Badge";
import { Camera, X, Check, ScanLine, ArrowLeft, Info, Zap, Upload } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function ListingFlow() {
  const navigate = useNavigate();
  const location = useLocation();
  const step = location.pathname.split("/").pop() || "camera";

  // Form State
  const [formData, setFormData] = useState({
    condition: "",
    year: "2023",
    price: "",
    expiry: "",
  });

  const [isScanning, setIsScanning] = useState(true);

  // Step 1: Camera/Scan
  if (step === "camera") {
    return (
      <div className="h-screen bg-black flex flex-col relative">
        <div className="absolute top-0 left-0 right-0 p-6 pt-12 flex justify-between items-center z-10 bg-gradient-to-b from-black/60 to-transparent">
          <button onClick={() => navigate("/home")} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
            <X size={24} />
          </button>
          <Badge variant="secondary" className="bg-white/20 text-white border-none backdrop-blur-md">
            Step 1 of 3
          </Badge>
        </div>

        <div className="flex-1 relative overflow-hidden flex items-center justify-center">
          {/* Simulated Camera Feed */}
          <img
            src="https://picsum.photos/seed/camerafeed/800/1200"
            alt="Camera Feed"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />

          {/* Scanner Overlay */}
          <div className="relative z-10 w-64 h-64 border-2 border-white/50 rounded-3xl overflow-hidden">
            <motion.div
              animate={{ y: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-full h-1 bg-primary shadow-[0_0_15px_rgba(76,175,80,0.8)]"
            />
            <div className="absolute inset-0 border-4 border-primary rounded-3xl opacity-0 transition-opacity duration-300" style={{ opacity: isScanning ? 0 : 1 }} />
          </div>

          <div className="absolute bottom-32 left-0 right-0 text-center z-10">
            <p className="text-white font-medium mb-2">Position barcode in frame</p>
            <p className="text-white/60 text-sm">Auto-detecting product details...</p>
          </div>
        </div>

        <div className="p-8 pb-12 bg-black relative z-10 flex flex-col items-center gap-4">
          <Button
            size="lg"
            className="w-full max-w-xs rounded-full h-16 text-lg font-semibold shadow-lg shadow-primary/20"
            onClick={() => {
              setIsScanning(false);
              setTimeout(() => navigate("/list/details"), 800);
            }}
          >
            <Camera className="mr-2" /> Capture Manually
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10 rounded-full px-6"
            onClick={() => {
              // Simulate photo upload
              setIsScanning(false);
              setTimeout(() => navigate("/list/details"), 800);
            }}
          >
            <Upload className="mr-2 w-4 h-4" /> Upload Photo Instead
          </Button>
        </div>
      </div>
    );
  }

  // Step 2: Details
  if (step === "details") {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <div className="bg-white px-6 pt-12 pb-4 flex items-center gap-4 sticky top-0 z-10 border-b border-gray-100">
          <button onClick={() => navigate("/list/camera")} className="p-2 -ml-2 text-gray-600">
            <ArrowLeft size={24} />
          </button>
          <div className="flex-1">
            <div className="flex justify-between text-xs font-medium text-gray-500 mb-2">
              <span>Details</span>
              <span>Step 2 of 3</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-2/3 rounded-full" />
            </div>
          </div>
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <Card className="mb-6 border-primary/20 bg-mint/30">
            <div className="p-4 flex gap-4 items-center">
              <div className="w-16 h-16 rounded-xl bg-white shadow-sm overflow-hidden flex-shrink-0">
                <img src="https://picsum.photos/seed/product/200" alt="Product" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <Badge variant="success" className="mb-1 text-[10px]"><Check size={10} className="mr-1"/> Auto-filled</Badge>
                <h3 className="font-semibold text-gray-900 line-clamp-1">Sony WH-1000XM4 Headphones</h3>
                <p className="text-xs text-gray-500">Electronics • Audio</p>
              </div>
            </div>
          </Card>

          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-900 mb-3 block">Condition</label>
              <div className="grid grid-cols-3 gap-3">
                {["New", "Good", "Used"].map((c) => (
                  <button
                    key={c}
                    onClick={() => setFormData({ ...formData, condition: c })}
                    className={cn(
                      "py-3 px-4 rounded-xl border text-sm font-medium transition-all",
                      formData.condition === c
                        ? "border-primary bg-mint text-primary shadow-sm"
                        : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                    )}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-900 mb-3 block">Purchase Year</label>
              <select
                className="w-full h-14 px-4 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none appearance-none"
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
              >
                {["2024", "2023", "2022", "2021", "Older"].map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-900 mb-3 block">Asking Price (₹)</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">₹</span>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full h-14 pl-8 pr-4 rounded-xl border border-gray-200 bg-white text-gray-900 text-lg font-medium focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white border-t border-gray-100 pb-safe">
          <Button
            size="lg"
            className="w-full h-14 text-base"
            disabled={!formData.condition || !formData.price}
            onClick={() => navigate("/list/preview")}
          >
            Continue to Preview
          </Button>
        </div>
      </div>
    );
  }

  // Step 3: Preview
  if (step === "preview") {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <div className="bg-white px-6 pt-12 pb-4 flex items-center gap-4 sticky top-0 z-10 border-b border-gray-100">
          <button onClick={() => navigate("/list/details")} className="p-2 -ml-2 text-gray-600">
            <ArrowLeft size={24} />
          </button>
          <div className="flex-1">
            <div className="flex justify-between text-xs font-medium text-gray-500 mb-2">
              <span>Preview</span>
              <span>Step 3 of 3</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-full rounded-full" />
            </div>
          </div>
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-6">
            <div className="h-64 relative">
              <img src="https://picsum.photos/seed/product/800/600" alt="Product" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                1/1
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-bold text-gray-900">Sony WH-1000XM4</h2>
                <span className="text-xl font-bold text-primary">₹12,500</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">Electronics • Audio</p>
              
              <div className="flex gap-2 mb-6">
                <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">Used - Good</Badge>
                <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">Bought 2023</Badge>
              </div>

              <div className="bg-mint/50 rounded-2xl p-4 flex items-start gap-3 border border-mint-dark/30">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                  <Zap size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">High Demand Item</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">Based on your price and condition, this item is likely to sell within 24 hours.</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-primary font-medium text-sm mb-4"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            12 buyers looking for this nearby
          </motion.div>
        </div>

        <div className="p-6 bg-white border-t border-gray-100 pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
          <Button
            size="lg"
            className="w-full h-14 text-base shadow-lg shadow-primary/20"
            onClick={() => navigate("/list/match")}
          >
            Go Live Now
          </Button>
          <p className="text-center text-xs text-gray-400 mt-4">
            By posting, you agree to our Trust & Safety guidelines.
          </p>
        </div>
      </div>
    );
  }

  return null;
}
