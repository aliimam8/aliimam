import 'fumadocs-ui/style.css';
import { Metadata } from "next";
import { RootProvider } from "fumadocs-ui/provider";
import { DocsLayout } from "fumadocs-ui/layout";
import { pageTree } from "../source";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <div className="mt-12">
        <RootProvider>
          <DocsLayout
            tree={pageTree}
            links={[
            ]}
            nav={{
              title: "Components",
              links: [
              ],
            }}
          >
            {children}
          </DocsLayout>
        </RootProvider>
        </div>
      </>
  );
}

