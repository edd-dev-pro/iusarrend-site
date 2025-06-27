import type { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { clsx } from 'clsx'

import styles from '../styles/header.module.css'

interface NavLinkItemProps {
  to: string
  label: string
  icon?: string
  currentPath: string
}

const NavLinkItem: FC<NavLinkItemProps> = ({
  to,
  label,
  icon,
  currentPath,
}) => {
  const isActive = currentPath === to

  return (
    <NavLink
      to={to}
      className={clsx(styles.navLink, { [styles.active]: isActive })}
    >
      {icon && <i className={`bi ${icon} ${styles.icon}`} aria-hidden="true" />}
      <span>{label}</span>
    </NavLink>
  )
}

export default NavLinkItem
