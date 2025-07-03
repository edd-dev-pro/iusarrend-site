import clsx from 'clsx'
import { Container } from 'react-bootstrap'

import Menu from '../menu/Menu'
import MenuLink from '../menu/components/menuLink/MenuLink'
import styles from './styles/header.module.css'

const Header = () => {
  return (
    <header className={clsx('position-fixed d-flex', styles.wrapper)}>
      <Container className="d-flex py-3">
        <Menu>
          <Menu.Header className="d-lg-none">
            <img
              src="/src/assets/shield.png"
              alt="isuarrend-logotipo"
              className={clsx('w-auto', styles.logo)}
            />
          </Menu.Header>

          <Menu.Main>
            <MenuLink to="/" end label="Inicio" />
            <MenuLink to="/plansPrices" label="Planes y Precios" />
            <Menu.Header className="d-none d-lg-flex">
              <img
                src="/src/assets/shield.png"
                alt="isuarrend-logotipo"
                className={clsx('w-auto', styles.logo)}
              />
            </Menu.Header>
            <MenuLink to="/termsConditions" label="Términos y Condiciones" />
            <MenuLink to="/contact" label="Contacto" />
          </Menu.Main>

          <Menu.Footer>Footer</Menu.Footer>
        </Menu>
      </Container>
    </header>
  )
}

export default Header
