import { Benefits, Requirements } from './components'

const PlansPricesSection = ({ idValue }: { idValue: string }) => {
  return (
    <section id={idValue}>
      <Benefits />
      <Requirements />
    </section>
  )
}

export default PlansPricesSection
