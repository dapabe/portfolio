import { Header, Footer } from "./AppLayout/exports";
import { Home } from "./pages/exports";

export default function AppLayout() {
  return (
    <>
      <Header />
      <main className="relative max-h-max min-h-screen space-y-8 xl:max-w-full">
        <Home />
      </main>
      <Footer />
    </>
  );
}
