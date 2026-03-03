import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Home, PlusCircle, Heart, User, ShieldCheck } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { icon: Home, path: "/home", label: "Home" },
    { icon: Heart, path: "/ngo", label: "Impact" },
    { icon: PlusCircle, path: "/list", label: "Sell", primary: true },
    { icon: ShieldCheck, path: "/score", label: "Score" },
    { icon: User, path: "/profile", label: "Profile" },
  ];

  // Hide bottom nav on onboarding and specific flows
  const hideNav = ["/", "/onboarding", "/list/camera", "/list/details", "/list/preview", "/list/match"].includes(location.pathname);

  return (
    <div className="mobile-container flex flex-col">
      <main className="flex-1 overflow-y-auto pb-20">
        <Outlet />
      </main>

      {!hideNav && (
        <nav className="fixed bottom-0 w-full max-w-[480px] bg-white border-t border-gray-100 px-6 py-3 flex justify-between items-center z-50 pb-safe">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            const Icon = item.icon;

            if (item.primary) {
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className="flex flex-col items-center justify-center -mt-8"
                >
                  <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30">
                    <Icon size={28} />
                  </div>
                  <span className="text-[10px] font-medium mt-1 text-primary">{item.label}</span>
                </button>
              );
            }

            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 transition-colors",
                  isActive ? "text-primary" : "text-gray-400 hover:text-gray-600"
                )}
              >
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      )}
    </div>
  );
}
