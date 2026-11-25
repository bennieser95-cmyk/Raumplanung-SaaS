import { notFound } from "next/navigation";

import { EmptyState } from "@/components/layout/empty-state";
import { PageHeader } from "@/components/layout/page-header";
import { mainNav } from "@/components/layout/nav-config";

export const instant = false;

export default async function PlaceholderPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = mainNav.find((item) => item.href === `/${slug}`);

  if (!page) {
    notFound();
  }

  return (
    <>
      <PageHeader title={page.label} />
      <EmptyState
        icon={page.icon}
        title={`${page.label} wird vorbereitet`}
        description={`Die Funktionen für ${page.label.toLocaleLowerCase("de-DE")} werden in einer späteren Phase ergänzt.`}
        phase="einer späteren Phase"
      />
    </>
  );
}
