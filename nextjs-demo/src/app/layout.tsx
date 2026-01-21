import type { Metadata } from "next";
import "./globals.css";
import { AppSidebar } from "@/components/layout/app-sidebar";

export const metadata: Metadata = {
  title: "Next.js Demo",
  description: "Next.js demo application with TypeScript and Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <AppSidebar>{children}</AppSidebar>
      </body>
    </html>
  );
}
