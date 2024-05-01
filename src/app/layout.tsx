import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import clsx from "clsx";
import { Toaster } from "@/components/ui/toaster";
import getCurrentUser from "./actions/getCurrentUser";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rently - Buy and Sell your rental properties.",
  description:
    "Find your perfect rental home effortlessly with our intuitive house rental properties.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx(inter.className, "bg-slate-950")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="p-4 max-w-screen-xl w-full mx-auto">
            <NextTopLoader color="#3b82f6" showSpinner={false} />
            <Toaster />
            <Navbar currentUser={currentUser} />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
