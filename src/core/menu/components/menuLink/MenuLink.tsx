import clsx from 'clsx'
import { NavLink, type NavLinkProps } from 'react-router-dom'
import styles from './styles/menuLink.module.css'

interface Props extends Pick<NavLinkProps, 'to' | 'end' | 'onClick'> {
  label: string
}

const MenuLink = ({ to, label, end, onClick }: Props) => {
  return (
    <li>
      <NavLink
        to={to}
        end={end}
        onClick={onClick}
        className={clsx('mb-2 border-3 text-decoration-none', styles.navLink)}
        // className={({ isActive }) =>
        //   clsx(styles.link, isActive && styles.linkActive)
        // }
      >
        {label}
      </NavLink>
    </li>
  )
}

export default MenuLink
