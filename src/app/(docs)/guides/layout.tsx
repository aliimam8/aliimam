import { docsConfig } from "@/config/docs"
import { DocsSidebarNav } from "@/components/doc/sidebar-nav"

interface GuidesLayoutProps {
  children: React.ReactNode
}

export default function GuidesLayout({ children }: GuidesLayoutProps) {
  return (
    <div className="flex-1 px-6 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[260px_1fr] lg:gap-10">
    <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r border-slate-400 dark:border-slate-600 py-6 pr-2 md:sticky md:block lg:py-10">
      <DocsSidebarNav items={docsConfig.sidebarNav} />
    </aside>
    {children}
  </div>
    )
}
