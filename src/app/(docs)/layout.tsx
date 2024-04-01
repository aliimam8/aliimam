
import { docsConfig } from "@/config/docs"
import { MainNav } from "@/components/doc/main-nav"
import { DocsSearch } from "@/components/doc/search"
import { DocsSidebarNav } from "@/components/doc/sidebar-nav"

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex mt-14 flex-col">
      <header className="sticky top-14 z-40 border-b border-slate-400 dark:border-slate-600 bg-white/80 backdrop-blur-md backdrop-filter dark:bg-black/80">
        <div className="container px-6 flex h-14 items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav items={docsConfig.mainNav}>
            <DocsSidebarNav items={docsConfig.sidebarNav} />
          </MainNav>
          <div className="flex flex-1 items-center space-x-4 sm:justify-end">
            <div className="flex-1 sm:grow-0">
              <DocsSearch />
            </div>
          </div>
        </div>
      </header>
      <div className="container flex-1">{children}</div>
    </div>
  )
}
