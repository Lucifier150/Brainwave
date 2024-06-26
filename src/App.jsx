import ButtonGradiant from './assets/svg/ButtonGradient'
import Benefits from './components/Benefits';
import Button from './components/Button';
import Collaboration from './components/Collaboration';
import Header from './components/Header';
import Hero from './components/Hero';
const App = () => {
  return (
    <>

      <div className='pt-[4.5rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
      </div>
      <ButtonGradiant />
    </>
  )
}

export default App