"use client";

import { useState } from "react";
// import AdminSidebar from "./_Layout/AdminSidebar";
// import AdminHeader from "./_Layout/AdminHeader";

import { Bell, Search, User, LogOut } from "lucide-react";
import Button  from "@/components/ui/button";
import  Input from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

 function AdminHeader() {
  return (
    <header className="bg-card border-b border-border shadow-soft">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search users, jobs, companies..."
              className="pl-10 bg-background"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-4 w-4" />
            <Badge className="absolute -top-1 -right-1 px-1 py-0 text-xs bg-[#EF4444] text-[#FFFFFF]">
              3
            </Badge>
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder-user.jpg" alt="Admin" />
                  <AvatarFallback className="bg-[#3B82F6] text-[#FFFFFF]">R</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Admin User</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    admin@jobflow.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
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
//   Bell,
  Menu,
  X
} from "lucide-react";
// import { NavLink, useLocation } from "react-router-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import  Button  from "@/components/ui/button";
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
function AdminSidebar({ isCollapsed, onToggle }: AdminSidebarProps) {
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
                src="/logo.jpg" 
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
                  "hover:bg-[#2551da] hover:text-[#F8FAFC]",
                  isItemActive 
                    ? "bg-[#2551da] text-white shadow-soft" 
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
export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <AdminSidebar
          isCollapsed={isSidebarCollapsed}
          onToggle={() => setIsSidebarCollapsed((v) => !v)}
        />
        <div className="flex-1 flex flex-col">
          <AdminHeader />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
