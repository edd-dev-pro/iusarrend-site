import { useCallback } from 'react'

/**
 * Devuelve una función que hace scroll suave hasta el elemento con el ID indicado,
 * compensando la altura de un header fijo.
 *
 * @param offset  Altura del header en píxeles (64 px por defecto).
 */
const useScrollToSection = (offset = 64) => {
  return useCallback(
    (id: string) => {
      const el = document.getElementById(id)
      if (!el) return

      const y = el.getBoundingClientRect().top + window.pageYOffset - offset

      window.scrollTo({ top: y, behavior: 'smooth' })
    },
    [offset],
  )
}

export default useScrollToSection
