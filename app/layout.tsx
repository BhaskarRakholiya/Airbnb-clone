import "./globals.css";
import { Nunito } from "next/font/google";

import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

const font = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Toaster />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
