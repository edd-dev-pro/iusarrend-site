import { MissionVision, Policy, Quote, Values, WhoAreWe } from './components'
import Banner from './components/banner/Banner'

const MainSection = () => {
  return (
    <section>
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
