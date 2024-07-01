import ButtonGradiant from './assets/svg/ButtonGradient'
import Benefits from './components/Benefits';
import Button from './components/Button';
import Collaboration from './components/Collaboration';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Roadmap from './components/Roadmap';
import Services from './components/Services';
const App = () => {
  return (
    <>

      <div className='pt-[4.5rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
      </div>
      <ButtonGradiant />
    </>
  )
}

export default App
