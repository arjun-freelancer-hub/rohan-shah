import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";



const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Rohan Shah",
  description: "Rohan Shah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <ScrollToTop />
        <Navbar />
        <div className="min-h-screen bg-gray-50 flex flex-col mt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
