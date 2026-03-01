import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "ScholaVue Infotech | Digital Architecture",
  description: "Next-Gen Software House & School ERP Solutions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    /* Default 'dark' class taaki page load hote hi dark theme dikhe */
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body className="bg-[var(--bg-main)] text-[var(--text-main)] antialiased transition-colors duration-500 overflow-x-hidden w-full">
        {/* Header fix for dark/light switch */}
        <Header />
        
        {/* Main container with overflow protection */}
        <main className="min-h-screen pt-16 relative overflow-x-hidden">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}