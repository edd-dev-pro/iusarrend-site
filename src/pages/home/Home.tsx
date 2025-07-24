import DefaultLayout from '../../layouts/DefaultLayout'
import {
  MainSection,
  PlansPricesSection,
  TermsConditionsSection,
  ContactSection,
} from '../../sections'

import useScrollSpy from '../../hooks/useScrollSpy'
import { SECTION_IDS, type SectionId } from '../slugMap'

export default function Home() {
  const activeId = useScrollSpy(SECTION_IDS, 54) as SectionId

  return (
    <DefaultLayout activeId={activeId} sectionIds={SECTION_IDS}>
      <MainSection idValue="Inicio" />
      <PlansPricesSection idValue="Planes" />
      <TermsConditionsSection idValue="Condiciones" />
      <ContactSection idValue="Contacto" />
    </DefaultLayout>
  )
}
