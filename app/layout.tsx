import type { Metadata } from "next";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Nico Store",
  description: "Os melhores produtos você só encontra aqui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <section className="px-4 py-2">{children}</section>
        </Suspense>
        <footer className="footer bg-neutral text-neutral-content p-10 mt-2">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </body>
    </html>
  );
}
