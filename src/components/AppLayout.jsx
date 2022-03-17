import { Header, Footer } from "./AppLayout/exports";
import useOnResize from "./hooks/useOnResize";
import { Home } from "./pages/exports";

export default function AppLayout() {
  console.log(useOnResize());
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}
