import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import type { SectionId, SectionSlug } from '../pages/slugMap'

type IdToSlugFn = (id: SectionId) => SectionSlug

/**
 * Observa las secciones, devuelve el id visible y – solo si el slug
 * ES DISTINTO – actualiza la URL con `navigate`.
 */
export default function useScrollSpy(
  ids: readonly SectionId[],
  offset = 64,
  toSlug: IdToSlugFn,
) {
  const [activeId, setActiveId] = useState<SectionId>(ids[0])
  const navigate = useNavigate()
  const { pathname } = useLocation() // '/planes', …

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = e.target.id as SectionId
            setActiveId(id)

            /* solo navegamos si el slug cambió */
            const slug = toSlug(id)
            if (pathname !== `/${slug}`) {
              navigate(`/${slug}`, { replace: true })
            }
          }
        })
      },
      { rootMargin: `-${offset}px 0px -70% 0px` },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [ids, offset, toSlug, pathname, navigate])

  return activeId
}
