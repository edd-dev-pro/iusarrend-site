import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import DefaultLayout from '../../layouts/DefaultLayout'
import {
  MainSection,
  PlansPricesSection,
  TermsConditionsSection,
  ContactSection,
} from '../../sections'

import {
  SECTION_IDS,
  slugToId,
  type SectionId,
  type SectionSlug,
} from '../slugMap'

export default function Home() {
  const { slug } = useParams<'slug'>()

  const [activeId, setActiveId] = useState<SectionId>('Inicio')

  useEffect(() => {
    const id = slug ? slugToId[slug as SectionSlug] : 'Inicio'
    setActiveId(id)

    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [slug])

  return (
    <DefaultLayout activeId={activeId} sectionIds={SECTION_IDS}>
      <MainSection idValue="Inicio" />
      <PlansPricesSection idValue="Planes" />
      <TermsConditionsSection idValue="Condiciones" />
      <ContactSection idValue="Contacto" />
    </DefaultLayout>
  )
}
