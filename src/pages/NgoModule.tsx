import { useState } from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/src/components/ui/Card";
import { Badge } from "@/src/components/ui/Badge";
import { Button } from "@/src/components/ui/Button";
import { Heart, Building2, ShieldCheck, MapPin, ArrowRight, Package } from "lucide-react";

const ngos = [
  { id: 1, name: "City Food Bank", type: "Food Rescue", distance: "1.2 km", needs: "Non-perishables", verified: true },
  { id: 2, name: "Hope Medical Trust", type: "Healthcare", distance: "3.5 km", needs: "Unused Medicines", verified: true },
  { id: 3, name: "Green Earth Initiative", type: "Recycling", distance: "5.0 km", needs: "E-waste", verified: false },
];

export default function NgoModule() {
  const [activeTab, setActiveTab] = useState("donate");

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <header className="bg-white px-6 pt-12 pb-4 sticky top-0 z-10 border-b border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Impact Hub</h1>
        <div className="flex gap-4 border-b border-gray-100">
          <button
            onClick={() => setActiveTab("donate")}
            className={`pb-2 text-sm font-semibold transition-colors relative ${activeTab === "donate" ? "text-primary" : "text-gray-500"}`}
          >
            Donate Surplus
            {activeTab === "donate" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full" />}
          </button>
          <button
            onClick={() => setActiveTab("hospitals")}
            className={`pb-2 text-sm font-semibold transition-colors relative ${activeTab === "hospitals" ? "text-primary" : "text-gray-500"}`}
          >
            Healthcare Needs
            {activeTab === "hospitals" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full" />}
          </button>
        </div>
      </header>

      <div className="p-6">
        {activeTab === "donate" ? (
          <div className="space-y-6">
            <Card className="bg-mint border-mint-dark/30 shadow-sm">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Package size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Bulk Donation</h3>
                  <p className="text-xs text-gray-600 mt-1">Have 5+ items? We'll arrange a free pickup.</p>
                </div>
                <Button size="sm" variant="secondary" className="bg-white shadow-sm">Schedule</Button>
              </CardContent>
            </Card>

            <h2 className="text-lg font-semibold text-gray-900 mb-4">Verified Partners Nearby</h2>
            <div className="space-y-4">
              {ngos.map((ngo, index) => (
                <motion.div key={ngo.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                  <Card className="overflow-hidden border-gray-200 hover:border-primary transition-colors cursor-pointer group">
                    <CardContent className="p-0 flex">
                      <div className="w-24 h-28 bg-gray-100 flex-shrink-0 relative">
                        <img src={`https://picsum.photos/seed/${ngo.name.replace(/\s/g, '')}/200`} alt={ngo.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        {ngo.verified && (
                          <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1 shadow-sm">
                            <ShieldCheck size={10} /> Verified
                          </div>
                        )}
                      </div>
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-semibold text-gray-900 text-sm line-clamp-1">{ngo.name}</h3>
                          </div>
                          <p className="text-xs text-gray-500 mb-2">{ngo.type} • {ngo.distance}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-[10px] px-2 py-0.5 bg-gray-50 text-gray-600 border-gray-200">
                            Needs: {ngo.needs}
                          </Badge>
                          <button className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <ArrowRight size={16} />
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <Card className="bg-blue-50 border-blue-100 shadow-sm">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Building2 size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Hospital Surplus</h3>
                  <p className="text-xs text-gray-600 mt-1">List unused medical supplies for rural clinics.</p>
                </div>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm">List Now</Button>
              </CardContent>
            </Card>

            <h2 className="text-lg font-semibold text-gray-900 mb-4">Urgent Clinic Needs</h2>
            <div className="space-y-4">
              {[
                { id: 1, name: "Rural Health Center", needs: "Bandages, Antiseptics", distance: "12 km", urgency: "High" },
                { id: 2, name: "Community Clinic", needs: "Wheelchairs, Crutches", distance: "8 km", urgency: "Medium" }
              ].map((clinic, index) => (
                <motion.div key={clinic.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                  <Card className="border-gray-200 hover:border-blue-500 transition-colors cursor-pointer group">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 flex-shrink-0">
                        <Building2 size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-sm">{clinic.name}</h3>
                        <p className="text-xs text-gray-500 mt-1 flex items-center gap-1"><MapPin size={12} /> {clinic.distance}</p>
                        <p className="text-xs text-blue-600 font-medium mt-1">Needs: {clinic.needs}</p>
                      </div>
                      <Badge variant={clinic.urgency === "High" ? "destructive" : "warning"} className="text-[10px]">{clinic.urgency}</Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
