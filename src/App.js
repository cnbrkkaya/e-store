//Containers
import MainContainer from './containers/MainContainer'
//Components
import NavSection from './sections/NavSection/NavSection'
import ProductsSection from './sections/ProductsSection/ProductsSection'
import FeaturedSection from './sections/FeaturedSection/FeaturedSection'

export default function App() {
  return (
    <MainContainer>
      <NavSection />
      <FeaturedSection />
      <ProductsSection />
    </MainContainer>
  )
}
