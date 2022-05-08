//Containers
import MainContainer from './containers/MainContainer'
//Components
import NavSection from './components/NavSection/NavSection'
import HeroSection from './components/HeroSection/HeroSection'
import MainSection from './components/MainSection/MainSection'
import ProductsSection from './components/ProductsSection/ProductsSection'

export default function App() {
  return (
    <MainContainer>
      <NavSection />
      <HeroSection />
      <MainSection />
      <ProductsSection />
    </MainContainer>
  )
}
