import { MissionVision, Policy, Quote, Values, WhoAreWe } from './components'
import Banner from './components/banner/Banner'

const MainSection = () => {
  return (
    <section className="position-relative">
      <Banner />
      <WhoAreWe />
      <Policy />
      <Quote />
      <MissionVision />
      <Values />
    </section>
  )
}

export default MainSection
