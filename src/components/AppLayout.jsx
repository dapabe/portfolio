import Header from "./layout/Header";
import Footer from "./layout/Footer";

export default function AppLayout({ children }) {
  return (
    <>
      <Header />
      <main className="relative max-h-max min-h-screen space-y-8 scroll-smooth xl:max-w-full">
        {children}
      </main>
      <Footer />
    </>
  );
}
