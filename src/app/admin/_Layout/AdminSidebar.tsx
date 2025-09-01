// import { useState } from "react";
import { 
  Users, 
  Briefcase, 
  Building, 
  BarChart3, 
  Settings, 
  FileText,
  Shield,
  CreditCard,
  Bell,
  Menu,
  X
} from "lucide-react";
// import { NavLink, useLocation } from "react-router-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import  Button  from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { title: "Dashboard", url: "/admin", icon: BarChart3 },
  { title: "User Management", url: "/admin/users", icon: Users },
  { title: "Job Management", url: "/admin/jobs", icon: Briefcase },
  { title: "Company Management", url: "/admin/companies", icon: Building },
  { title: "Reports", url: "/admin/reports", icon: FileText },
  { title: "Payments", url: "/admin/payments", icon: CreditCard },
  { title: "Moderation", url: "/admin/moderation", icon: Shield },
  { title: "Notifications", url: "/admin/notifications", icon: Bell },
  { title: "Settings", url: "/admin/settings", icon: Settings },
];

interface AdminSidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export default function AdminSidebar({ isCollapsed, onToggle }: AdminSidebarProps) {
  const location = usePathname();
  const currentPath = location;

  const isActive = (path: string) => {
    if (path === "/admin") {
      return currentPath === "/admin";
    }
    return currentPath.startsWith(path);
  };

  return (
    <div className={cn(
      "bg-gradient-card border-r border-border shadow-soft transition-all duration-300 ease-in-out",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/e6ac7d5d-6cbb-4771-be3f-afa93f9546b8.png" 
                alt="JobFlow Admin" 
                className="w-8 h-8"
              />
              <div>
                <h2 className="text-lg font-bold text-foreground">JobFlow</h2>
                <p className="text-xs text-muted-foreground">Admin Panel</p>
              </div>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className="hover:bg-accent"
          >
            {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <div className="p-2">
        <nav className="space-y-1">
          {sidebarItems.map((item) => {
            const isItemActive = isActive(item.url);
            return (
              <Link
                key={item.title}
                href={item.url}
                className={cn(
                  "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  "hover:bg-accent hover:text-accent-foreground",
                  isItemActive 
                    ? "bg-primary text-primary-foreground shadow-soft" 
                    : "text-muted-foreground"
                )}
              >
                <item.icon className={cn("h-4 w-4", !isCollapsed && "mr-3")} />
                {!isCollapsed && <span>{item.title}</span>}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}