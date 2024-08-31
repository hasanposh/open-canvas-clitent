import { Varela } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const varela = Varela({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "OpenCanvas ",
  description: "A Blog Web Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={varela.className}>
        <Navbar />
        <div className="min-h-[calc(100vh-522px)]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
