import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Card, CardContent } from "@/src/components/ui/Card";
import { Badge } from "@/src/components/ui/Badge";
import { Button } from "@/src/components/ui/Button";
import { Leaf, Droplets, Recycle, ScanBarcode, PlusCircle, Heart, Clock, Lightbulb, ArrowRight, Building2 } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className="bg-primary text-white pt-12 pb-6 px-6 rounded-b-3xl shadow-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/4 blur-2xl"></div>
        <div className="flex justify-between items-center mb-6 relative z-10">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Hello, Alex</h1>
            <p className="text-mint-dark text-sm">Level 3 Regenerator</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-mint flex items-center justify-center border-2 border-white cursor-pointer" onClick={() => navigate("/profile")}>
            <span className="text-primary font-bold">AL</span>
          </div>
        </div>

        {/* Regen Score Circular Progress */}
        <div className="flex items-center gap-6 relative z-10" onClick={() => navigate("/score")}>
          <div className="relative w-24 h-24 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="8" />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#4CAF50"
                strokeWidth="8"
                strokeDasharray="283"
                strokeDashoffset="70"
                className="transition-all duration-1000 ease-out"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-2xl font-bold">750</span>
              <span className="text-[10px] text-mint-dark uppercase tracking-wider">Score</span>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1">Great Impact!</h3>
            <p className="text-sm text-mint-dark leading-snug">You're 50 points away from unlocking lower seller fees.</p>
          </div>
        </div>
      </header>

      {/* Impact Stats */}
      <div className="px-6 -mt-4 relative z-20">
        <div className="grid grid-cols-3 gap-3">
          <Card className="rounded-2xl border-none shadow-md overflow-hidden">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-2 text-blue-600">
                <Droplets size={20} />
              </div>
              <span className="text-lg font-bold text-gray-900">1.2k</span>
              <span className="text-xs text-gray-500 font-medium">Liters Water</span>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-none shadow-md overflow-hidden">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mb-2 text-green-600">
                <Leaf size={20} />
              </div>
              <span className="text-lg font-bold text-gray-900">45</span>
              <span className="text-xs text-gray-500 font-medium">kg CO₂</span>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-none shadow-md overflow-hidden">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mb-2 text-orange-600">
                <Recycle size={20} />
              </div>
              <span className="text-lg font-bold text-gray-900">12</span>
              <span className="text-xs text-gray-500 font-medium">Items Saved</span>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 mt-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-3 gap-4">
          <button onClick={() => navigate("/list/camera")} className="flex flex-col items-center gap-2 group">
            <div className="w-16 h-16 rounded-2xl bg-mint flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
              <PlusCircle size={28} />
            </div>
            <span className="text-xs font-medium text-gray-700">Sell Item</span>
          </button>
          <button onClick={() => navigate("/ngo")} className="flex flex-col items-center gap-2 group">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
              <Heart size={28} />
            </div>
            <span className="text-xs font-medium text-gray-700">Donate</span>
          </button>
          <button onClick={() => navigate("/list/camera")} className="flex flex-col items-center gap-2 group">
            <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors shadow-sm">
              <ScanBarcode size={28} />
            </div>
            <span className="text-xs font-medium text-gray-700">Scan</span>
          </button>
        </div>
      </div>

      {/* Personalized Tips */}
      <div className="px-6 mt-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Boost Your Score</h2>
        <Card className="rounded-2xl border-none shadow-sm bg-gradient-to-br from-mint/50 to-white overflow-hidden">
          <CardContent className="p-4 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 flex-shrink-0 mt-1">
              <Lightbulb size={20} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">List 3 more items this week!</h3>
              <p className="text-xs text-gray-600 mb-3 leading-relaxed">You're on a streak. Listing more items will boost your Circular Contribution score by 15 points.</p>
              <Button size="sm" onClick={() => navigate("/list/camera")} className="h-8 text-xs font-semibold px-4">
                List Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Donate to NGOs */}
      <div className="px-6 mt-10">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Direct Donate</h2>
          <button className="text-sm text-primary font-medium" onClick={() => navigate("/ngo")}>View All</button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 hide-scrollbar">
          {[
            { id: 1, name: "City Food Bank", needs: "Non-perishables", distance: "1.2 km" },
            { id: 2, name: "Hope Medical Trust", needs: "Unused Medicines", distance: "3.5 km" },
          ].map((ngo) => (
            <Card key={ngo.id} className="min-w-[240px] rounded-2xl border-gray-100 shadow-sm flex-shrink-0">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm line-clamp-1">{ngo.name}</h3>
                    <p className="text-xs text-gray-500">{ngo.distance} away</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 mb-3">
                  <p className="text-[10px] text-gray-500 uppercase font-semibold mb-0.5">Urgent Need</p>
                  <p className="text-xs text-gray-900 font-medium">{ngo.needs}</p>
                </div>
                <Button variant="outline" size="sm" className="w-full h-8 text-xs border-primary text-primary hover:bg-mint" onClick={() => navigate("/ngo")}>
                  Donate Item <ArrowRight size={14} className="ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Nearby Urgent */}
      <div className="px-6 mt-10">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Nearby Urgent</h2>
          <button className="text-sm text-primary font-medium" onClick={() => navigate("/expiry")}>View All</button>
        </div>
        
        <div className="space-y-4">
          {[
            { id: 1, name: "Organic Apples (2kg)", distance: "1.2 km", expiry: "2 days", type: "red", price: "₹120" },
            { id: 2, name: "Baby Formula (Unopened)", distance: "3.5 km", expiry: "5 days", type: "orange", price: "₹450" },
          ].map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 0.98 }}
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex gap-4 cursor-pointer"
              onClick={() => navigate("/expiry")}
            >
              <div className="w-20 h-20 rounded-xl bg-gray-100 flex-shrink-0 relative overflow-hidden">
                <img src={`https://picsum.photos/seed/${item.name.replace(/\s/g, '')}/200`} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-gray-900 text-sm line-clamp-1">{item.name}</h3>
                    <span className="font-bold text-primary">{item.price}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{item.distance} away</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant={item.type === "red" ? "destructive" : "warning"} className="text-[10px] px-2 py-0.5 flex items-center gap-1">
                    <Clock size={10} />
                    Expires in {item.expiry}
                  </Badge>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
