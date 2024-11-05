import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Odonto Web - Clínica Dental",
  description: "Clínica dental especializada en servicios odontológicos de alta calidad. Ofrecemos tratamientos dentales, ortodoncias, implantes y más.",
  keywords: "dentista, clínica dental, odontología, ortodoncista, implantes dentales, limpieza dental, blanqueamiento dental",
  title: 'Odonto Web - Clínica Dental',
  description: 'Servicios odontológicos de alta calidad',
  icons: {
    icon: "/iconiwinser.svg",
    shortcut: "/iconiwinser.svg",
    apple: "/iconiwinser.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
