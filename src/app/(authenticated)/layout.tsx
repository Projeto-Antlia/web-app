import { customFontFamily } from "@/styles/fontFamily";

import type { Metadata } from "next";
import LayoutNavbar from "./components/navbar/navbar.component";
import LayoutSidebar from "./components/sidebar/sidebar.component";

export const metadata: Metadata = {
  title: "App",
  description: "Antlia App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt_BR">
      <body suppressHydrationWarning className={customFontFamily}>
        <div className="w-screen h-full min-h-screen">
          <div className="container mx-auto">
            <div className="flex">
              <LayoutSidebar />
              <main className="w-full px-16 mx-16 box-content">
                <LayoutNavbar />
                <>{children}</>
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
