import { Header, Footer } from "./AppLayout/exports";
import { Home } from "./pages/exports";

export default function AppLayout() {
  return (
    <>
      <Header />
      <main id="main">
        <Home />
      </main>
      <Footer />
    </>
  );
}
