import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { useMenuCtx } from '../../../hooks'
import clsx from 'clsx'
import styles from './styles/menuLink.module.css'

interface MenuLinkProps {
  id: string
  label: string
  activeId: string
}

const MenuLink: FC<MenuLinkProps> = ({ id, label, activeId }) => {
  const { toggle } = useMenuCtx()
  const slug = id.toLowerCase()
  const isActive = id === activeId

  return (
    <li className="d-block d-md-flex align-items-md-center">
      <Link
        to={`/${slug}`}
        className={clsx(styles.navLink, isActive && styles.active)}
        onClick={() => {
          const el = document.getElementById(id)
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
          toggle()
        }}
      >
        {label}
      </Link>
    </li>
  )
}

export default MenuLink
