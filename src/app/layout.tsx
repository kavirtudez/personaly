import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Particles from "@/components/Particle"; // Import the Particles component
import { twMerge } from "tailwind-merge";
import "./globals.css";
import Favicon from '@/assets/images/iconn.png';

export const metadata: Metadata = {
  title: "Kazz Virtudez - Portfolio",
  description: "Aspiring ML Engineer/Data Engineer, skilled in Python for data analytics and model development. Consistent top student and national competition winner, passionate about human-centered AI and Data Analytics.",
  icons: [{ rel: 'icon', url: Favicon.src }],
};

const inter = Inter({ subsets: ["latin"], variable: "--font--sans" });
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font--serif",
  weight: ["400"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          poppins.variable,
          "bg-gray-950 text-white antialiased font-serif"
        )}
      >
        {/* Particles Background */}
        <Particles
          className="fixed inset-0 pointer-events-none z-0"
          quantity={100}
          color="#ffffff"
          size={0.5}
          staticity={50}
          ease={50}
        />
        <div className="relative z-10">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
