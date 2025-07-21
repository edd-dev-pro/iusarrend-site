import type { FC, ReactNode } from 'react'
import { BackgroundVisual } from '../components'
import { HeaderMenu } from '../core'
import type { SectionId } from '../pages/slugMap'

interface Props {
  children: ReactNode
  activeId: SectionId
  sectionIds: ReadonlyArray<SectionId>
}

const DefaultLayout: FC<Props> = ({ children, activeId, sectionIds }) => (
  <div className="layout-wrapper">
    <BackgroundVisual />
    <HeaderMenu activeId={activeId} sectionIds={sectionIds} />
    <main>{children}</main>
  </div>
)

export default DefaultLayout
