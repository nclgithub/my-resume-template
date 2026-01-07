import "../globals.css";
import Navbar from "@/components/navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex flex-col h-screen">
        <Navbar basePath="/main" />
        {children}
    </section>
  );
}
