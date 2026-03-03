import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "@/src/components/ui/Button";
import { Card, CardContent } from "@/src/components/ui/Card";
import { Badge } from "@/src/components/ui/Badge";
import { Tag, Heart, Map, ArrowLeft, AlertCircle } from "lucide-react";

export default function NoBuyerNet() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-white px-6 pt-12 pb-4 flex items-center gap-4 sticky top-0 z-10 border-b border-gray-100">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-600">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-lg font-bold text-gray-900">Listing Expired</h1>
      </div>

      <div className="flex-1 p-6 overflow-y-auto">
        <div className="bg-orange-50 rounded-2xl p-4 flex items-start gap-3 border border-orange-100 mb-6">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0">
            <AlertCircle size={20} />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-1">No Sale in 7 Days</h4>
            <p className="text-xs text-gray-600 leading-relaxed">Your listing for "Sony WH-1000XM4" hasn't found a buyer. Let's keep it out of the landfill!</p>
          </div>
        </div>

        <h2 className="text-lg font-semibold text-gray-900 mb-4">Choose an Action</h2>

        <div className="space-y-4">
          <motion.div whileHover={{ scale: 0.98 }} whileTap={{ scale: 0.95 }}>
            <Card className="border-gray-200 hover:border-primary transition-colors cursor-pointer group">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Tag size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Relist at Lower Price</h3>
                  <p className="text-xs text-gray-500 mt-1">Drop price by 15% to attract buyers.</p>
                </div>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">+50 Score</Badge>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 0.98 }} whileTap={{ scale: 0.95 }}>
            <Card className="border-gray-200 hover:border-primary transition-colors cursor-pointer group">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <Heart size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Donate to Verified NGO</h3>
                  <p className="text-xs text-gray-500 mt-1">Give to someone in need instantly.</p>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-700">+150 Score</Badge>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 0.98 }} whileTap={{ scale: 0.95 }}>
            <Card className="border-gray-200 hover:border-primary transition-colors cursor-pointer group">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Map size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Find Recycling Center</h3>
                  <p className="text-xs text-gray-500 mt-1">Locate nearest e-waste drop-off.</p>
                </div>
                <Badge variant="secondary" className="bg-purple-100 text-purple-700">+100 Score</Badge>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <div className="p-6 bg-white border-t border-gray-100 pb-safe">
        <Button variant="outline" className="w-full h-14 text-base font-semibold" onClick={() => navigate("/home")}>
          Decide Later
        </Button>
      </div>
    </div>
  );
}
