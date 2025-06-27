import type { FC } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import NavLinkItem from './components/NavLinkItem'

import styles from './styles/header.module.css'

const Header: FC = () => {
  const location = useLocation()

  return (
    <header className={styles.headerWrapper}>
      <Navbar expand="lg" className={styles.navbar}>
        <Container fluid className={styles.container}>
          <Nav className={styles.leftNav}>
            <NavLinkItem
              to="/"
              label="Inicio"
              icon="bi-house-door"
              currentPath={location.pathname}
            />
            <NavLinkItem
              to="/servicios"
              label="Servicios"
              icon="bi-tools"
              currentPath={location.pathname}
            />
          </Nav>

          <div className={styles.logoWrapper}>
            <Link to="/" className={styles.logo}>
              {/* TODO EMC [06/25/2025]: Add logo */}
              {/* <img src="/logo.svg" alt="IUSARREND" /> */}
              IUSARREND
            </Link>
          </div>

          <Nav className={styles.rightNav}>
            <NavLinkItem
              to="/nosotros"
              label="Nosotros"
              icon="bi-people"
              currentPath={location.pathname}
            />
            <NavLinkItem
              to="/contacto"
              label="Contacto"
              icon="bi-envelope"
              currentPath={location.pathname}
            />
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
