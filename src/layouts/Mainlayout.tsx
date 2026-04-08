import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { useTheme } from "../context/useTheme";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Mainlayout = ({ children }: Props) => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-white to-blue-50"
      }`}
    >
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};