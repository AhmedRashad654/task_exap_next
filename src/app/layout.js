import "./globals.css";
import { Cairo } from "next/font/google";
const cairo = Cairo({ subsets: ["arabic"] });
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cairo.className}`}>{children}</body>
    </html>
  );
}
