import { NavLink, type NavLinkProps } from 'react-router-dom'
// import clsx from 'clsx'
// import styles from '../header.module.css'
// import styles from '../../../header/styles/header.module.css'

interface Props extends Pick<NavLinkProps, 'to' | 'end' | 'onClick'> {
  label: string
}

const MenuLink = ({ to, label, end, onClick }: Props) => {
  return (
    <li className="text-center p-3 p-sm-2">
      <NavLink
        to={to}
        end={end}
        onClick={onClick}
        className="mb-2 border-3 text-decoration-none"
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
