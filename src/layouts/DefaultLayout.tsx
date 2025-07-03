import type { FC, ReactNode } from 'react'
import { Container } from 'react-bootstrap'

import Header from '../core/header/Header'
import { BackgroundVisual } from '../components'

interface DefaultLayoutProps {
  children: ReactNode
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <BackgroundVisual />

      <Header />
      <Container>
        <main>{children}</main>
      </Container>
    </div>
  )
}

export default DefaultLayout
