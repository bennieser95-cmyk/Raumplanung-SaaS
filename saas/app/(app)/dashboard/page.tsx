import { LayoutDashboard } from "lucide-react";

import { EmptyState } from "@/components/layout/empty-state";
import { PageHeader } from "@/components/layout/page-header";

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        description="Dein Überblick über Arbeitsplätze und Räume."
      />
      <EmptyState
        icon={LayoutDashboard}
        title="Dein Dashboard wird vorbereitet"
        description="Hier findest du bald die wichtigsten Informationen zu deinem Büro und deinem Team."
        phase="Phase 4"
      />
    </>
  );
}
