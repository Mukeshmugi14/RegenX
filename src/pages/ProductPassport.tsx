import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Card, CardContent } from "@/src/components/ui/Card";
import { Badge } from "@/src/components/ui/Badge";
import { ArrowLeft, History, Wrench, Leaf, QrCode } from "lucide-react";

export default function ProductPassport() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-primary px-6 pt-12 pb-24 sticky top-0 z-10 rounded-b-3xl shadow-md">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-white/80 hover:text-white">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-bold text-white">Product Passport</h1>
        </div>
        
        <div className="flex justify-between items-start text-white">
          <div>
            <h2 className="text-2xl font-bold mb-1">Sony WH-1000XM4</h2>
            <p className="text-mint-dark text-sm">ID: REGEN-8X92-KPL</p>
          </div>
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
            <QrCode size={24} />
          </div>
        </div>
      </div>

      <div className="flex-1 px-6 -mt-16 relative z-20 pb-24">
        <Card className="rounded-2xl border-none shadow-lg overflow-hidden mb-6">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-900">Lifetime Impact</h3>
              <Badge variant="success" className="bg-green-100 text-green-700">+45 Regen Score</Badge>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-mint/50 rounded-xl p-3 border border-mint-dark/30">
                <Leaf size={16} className="text-primary mb-1" />
                <div className="text-xs text-gray-500">Carbon Saved</div>
                <div className="font-bold text-gray-900">12.5 kg</div>
              </div>
              <div className="bg-blue-50 rounded-xl p-3 border border-blue-100">
                <History size={16} className="text-blue-600 mb-1" />
                <div className="text-xs text-gray-500">Lifespan Extended</div>
                <div className="font-bold text-gray-900">2.5 Years</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <h3 className="text-lg font-semibold text-gray-900 mb-4">Ownership History</h3>
        <div className="relative pl-4 border-l-2 border-gray-200 space-y-6 mb-8">
          <div className="relative">
            <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-primary border-2 border-white" />
            <h4 className="font-semibold text-gray-900 text-sm">Current Owner (You)</h4>
            <p className="text-xs text-gray-500">Since Oct 2023 • Condition: Good</p>
          </div>
          <div className="relative">
            <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-gray-300 border-2 border-white" />
            <h4 className="font-semibold text-gray-900 text-sm">Previous Owner</h4>
            <p className="text-xs text-gray-500">Jan 2022 - Oct 2023 • Condition: Like New</p>
          </div>
          <div className="relative">
            <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-gray-300 border-2 border-white" />
            <h4 className="font-semibold text-gray-900 text-sm">Original Purchase</h4>
            <p className="text-xs text-gray-500">Jan 2022 • Sony Store, Mumbai</p>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-4">Repair Logs</h3>
        <Card className="rounded-2xl border-none shadow-sm overflow-hidden">
          <CardContent className="p-0">
            <div className="p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 flex-shrink-0">
                <Wrench size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">Earpad Replacement</h4>
                <p className="text-xs text-gray-500 mb-2">Authorized Service Center • Sep 2023</p>
                <Badge variant="outline" className="text-[10px] bg-gray-50 text-gray-600 border-gray-200">Verified Repair</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
