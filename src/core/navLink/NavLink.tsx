import { NavLink as RouterLink, type NavLinkProps } from 'react-router-dom'
import type { ReactNode } from 'react'
import classNames from 'classnames'

interface Props extends NavLinkProps {
  children: ReactNode
}

const NavLink = ({ children, className, ...props }: Props) => {
  return (
    <RouterLink
      {...props}
      className={({ isActive }) =>
        classNames('nav-link', className, { active: isActive })
      }
    >
      {children}
    </RouterLink>
  )
}

export default NavLink
