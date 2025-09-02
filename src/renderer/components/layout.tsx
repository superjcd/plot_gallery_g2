import {
  SidebarProvider,
  SidebarTrigger,
} from "renderer/components/ui/sidebar";
import { AppSidebar } from "renderer/components/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <div className="m-2 p-1 md:m-3 md:p-2 lg:m-4 lg:p-4">{children}</div>
      </main>
    </SidebarProvider>
  );
}
