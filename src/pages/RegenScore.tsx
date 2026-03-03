import { useState } from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/src/components/ui/Card";
import { Badge } from "@/src/components/ui/Badge";
import { Progress } from "@/src/components/ui/Progress";
import { Leaf, Award, ShieldCheck, Users, Recycle, TrendingUp, Info } from "lucide-react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

const data = [
  { subject: 'Circular Contribution', A: 120, fullMark: 150 },
  { subject: 'Waste Diversion', A: 98, fullMark: 150 },
  { subject: 'Social Impact', A: 86, fullMark: 150 },
  { subject: 'Responsible Selling', A: 99, fullMark: 150 },
  { subject: 'Community Trust', A: 85, fullMark: 150 },
];

export default function RegenScore() {
  const score = 750;
  const nextTier = 800;

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <header className="bg-primary text-white pt-12 pb-8 px-6 rounded-b-3xl shadow-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/4 blur-2xl"></div>
        <div className="flex justify-between items-center mb-6 relative z-10">
          <h1 className="text-2xl font-bold tracking-tight">Your Regen Score</h1>
          <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
            <Info size={20} />
          </button>
        </div>

        <div className="flex flex-col items-center relative z-10">
          <div className="relative w-40 h-40 flex items-center justify-center mb-4">
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
              <span className="text-4xl font-bold">{score}</span>
              <span className="text-xs text-mint-dark uppercase tracking-wider mt-1">Top 15%</span>
            </div>
          </div>
          <Badge variant="secondary" className="bg-white/20 text-white border-none backdrop-blur-md px-4 py-1 text-sm">
            Level 3 Regenerator
          </Badge>
        </div>
      </header>

      <div className="px-6 -mt-6 relative z-20">
        <Card className="rounded-2xl border-none shadow-lg overflow-hidden mb-6">
          <CardContent className="p-6">
            <div className="flex justify-between items-end mb-2">
              <h3 className="font-semibold text-gray-900">Next Milestone</h3>
              <span className="text-sm font-bold text-primary">{score} / {nextTier}</span>
            </div>
            <Progress value={(score / nextTier) * 100} className="h-3 mb-3 bg-gray-100" indicatorClassName="bg-primary" />
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <Award size={14} className="text-yellow-500" /> Reach 800 to unlock zero seller fees!
            </p>
          </CardContent>
        </Card>

        <h2 className="text-lg font-semibold text-gray-900 mb-4">Impact Pillars</h2>
        <Card className="rounded-2xl border-none shadow-sm overflow-hidden mb-6">
          <CardContent className="p-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#6b7280', fontSize: 10 }} />
                <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                <Radar name="Score" dataKey="A" stroke="#1B5E20" fill="#1B5E20" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <h2 className="text-lg font-semibold text-gray-900 mb-4">Badges Earned</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="rounded-2xl border-none shadow-sm overflow-hidden bg-gradient-to-br from-yellow-50 to-white">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 mb-2 shadow-sm">
                <Award size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">Zero Waste Hero</h4>
              <p className="text-[10px] text-gray-500 mt-1">Diverted 50kg from landfill</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-none shadow-sm overflow-hidden bg-gradient-to-br from-blue-50 to-white">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-2 shadow-sm">
                <Users size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">Community Pillar</h4>
              <p className="text-[10px] text-gray-500 mt-1">Donated 10 items to NGOs</p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-lg font-semibold text-gray-900 mb-4">Score Breakdown</h2>
        <div className="space-y-3">
          {[
            { name: "Circular Contribution", icon: Recycle, color: "text-green-600", bg: "bg-green-50", score: "+120", desc: "Items sold or donated" },
            { name: "Waste Diversion", icon: Leaf, color: "text-emerald-600", bg: "bg-emerald-50", score: "+98", desc: "CO₂ & Water saved" },
            { name: "Social Impact", icon: Users, color: "text-blue-600", bg: "bg-blue-50", score: "+86", desc: "NGO donations" },
            { name: "Responsible Selling", icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-50", score: "+99", desc: "Accurate descriptions" },
            { name: "Community Trust", icon: ShieldCheck, color: "text-orange-600", bg: "bg-orange-50", score: "+85", desc: "Positive buyer reviews" },
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 0.98 }} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center ${item.color} flex-shrink-0`}>
                <item.icon size={24} />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 text-sm">{item.name}</h4>
                <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
              </div>
              <div className="font-bold text-primary">{item.score}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
