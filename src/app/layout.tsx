import "./globals.css";
import { Inter } from "next/font/google";
import { AuthContextProvider } from "../context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Platinum Realty Investments",
  description: "PRI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthContextProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </AuthContextProvider>
  );
}
