import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Card, CardContent } from "@/src/components/ui/Card";
import { Badge } from "@/src/components/ui/Badge";
import { Button } from "@/src/components/ui/Button";
import { Clock, AlertTriangle, ArrowRight, MapPin, Heart } from "lucide-react";

const items = [
  { id: 1, name: "Fresh Produce Box", expiry: 8, type: "green", price: "₹250", distance: "2 km" },
  { id: 2, name: "Baby Formula", expiry: 4, type: "orange", price: "₹450", distance: "3.5 km" },
  { id: 3, name: "Insulin Vials (Unopened)", expiry: 1, type: "red", price: "Donate", distance: "1.2 km", ngoOnly: true },
];

export default function ExpiryFlow() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");

  const filteredItems = items.filter(item => filter === "all" || item.type === filter);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <header className="bg-white px-6 pt-12 pb-4 sticky top-0 z-10 border-b border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Urgent Listings</h1>
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6 hide-scrollbar">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${filter === "all" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600"}`}
          >
            All Items
          </button>
          <button
            onClick={() => setFilter("red")}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-2 ${filter === "red" ? "bg-urgent-red text-white shadow-sm" : "bg-red-50 text-red-600"}`}
          >
            <AlertTriangle size={14} /> 1-2 Days
          </button>
          <button
            onClick={() => setFilter("orange")}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-2 ${filter === "orange" ? "bg-urgent-orange text-white shadow-sm" : "bg-orange-50 text-orange-600"}`}
          >
            <Clock size={14} /> 3-6 Days
          </button>
          <button
            onClick={() => setFilter("green")}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-2 ${filter === "green" ? "bg-urgent-green text-white shadow-sm" : "bg-green-50 text-green-600"}`}
          >
            <Clock size={14} /> 7+ Days
          </button>
        </div>
      </header>

      <div className="p-6 space-y-4">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className={`overflow-hidden border-l-4 ${
              item.type === "red" ? "border-l-urgent-red" :
              item.type === "orange" ? "border-l-urgent-orange" :
              "border-l-urgent-green"
            }`}>
              <CardContent className="p-0 flex">
                <div className="w-28 h-32 bg-gray-100 flex-shrink-0 relative">
                  <img src={`https://picsum.photos/seed/${item.name.replace(/\s/g, '')}/200`} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  {item.ngoOnly && (
                    <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1">
                      <Heart size={10} /> NGO Only
                    </div>
                  )}
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-gray-900 text-sm line-clamp-2">{item.name}</h3>
                      <span className={`font-bold ${item.price === "Donate" ? "text-primary" : "text-gray-900"}`}>{item.price}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                      <MapPin size={12} /> {item.distance}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Badge
                      variant={item.type === "red" ? "destructive" : item.type === "orange" ? "warning" : "success"}
                      className="text-[10px] px-2 py-0.5 flex items-center gap-1"
                    >
                      <Clock size={10} />
                      {item.expiry} {item.expiry === 1 ? "Day" : "Days"} Left
                    </Badge>
                    
                    <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors">
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
  );
}
