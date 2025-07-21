import type { ReactNode, FC } from 'react'
import clsx from 'clsx'
import styles from './styles/menu.module.css'
import { useMenuCtx } from '../hooks'

interface MenuProps {
  children: ReactNode
}

const MenuRoot: FC<MenuProps> = ({ children }) => {
  const { open } = useMenuCtx()
  return (
    <nav className={clsx(styles.root, open && styles.open)}>{children}</nav>
  )
}

const Header = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  const { open, toggle } = useMenuCtx()

  return (
    <div className={clsx(styles.header, className)}>
      {children}
      <button
        aria-label="toggle menu"
        aria-expanded={open}
        onClick={toggle}
        className={clsx(styles.burger, open && styles.burgerOpen)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
    </div>
  )
}

const Main = ({ children }: { children: ReactNode }) => (
  <ul className={clsx('ms-md-4', styles.main)}>{children}</ul>
)

const Footer = ({ children }: { children: ReactNode }) => (
  <div className={clsx('pt-4 d-lg-none', styles.footer)}>{children}</div>
)

type Compound = FC<MenuProps> & {
  Header: typeof Header
  Main: typeof Main
  Footer: typeof Footer
}

const Menu = MenuRoot as Compound
Menu.Header = Header
Menu.Main = Main
Menu.Footer = Footer

export default Menu
