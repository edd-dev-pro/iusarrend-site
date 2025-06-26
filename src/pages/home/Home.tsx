import DefaultLayout from '../../layouts/DefaultLayout'
import {
  MainSection,
  MissionVision,
  Policy,
  Quote,
  Values,
  WhoAreWe,
} from '../../sections'

const Home = () => {
  return (
    <DefaultLayout>
      <MainSection />
      <MissionVision />
      <Policy />
      <Quote />
      <Values />
      <WhoAreWe />
    </DefaultLayout>
  )
}

export default Home
