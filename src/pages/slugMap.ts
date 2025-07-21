/** Ids tal como aparecen en el HTML (respetar mayúsculas) */
export const SECTION_IDS = [
  'Inicio',
  'Planes',
  'Condiciones',
  'Contacto',
] as const
export type SectionId = (typeof SECTION_IDS)[number] //  'Inicio' | …
export type SectionSlug = Lowercase<SectionId> //  'inicio' | …

/** Mapa id → slug que se usa para generar la URL */
export const idToSlug: Record<SectionId, SectionSlug> = {
  Inicio: 'inicio',
  Planes: 'planes',
  Condiciones: 'condiciones',
  Contacto: 'contacto',
}

/** Mapa inverso (slug → id) para resolver al hacer clic o pegar URL */
export const slugToId = Object.fromEntries(
  Object.entries(idToSlug).map(([id, slug]) => [slug, id]),
) as Record<SectionSlug, SectionId>
