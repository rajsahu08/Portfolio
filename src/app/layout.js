import { Geist_Mono } from "next/font/google"
import "./globals.css";
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} bg-black text-white scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}
