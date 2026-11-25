import type { ReactNode } from "react";

import { AppSidebar } from "@/components/layout/app-sidebar";
import { Topbar } from "@/components/layout/topbar";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen md:pl-sidebar-rail lg:pl-sidebar">
      <AppSidebar />
      <div className="flex min-h-screen min-w-0 flex-col">
        <Topbar />
        <main
          id="main-content"
          className="mx-auto flex w-full max-w-content flex-1 flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8"
        >
          {children}
        </main>
      </div>
    </div>
  );
}
