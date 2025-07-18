import { MissionVision, Policy, Quote, Values, WhoAreWe } from './components'
import Banner from './components/banner/Banner'

const MainSection = ({ idValue }: { idValue: string }) => {
  return (
    <section id={idValue}>
      <Banner />
      <WhoAreWe />
      <Policy />
      <MissionVision />
      <Values />
      <Quote />
    </section>
  )
}

export default MainSection
