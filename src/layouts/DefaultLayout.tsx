import type { FC, ReactNode } from 'react'

import Header from '../core/header/Header'
import { BackgroundVisual } from '../components'

interface DefaultLayoutProps {
  children: ReactNode
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <BackgroundVisual />

      <div className="container position-relative z-1">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  )
}

export default DefaultLayout
