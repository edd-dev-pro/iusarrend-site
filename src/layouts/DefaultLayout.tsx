import type { FC, ReactNode } from 'react'

import { BackgroundVisual } from '../components'
import { HeaderMenu } from '../core'

interface DefaultLayoutProps {
  children: ReactNode
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <BackgroundVisual />

      <HeaderMenu />
      <main>{children}</main>
    </div>
  )
}

export default DefaultLayout
