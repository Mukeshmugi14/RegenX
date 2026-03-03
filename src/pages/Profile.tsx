import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Card, CardContent } from "@/src/components/ui/Card";
import { Badge } from "@/src/components/ui/Badge";
import { Button } from "@/src/components/ui/Button";
import { ShieldCheck, Star, AlertTriangle, Settings, LogOut, ChevronRight, Camera, Award, Users } from "lucide-react";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <header className="bg-white px-6 pt-12 pb-6 sticky top-0 z-10 border-b border-gray-100 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
        <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors">
          <Settings size={20} />
        </button>
      </header>

      <div className="p-6">
        <div className="flex items-center gap-6 mb-8">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-mint flex items-center justify-center text-primary font-bold text-3xl border-4 border-white shadow-sm">
              AL
            </div>
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full border-2 border-white flex items-center justify-center text-white shadow-sm">
              <ShieldCheck size={16} />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Alex Regenerator</h2>
            <p className="text-sm text-gray-500 mb-2">Joined Jan 2024</p>
            <div className="flex items-center gap-1 text-yellow-500 font-medium text-sm">
              <Star size={16} fill="currentColor" /> 4.9 (120 reviews)
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-4">Badges Earned</h3>
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 hide-scrollbar mb-4">
          <Card className="min-w-[140px] rounded-2xl border-none shadow-sm overflow-hidden bg-gradient-to-br from-yellow-50 to-white flex-shrink-0">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 mb-2 shadow-sm">
                <Award size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">Zero Waste Hero</h4>
            </CardContent>
          </Card>
          <Card className="min-w-[140px] rounded-2xl border-none shadow-sm overflow-hidden bg-gradient-to-br from-blue-50 to-white flex-shrink-0">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-2 shadow-sm">
                <Users size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">Community Pillar</h4>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-4">Trust & Safety</h3>
        <Card className="rounded-2xl border-none shadow-sm overflow-hidden mb-6">
          <CardContent className="p-0">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Identity Verified</h4>
                  <p className="text-xs text-gray-500">Government ID & Selfie matched</p>
                </div>
              </div>
              <Badge variant="success" className="text-[10px]">Verified</Badge>
            </div>
            
            <div className="p-4 border-b border-gray-100 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <Camera size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">In-App Camera Only</h4>
                  <p className="text-xs text-gray-500">Gallery uploads disabled for authenticity</p>
                </div>
              </div>
              <ChevronRight size={16} className="text-gray-400" />
            </div>

            <div className="p-4 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                  <AlertTriangle size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Report History</h4>
                  <p className="text-xs text-gray-500">3 reports = auto suspension</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="success" className="text-[10px] bg-green-100 text-green-700">0 Active</Badge>
                <ChevronRight size={16} className="text-gray-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <h3 className="text-lg font-semibold text-gray-900 mb-4">Account</h3>
        <Card className="rounded-2xl border-none shadow-sm overflow-hidden mb-8">
          <CardContent className="p-0">
            <div onClick={() => navigate("/passport")} className="p-4 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100">
              <h4 className="font-medium text-gray-900 text-sm">Product Passport</h4>
              <ChevronRight size={16} className="text-gray-400" />
            </div>
            {["Payment Methods", "Shipping Addresses", "Notifications", "Help & Support"].map((item, i) => (
              <div key={i} className={`p-4 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-colors ${i < 3 ? 'border-b border-gray-100' : ''}`}>
                <h4 className="font-medium text-gray-900 text-sm">{item}</h4>
                <ChevronRight size={16} className="text-gray-400" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Button variant="outline" className="w-full text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700">
          <LogOut size={18} className="mr-2" /> Log Out
        </Button>
      </div>
    </div>
  );
}
