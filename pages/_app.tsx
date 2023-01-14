import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Syne } from "@next/font/google";

// Components
import Navbar from "./components/Navbar";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${syne.variable} font-sans`}>
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}
