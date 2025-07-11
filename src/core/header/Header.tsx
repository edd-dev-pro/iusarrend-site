import { useEffect, useState } from 'react'
import { useMenuCtx, MenuProvider } from '../hooks'
import { Container } from 'react-bootstrap'
import clsx from 'clsx'

import Menu from '../menu/Menu'
import MenuLink from '../menu/components/menuLink/MenuLink'
import { SocialIcons } from '../../components'

import styles from './styles/header.module.css'
import styless from '../menu/styles/menu.module.css'

const Header = () => {
  const { open, toggle } = useMenuCtx()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={clsx(
        'position-fixed d-flex  justify-content-between',
        styles.wrapper,
        scrolled && styles.scrolled,
      )}
    >
      <div className={styles.boxLogo}>
        <img
          src="./src/assets/logo-iusarrend.png"
          alt=""
          className={styles.logo}
        />
      </div>
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
    </header>
  )
}

const HeaderMenu = () => (
  <MenuProvider>
    <Header />
  </MenuProvider>
)

export default HeaderMenu
