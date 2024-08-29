import { Varela } from "next/font/google";
import "./globals.css";

const varela = Varela({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "OpenCanvas ",
  description: "A Blog Web Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={varela.className}>{children}</body>
    </html>
  );
}
