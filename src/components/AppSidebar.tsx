import { NavLink } from "react-router-dom";
import {
  MessageSquare,
  Mic,
  Activity,
  MapPin,
  Sparkles,
  Calendar,
  Bot,
  Users,
  Trophy,
  Heart,
  FileText,
  Globe,
  Home,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

const features = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Text & Voice Input", url: "/input", icon: MessageSquare },
  { title: "Voice Analysis", url: "/voice", icon: Mic },
  { title: "Stress Level Scoring", url: "/scoring", icon: Activity },
  { title: "Find Counselor", url: "/counselor", icon: MapPin },
  { title: "Stress Relief", url: "/relief", icon: Sparkles },
  { title: "Mood Tracker", url: "/tracker", icon: Calendar },
  { title: "AI Chatbot", url: "/chatbot", icon: Bot },
  { title: "Community", url: "/community", icon: Users },
  { title: "Rewards", url: "/rewards", icon: Trophy },
  { title: "Health Integration", url: "/health", icon: Heart },
  { title: "Reports & Insights", url: "/reports", icon: FileText },
  { title: "Multi-Language", url: "/language", icon: Globe },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Heart className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-bold text-sidebar-foreground">MindCare</h2>
            <p className="text-xs text-sidebar-foreground/70">Mental Wellness</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Features</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {features.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "hover:bg-sidebar-accent/50"
                      }
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
