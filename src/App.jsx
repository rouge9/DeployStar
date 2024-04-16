import ShuffleHero from "./componets/ShuffleHero";
import Gallery from "./componets/Gallery";
import Clients from "./componets/Clients";
import Layout from "./layout/Layout";
import Services from "./componets/Services";
import SimpleClients from "./componets/SimpleClients";

function App() {
  return (
    <Layout>
      <ShuffleHero />
      <SimpleClients />
      <Clients />
      <Gallery />
      <Services />
    </Layout>
  );
}

export default App;
