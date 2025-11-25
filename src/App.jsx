import Header from "./components/Header";
import Banner from "./components/Banner";
import Looks from "./components/Looks";
import Lancamentos from "./components/Lancamentos";
import Novidades from "./components/Novidades";
import Footer from "./components/Footer";

function App() {

  
  return (
    <>
      <Header />

  <section id="looks">
    <Looks />
  </section>

  <section id="lancamentos">
    <Lancamentos />
  </section>

  <section id="novidades">
    <Novidades />
  </section>

  <section id="Banner">
    <Novidades />
  </section>

  <Footer />
    </>
  );
}
export default App;


