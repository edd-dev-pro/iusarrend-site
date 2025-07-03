import {
  type ReactNode,
  type FC,
  createContext,
  useContext,
  useState,
  useMemo,
} from 'react'
import clsx from 'clsx'
import styles from './styles/menu.module.css'

interface MenuContextValue {
  open: boolean
  toggle: VoidFunction
}

const MenuCtx = createContext<MenuContextValue | undefined>(undefined)
const useMenuCtx = () => {
  const ctx = useContext(MenuCtx)
  if (!ctx) throw new Error('Menu.* must be used inside <Menu>')
  return ctx
}

interface MenuProps {
  children: ReactNode
}

const MenuRoot: FC<MenuProps> = ({ children }) => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen((value) => !value)
  const ctxObj = useMemo(() => ({ open, toggle }), [open])

  return (
    <MenuCtx.Provider value={ctxObj}>
      <nav
        className={clsx(
          'd-flex flex-column w-100',
          styles.root,
          open && styles.open,
        )}
      >
        {children}
      </nav>
    </MenuCtx.Provider>
  )
}

const Header = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  const { toggle } = useMenuCtx()
  return (
    <div className={clsx(styles.header, className)}>
      {children}
      <button className={styles.burger} onClick={toggle} aria-label="toggle" />
    </div>
  )
}

const Main = ({ children }: { children: ReactNode }) => (
  <ul className={clsx('mt-5 mt-sm-3', styles.main)}>{children}</ul>
)

const Footer = ({ children }: { children: ReactNode }) => (
  <div className={clsx('d-lg-none', styles.footer)}>{children}</div>
)

type MenuCompound = FC<MenuProps> & {
  Header: typeof Header
  Main: typeof Main
  Footer: typeof Footer
}

const Menu = MenuRoot as MenuCompound
Menu.Header = Header
Menu.Main = Main
Menu.Footer = Footer

export default Menu
