import { useEffect, useState } from 'react'
import type { SectionId } from '../pages/slugMap'

/**
 * Observa las secciones visibles en pantalla y devuelve el id activo.
 *
 * @param ids    ids de secciones EN ORDEN de aparición
 * @param offset altura (px) que ocupa el header fijo
 */

const useScrollSpy = (ids: readonly SectionId[], offset = 64): SectionId => {
  const [activeId, setActiveId] = useState<SectionId>(ids[0])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id as SectionId
            setActiveId(id)
            break
          }
        }
      },
      {
        rootMargin: `-${offset}px 0px -70% 0px`,
        threshold: 0,
      },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })

    return () => obs.disconnect()
  }, [ids, offset])

  return activeId
}

export default useScrollSpy
