import type { Metadata } from "next";
import "@/app/ui/globals.css"
import "@/app/ui/classes";
import { ThemeSwitch } from "@/components/theme-switch";
import { monserrat } from './ui/fonts';
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Poke Desck App",
    template: "%s | Poke Desck"
  },
  description: "Description of the Poke Desck app",
  creator: "Ramiro Canevari",
  keywords: "XXX, pokemon, pokedex"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monserrat.className} antialiased`}>
        <ThemeSwitch attribute="class" defaultTheme="dark">
          <Navbar></Navbar>
            {children}  
        </ThemeSwitch>
      </body>
    </html>
  );
}
