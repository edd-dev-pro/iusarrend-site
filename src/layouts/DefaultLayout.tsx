import type { FC, ReactNode } from 'react'
import { Container } from 'react-bootstrap'

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
      <Container className="position-relative">
        <main>{children}</main>
      </Container>
    </div>
  )
}

export default DefaultLayout
