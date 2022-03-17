import { Header, Footer } from "./AppLayout/exports";
import useWindowSize from "./hooks/useWindowSize";
import { Home } from "./pages/exports";

export default function AppLayout() {
  const { width } = useWindowSize();
  console.log(width);
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
