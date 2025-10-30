import * as React from "react";
import { Sidebar, SidebarContent, SidebarRail } from "@/components/ui/sidebar";
import { Suspense } from "react";
import ChatWrapper from "@/components/chat/ChatWrapper";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarContent>
        <ChatWrapper />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
