import { Container } from 'react-bootstrap'
import { useMenuCtx, MenuProvider } from '../hooks'
import clsx from 'clsx'

import Menu from '../menu/Menu'
import MenuLink from '../menu/components/menuLink/MenuLink'
import { SocialIcons } from '../../components'

import styles from './styles/header.module.css'
import styless from '../menu/styles/menu.module.css'

const Header = () => {
  const { open, toggle } = useMenuCtx()

  return (
    <header className={clsx('position-fixed d-flex', styles.wrapper)}>
      <button
        aria-label="toggle menu"
        aria-expanded={open}
        onClick={toggle}
        className={clsx(styles.btnHeader, styless.burger)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
      <Container className={clsx(styles.wrapperMenu, open && styles.open)}>
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

          <Menu.Footer>
            <SocialIcons />
          </Menu.Footer>
        </Menu>
      </Container>
    </header>
  )
}

const HeaderMenu = () => (
  <MenuProvider>
    <Header />
  </MenuProvider>
)

export default HeaderMenu
