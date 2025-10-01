import { Fragment, useEffect, useState, type FC } from 'react'
import { Container } from 'react-bootstrap'
import clsx from 'clsx'

import type { SectionId } from '../../pages/slugMap'

import { useMenuCtx, MenuProvider } from '../hooks'
import Menu from '../menu/Menu'
import MenuLink from '../menu/components/menuLink/MenuLink'
import { SocialIcons } from '../../components'

import styles from './styles/header.module.css'
import styless from '../menu/styles/menu.module.css'

export interface HeaderProps {
  activeId: SectionId
  sectionIds: ReadonlyArray<SectionId>
}

const Header: FC<HeaderProps> = ({ activeId, sectionIds }) => {
  const { open, toggle } = useMenuCtx()
  const [scrolled, setScrolled] = useState(false)

  /* sombra / fondo al hacer scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={clsx(
        'position-fixed d-flex justify-content-between',
        styles.wrapper,
        scrolled && styles.scrolled,
      )}
    >
      {/* logo fijo */}
      <div className={styles.boxLogo}>
        <img
          src="/src/assets/logo-iusarrend.png"
          alt="IUSARREND"
          className={styles.logo}
        />
      </div>

      {/* menú */}
      <Container className={clsx(styles.wrapperMenu, open && styles.open)}>
        <Menu>
          {/* logo mobile */}
          <Menu.Header className="d-lg-none">
            <img
              src="/src/assets/shield.png"
              alt="IUSARREND"
              className={styles.logo}
            />
          </Menu.Header>

          {/* enlaces */}
          <Menu.Main>
            {sectionIds.map((id, idx) => {
              const middle = Math.ceil(sectionIds.length / 2)
              return (
                <Fragment key={id}>
                  {/* logo central (sólo desktop) */}
                  {idx === middle && (
                    <Menu.Header className="d-none d-lg-flex">
                      <img
                        src="/src/assets/shield.png"
                        alt="IUSARREND"
                        className={styles.logo}
                      />
                    </Menu.Header>
                  )}
                  <MenuLink
                    id={id}
                    label={id.toUpperCase()}
                    activeId={activeId}
                  />
                </Fragment>
              )
            })}
          </Menu.Main>

          <Menu.Footer>
            <SocialIcons />
          </Menu.Footer>
        </Menu>
      </Container>
      <div className="d-flex align-items-center">
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
      </div>
    </header>
  )
}

/* wrapper para inyectar contexto */
const HeaderMenu: FC<HeaderProps> = (props) => (
  <MenuProvider>
    <Header {...props} />
  </MenuProvider>
)

export default HeaderMenu
