import DefaultLayout from '../../layouts/DefaultLayout'
import {
  PlansPricesSection,
  Benefits,
  Prices,
  Requirements,
} from '../../sections'

const PlansPrices = () => {
  return (
    <DefaultLayout>
      <PlansPricesSection />
      <Benefits />
      <Prices />
      <Requirements />
    </DefaultLayout>
  )
}

export default PlansPrices
