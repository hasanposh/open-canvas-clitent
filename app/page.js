import { FooterLinks } from "./components/FooterLinks";
import Navbar from "./components/Navbar";
import ThemeToggleBtn from "./components/ThemeToggleBtn";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <FooterLinks />
    </main>
  );
}
