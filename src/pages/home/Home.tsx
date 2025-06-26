import DefaultLayout from '../../layouts/DefaultLayout'
import {
  ContactSection,
  MainSection,
  PlansPricesSection,
  TermsConditionsSection,
} from '../../sections'

const Home = () => {
  return (
    <DefaultLayout>
      <MainSection />
      <PlansPricesSection />
      <TermsConditionsSection />
      <ContactSection />
    </DefaultLayout>
  )
}

export default Home
