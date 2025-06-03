import Associates from "./components/blocks/Associates"
import Banner from "./components/blocks/Banner"
import Cards from "./components/blocks/Cards"
import Form from "./components/blocks/Form"
import Map from "./components/blocks/Map"
import Slides from "./components/blocks/Slides"
import Layout from "./components/layouts/Layout"

function App() {
  return (
    <Layout>
      <Banner />
      <Cards />
      <Associates />
      <Map />
      <Slides />
      <Form />
    </Layout>
  )
}

export default App
